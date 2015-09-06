// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.impl');
goog.require('cljs.core');
goog.require('app.particle.abstract$');
goog.require('app.particle.abstract$');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-particle",(function (_,data,ctx){var partInfo = data;var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (partInfo){
return (function (p1__133699_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__133699_SHARP_),partInfo.id);
});})(partInfo))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));var newpart = tool.particle.jsobj__GT_particle.call(null,partInfo);if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,newpart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,newpart);
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-centerPos",(function (_,data,ctx){var id = (data[(0)]);var x = (data[(1)]);var y = (data[(2)]);var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (id,x,y){
return (function (p1__133700_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__133700_SHARP_),id);
});})(id,x,y))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,cljs.core.get_in.call(null,target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null))], null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return ctx;
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"info",(function (_,data,p__133701){var map__133702 = p__133701;var map__133702__$1 = ((cljs.core.seq_QMARK_.call(null,map__133702))?cljs.core.apply.call(null,cljs.core.hash_map,map__133702):map__133702);var ctx = map__133702__$1;var onModel = cljs.core.get.call(null,map__133702__$1,new cljs.core.Keyword(null,"onModel","onModel",-1713159485));var c__6202__auto___133724 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___133724,map__133702,map__133702__$1,ctx,onModel){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___133724,map__133702,map__133702__$1,ctx,onModel){
return (function (state_133715){var state_val_133716 = (state_133715[(1)]);if((state_val_133716 === (2)))
{var inst_133713 = (state_133715[(2)]);var state_133715__$1 = state_133715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_133715__$1,inst_133713);
} else
{if((state_val_133716 === (1)))
{var inst_133705 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_133706 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_133705,null));var inst_133707 = cljs.core.get_in.call(null,ctx,inst_133706);var inst_133708 = cljs.core.count.call(null,inst_133707);var inst_133709 = {"count":inst_133708};var inst_133710 = [null,inst_133709,data];var inst_133711 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_133710,null));var state_133715__$1 = state_133715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_133715__$1,(2),onModel,inst_133711);
} else
{return null;
}
}
});})(c__6202__auto___133724,map__133702,map__133702__$1,ctx,onModel))
;return ((function (switch__6187__auto__,c__6202__auto___133724,map__133702,map__133702__$1,ctx,onModel){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_133720 = [null,null,null,null,null,null,null];(statearr_133720[(0)] = state_machine__6188__auto__);
(statearr_133720[(1)] = (1));
return statearr_133720;
});
var state_machine__6188__auto____1 = (function (state_133715){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_133715);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e133721){if((e133721 instanceof Object))
{var ex__6191__auto__ = e133721;var statearr_133722_133725 = state_133715;(statearr_133722_133725[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_133715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e133721;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__133726 = state_133715;
state_133715 = G__133726;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_133715){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_133715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___133724,map__133702,map__133702__$1,ctx,onModel))
})();var state__6204__auto__ = (function (){var statearr_133723 = f__6203__auto__.call(null);(statearr_133723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___133724);
return statearr_133723;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___133724,map__133702,map__133702__$1,ctx,onModel))
);
return ctx;
}));
app.particle.impl.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"add texture",(function (_,data,p__133727){var map__133728 = p__133727;var map__133728__$1 = ((cljs.core.seq_QMARK_.call(null,map__133728))?cljs.core.apply.call(null,cljs.core.hash_map,map__133728):map__133728);var ctx = map__133728__$1;var gl__$1 = cljs.core.get.call(null,map__133728__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));var id = (data[(0)]);var img = (data[(1)]);var texObj = app.particle.impl.cacheTex.call(null,gl__$1,img);gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),id], null),texObj);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-limit",(function (_,data,ctx){var n = data;return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),n);
}));
