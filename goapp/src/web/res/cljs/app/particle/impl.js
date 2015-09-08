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
return (function (p1__52079_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52079_SHARP_),partInfo.id);
});})(partInfo))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));var newpart = tool.particle.jsobj__GT_particle.call(null,partInfo);if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,newpart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,newpart);
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-centerPos",(function (_,data,ctx){var id = (data[(0)]);var x = (data[(1)]);var y = (data[(2)]);var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (id,x,y){
return (function (p1__52080_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52080_SHARP_),id);
});})(id,x,y))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,cljs.core.get_in.call(null,target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null))], null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return ctx;
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"info",(function (_,data,p__52081){var map__52082 = p__52081;var map__52082__$1 = ((cljs.core.seq_QMARK_.call(null,map__52082))?cljs.core.apply.call(null,cljs.core.hash_map,map__52082):map__52082);var ctx = map__52082__$1;var onModel = cljs.core.get.call(null,map__52082__$1,new cljs.core.Keyword(null,"onModel","onModel",-1713159485));var c__6202__auto___52108 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___52108,map__52082,map__52082__$1,ctx,onModel){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___52108,map__52082,map__52082__$1,ctx,onModel){
return (function (state_52099){var state_val_52100 = (state_52099[(1)]);if((state_val_52100 === (2)))
{var inst_52097 = (state_52099[(2)]);var state_52099__$1 = state_52099;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52099__$1,inst_52097);
} else
{if((state_val_52100 === (1)))
{var inst_52085 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_52086 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52085,null));var inst_52087 = cljs.core.get_in.call(null,ctx,inst_52086);var inst_52088 = cljs.core.count.call(null,inst_52087);var inst_52089 = [new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)];var inst_52090 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52089,null));var inst_52091 = cljs.core.get_in.call(null,ctx,inst_52090);var inst_52092 = cljs.core.clj__GT_js.call(null,inst_52091);var inst_52093 = {"count":inst_52088,"bgColor":inst_52092};var inst_52094 = [null,inst_52093,data];var inst_52095 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_52094,null));var state_52099__$1 = state_52099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52099__$1,(2),onModel,inst_52095);
} else
{return null;
}
}
});})(c__6202__auto___52108,map__52082,map__52082__$1,ctx,onModel))
;return ((function (switch__6187__auto__,c__6202__auto___52108,map__52082,map__52082__$1,ctx,onModel){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_52104 = [null,null,null,null,null,null,null];(statearr_52104[(0)] = state_machine__6188__auto__);
(statearr_52104[(1)] = (1));
return statearr_52104;
});
var state_machine__6188__auto____1 = (function (state_52099){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_52099);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e52105){if((e52105 instanceof Object))
{var ex__6191__auto__ = e52105;var statearr_52106_52109 = state_52099;(statearr_52106_52109[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52099);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52110 = state_52099;
state_52099 = G__52110;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_52099){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_52099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___52108,map__52082,map__52082__$1,ctx,onModel))
})();var state__6204__auto__ = (function (){var statearr_52107 = f__6203__auto__.call(null);(statearr_52107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___52108);
return statearr_52107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___52108,map__52082,map__52082__$1,ctx,onModel))
);
return ctx;
}));
app.particle.impl.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"add texture",(function (_,data,p__52111){var map__52112 = p__52111;var map__52112__$1 = ((cljs.core.seq_QMARK_.call(null,map__52112))?cljs.core.apply.call(null,cljs.core.hash_map,map__52112):map__52112);var ctx = map__52112__$1;var gl__$1 = cljs.core.get.call(null,map__52112__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));var id = (data[(0)]);var img = (data[(1)]);var texObj = app.particle.impl.cacheTex.call(null,gl__$1,img);gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),id], null),texObj);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-limit",(function (_,data,ctx){var n = data;return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),n);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-bgColor",(function (_,data,ctx){var r = (data[(0)]);var g = (data[(1)]);var b = (data[(2)]);return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}));
