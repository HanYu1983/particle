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
return (function (p1__57419_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57419_SHARP_),partInfo.id);
});})(partInfo))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));var newpart = tool.particle.jsobj__GT_particle.call(null,partInfo);if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,newpart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,newpart);
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-centerPos",(function (_,data,ctx){var id = (data[(0)]);var x = (data[(1)]);var y = (data[(2)]);var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (id,x,y){
return (function (p1__57420_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57420_SHARP_),id);
});})(id,x,y))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,cljs.core.get_in.call(null,target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null))], null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return ctx;
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"info",(function (_,data,p__57421){var map__57422 = p__57421;var map__57422__$1 = ((cljs.core.seq_QMARK_.call(null,map__57422))?cljs.core.apply.call(null,cljs.core.hash_map,map__57422):map__57422);var ctx = map__57422__$1;var onModel = cljs.core.get.call(null,map__57422__$1,new cljs.core.Keyword(null,"onModel","onModel",-1713159485));var c__6202__auto___57444 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___57444,map__57422,map__57422__$1,ctx,onModel){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___57444,map__57422,map__57422__$1,ctx,onModel){
return (function (state_57435){var state_val_57436 = (state_57435[(1)]);if((state_val_57436 === (2)))
{var inst_57433 = (state_57435[(2)]);var state_57435__$1 = state_57435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57435__$1,inst_57433);
} else
{if((state_val_57436 === (1)))
{var inst_57425 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_57426 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57425,null));var inst_57427 = cljs.core.get_in.call(null,ctx,inst_57426);var inst_57428 = cljs.core.count.call(null,inst_57427);var inst_57429 = {"count":inst_57428};var inst_57430 = [null,inst_57429,data];var inst_57431 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_57430,null));var state_57435__$1 = state_57435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57435__$1,(2),onModel,inst_57431);
} else
{return null;
}
}
});})(c__6202__auto___57444,map__57422,map__57422__$1,ctx,onModel))
;return ((function (switch__6187__auto__,c__6202__auto___57444,map__57422,map__57422__$1,ctx,onModel){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_57440 = [null,null,null,null,null,null,null];(statearr_57440[(0)] = state_machine__6188__auto__);
(statearr_57440[(1)] = (1));
return statearr_57440;
});
var state_machine__6188__auto____1 = (function (state_57435){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_57435);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e57441){if((e57441 instanceof Object))
{var ex__6191__auto__ = e57441;var statearr_57442_57445 = state_57435;(statearr_57442_57445[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__57446 = state_57435;
state_57435 = G__57446;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_57435){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_57435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___57444,map__57422,map__57422__$1,ctx,onModel))
})();var state__6204__auto__ = (function (){var statearr_57443 = f__6203__auto__.call(null);(statearr_57443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___57444);
return statearr_57443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___57444,map__57422,map__57422__$1,ctx,onModel))
);
return ctx;
}));
