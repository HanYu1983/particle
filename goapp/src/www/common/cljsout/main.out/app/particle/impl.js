// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.particle.impl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.util');
goog.require('gl.texture');
goog.require('tool.particle');
goog.require('app.particle.draw');
goog.require('app.particle.abstract$');
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"init",(function (_,data,ctx){
var canvas = data;
var gl__$1 = gl.util.getContext.call(null,canvas,{});
var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"gl","gl",-246422634),gl__$1),new cljs.core.Keyword(null,"draw","draw",1358331674),draw);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-particle",(function (_,data,ctx){
var partInfo = data;
var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (partInfo){
return (function (p1__9238_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__9238_SHARP_),partInfo.id);
});})(partInfo))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));
var newpart = tool.particle.jsobj__GT_particle.call(null,partInfo);
if(cljs.core.truth_(target)){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([target,cljs.core.merge.call(null,newpart,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))])));
} else {
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,newpart);
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-centerPos",(function (_,data,ctx){
var id = (data[(0)]);
var x = (data[(1)]);
var y = (data[(2)]);
var target = cljs.core.first.call(null,cljs.core.filter.call(null,((function (id,x,y){
return (function (p1__9239_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__9239_SHARP_),id);
});})(id,x,y))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));
if(cljs.core.truth_(target)){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([target,cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,cljs.core.get_in.call(null,target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null))], null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))])));
} else {
return ctx;
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"info",(function (_,data,p__9240){
var map__9241 = p__9240;
var map__9241__$1 = ((((!((map__9241 == null)))?(((((map__9241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9241):map__9241);
var ctx = map__9241__$1;
var onModel = cljs.core.get.call(null,map__9241__$1,new cljs.core.Keyword(null,"onModel","onModel",-1713159485));
var c__3261__auto___9268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___9268,map__9241,map__9241__$1,ctx,onModel){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___9268,map__9241,map__9241__$1,ctx,onModel){
return (function (state_9262){
var state_val_9263 = (state_9262[(1)]);
if((state_val_9263 === (1))){
var inst_9243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9246 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9247 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];
var inst_9248 = (new cljs.core.PersistentVector(null,2,(5),inst_9246,inst_9247,null));
var inst_9249 = cljs.core.get_in.call(null,ctx,inst_9248);
var inst_9250 = cljs.core.count.call(null,inst_9249);
var inst_9251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9252 = [new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)];
var inst_9253 = (new cljs.core.PersistentVector(null,1,(5),inst_9251,inst_9252,null));
var inst_9254 = cljs.core.get_in.call(null,ctx,inst_9253);
var inst_9255 = cljs.core.apply.call(null,cljs.core.array,inst_9254);
var inst_9256 = {"count":inst_9250,"bgColor":inst_9255};
var inst_9257 = [null,inst_9256,data];
var inst_9258 = (new cljs.core.PersistentVector(null,3,(5),inst_9243,inst_9257,null));
var state_9262__$1 = state_9262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9262__$1,(2),onModel,inst_9258);
} else {
if((state_val_9263 === (2))){
var inst_9260 = (state_9262[(2)]);
var state_9262__$1 = state_9262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9262__$1,inst_9260);
} else {
return null;
}
}
});})(c__3261__auto___9268,map__9241,map__9241__$1,ctx,onModel))
;
return ((function (switch__3171__auto__,c__3261__auto___9268,map__9241,map__9241__$1,ctx,onModel){
return (function() {
var app$particle$impl$state_machine__3172__auto__ = null;
var app$particle$impl$state_machine__3172__auto____0 = (function (){
var statearr_9264 = [null,null,null,null,null,null,null];
(statearr_9264[(0)] = app$particle$impl$state_machine__3172__auto__);

(statearr_9264[(1)] = (1));

return statearr_9264;
});
var app$particle$impl$state_machine__3172__auto____1 = (function (state_9262){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9265){if((e9265 instanceof Object)){
var ex__3175__auto__ = e9265;
var statearr_9266_9269 = state_9262;
(statearr_9266_9269[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9270 = state_9262;
state_9262 = G__9270;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$particle$impl$state_machine__3172__auto__ = function(state_9262){
switch(arguments.length){
case 0:
return app$particle$impl$state_machine__3172__auto____0.call(this);
case 1:
return app$particle$impl$state_machine__3172__auto____1.call(this,state_9262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$impl$state_machine__3172__auto____0;
app$particle$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$impl$state_machine__3172__auto____1;
return app$particle$impl$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___9268,map__9241,map__9241__$1,ctx,onModel))
})();
var state__3263__auto__ = (function (){var statearr_9267 = f__3262__auto__.call(null);
(statearr_9267[(6)] = c__3261__auto___9268);

return statearr_9267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___9268,map__9241,map__9241__$1,ctx,onModel))
);


return ctx;
}));
app.particle.impl.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"add texture",(function (_,data,p__9271){
var map__9272 = p__9271;
var map__9272__$1 = ((((!((map__9272 == null)))?(((((map__9272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9272):map__9272);
var ctx = map__9272__$1;
var gl__$1 = cljs.core.get.call(null,map__9272__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var id = (data[(0)]);
var img = (data[(1)]);
var texObj = app.particle.impl.cacheTex.call(null,gl__$1,img);
gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);

return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textures","textures",560681081),id], null),texObj);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-limit",(function (_,data,ctx){
var n = data;
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),n);
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"edit-bgColor",(function (_,data,ctx){
var r = (data[(0)]);
var g = (data[(1)]);
var b = (data[(2)]);
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"clear particle",(function (_,data,ctx){
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.List.EMPTY);
}));

//# sourceMappingURL=impl.js.map
