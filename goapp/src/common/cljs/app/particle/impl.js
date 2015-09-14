// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.impl');
goog.require('cljs.core');
goog.require('gl.util');
goog.require('app.particle.draw');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('app.particle.abstract$');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('tool.particle');
goog.require('gl.util');
goog.require('app.particle.abstract$');
goog.require('app.particle.draw');
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"init",(function (_,data,ctx){var canvas = data;var gl__$1 = gl.util.getContext.call(null,canvas,(function (){var obj10846 = {};return obj10846;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"gl","gl",-246422634),gl__$1),new cljs.core.Keyword(null,"draw","draw",1358331674),draw);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-particle",(function (_,data,ctx){var partInfo = data;var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (partInfo){
return (function (p1__10847_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10847_SHARP_),partInfo.id);
});})(partInfo))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));var newpart = tool.particle.jsobj__GT_particle.call(null,partInfo);if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,newpart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,newpart);
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-centerPos",(function (_,data,ctx){var id = (data[(0)]);var x = (data[(1)]);var y = (data[(2)]);var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (id,x,y){
return (function (p1__10848_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10848_SHARP_),id);
});})(id,x,y))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));if(cljs.core.truth_(target))
{return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,new cljs.core.PersistentArrayMap.fromArray([target,cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,cljs.core.get_in.call(null,target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null))], null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))], true, false)));
} else
{return ctx;
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"info",(function (_,data,p__10849){var map__10850 = p__10849;var map__10850__$1 = ((cljs.core.seq_QMARK_.call(null,map__10850))?cljs.core.apply.call(null,cljs.core.hash_map,map__10850):map__10850);var ctx = map__10850__$1;var onModel = cljs.core.get.call(null,map__10850__$1,new cljs.core.Keyword(null,"onModel","onModel",-1713159485));var c__6203__auto___10876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10876,map__10850,map__10850__$1,ctx,onModel){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10876,map__10850,map__10850__$1,ctx,onModel){
return (function (state_10867){var state_val_10868 = (state_10867[(1)]);if((state_val_10868 === (2)))
{var inst_10865 = (state_10867[(2)]);var state_10867__$1 = state_10867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10867__$1,inst_10865);
} else
{if((state_val_10868 === (1)))
{var inst_10853 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_10854 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10853,null));var inst_10855 = cljs.core.get_in.call(null,ctx,inst_10854);var inst_10856 = cljs.core.count.call(null,inst_10855);var inst_10857 = [new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)];var inst_10858 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10857,null));var inst_10859 = cljs.core.get_in.call(null,ctx,inst_10858);var inst_10860 = cljs.core.apply.call(null,cljs.core.array,inst_10859);var inst_10861 = {"count":inst_10856,"bgColor":inst_10860};var inst_10862 = [null,inst_10861,data];var inst_10863 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10862,null));var state_10867__$1 = state_10867;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10867__$1,(2),onModel,inst_10863);
} else
{return null;
}
}
});})(c__6203__auto___10876,map__10850,map__10850__$1,ctx,onModel))
;return ((function (switch__6188__auto__,c__6203__auto___10876,map__10850,map__10850__$1,ctx,onModel){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10872 = [null,null,null,null,null,null,null];(statearr_10872[(0)] = state_machine__6189__auto__);
(statearr_10872[(1)] = (1));
return statearr_10872;
});
var state_machine__6189__auto____1 = (function (state_10867){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10873){if((e10873 instanceof Object))
{var ex__6192__auto__ = e10873;var statearr_10874_10877 = state_10867;(statearr_10874_10877[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10878 = state_10867;
state_10867 = G__10878;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10867){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10876,map__10850,map__10850__$1,ctx,onModel))
})();var state__6205__auto__ = (function (){var statearr_10875 = f__6204__auto__.call(null);(statearr_10875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10876);
return statearr_10875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10876,map__10850,map__10850__$1,ctx,onModel))
);
return ctx;
}));
app.particle.impl.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"add texture",(function (_,data,p__10879){var map__10880 = p__10879;var map__10880__$1 = ((cljs.core.seq_QMARK_.call(null,map__10880))?cljs.core.apply.call(null,cljs.core.hash_map,map__10880):map__10880);var ctx = map__10880__$1;var gl__$1 = cljs.core.get.call(null,map__10880__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));var id = (data[(0)]);var img = (data[(1)]);var texObj = app.particle.impl.cacheTex.call(null,gl__$1,img);gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),id], null),texObj);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-limit",(function (_,data,ctx){var n = data;return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),n);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-bgColor",(function (_,data,ctx){var r = (data[(0)]);var g = (data[(1)]);var b = (data[(2)]);return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"clear particle",(function (_,data,ctx){return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.List.EMPTY);
}));
