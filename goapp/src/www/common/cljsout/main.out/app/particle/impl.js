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
return (function (p1__5694_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5694_SHARP_),partInfo.id);
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
return (function (p1__5695_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5695_SHARP_),id);
});})(id,x,y))
,cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null))));
if(cljs.core.truth_(target)){
return cljs.core.update_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.partial.call(null,cljs.core.replace,cljs.core.PersistentArrayMap.createAsIfByAssoc([target,cljs.core.merge.call(null,target,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,cljs.core.get_in.call(null,target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null))], null),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"emit-times","emit-times",793706865).cljs$core$IFn$_invoke$arity$1(target)], null))])));
} else {
return ctx;
}
}));
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"info",(function (_,data,p__5696){
var map__5697 = p__5696;
var map__5697__$1 = ((((!((map__5697 == null)))?(((((map__5697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5697):map__5697);
var ctx = map__5697__$1;
var onModel = cljs.core.get.call(null,map__5697__$1,new cljs.core.Keyword(null,"onModel","onModel",-1713159485));
var c__2882__auto___5724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5724,map__5697,map__5697__$1,ctx,onModel){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5724,map__5697,map__5697__$1,ctx,onModel){
return (function (state_5718){
var state_val_5719 = (state_5718[(1)]);
if((state_val_5719 === (1))){
var inst_5699 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5703 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"ps","ps",292358046)];
var inst_5704 = (new cljs.core.PersistentVector(null,2,(5),inst_5702,inst_5703,null));
var inst_5705 = cljs.core.get_in.call(null,ctx,inst_5704);
var inst_5706 = cljs.core.count.call(null,inst_5705);
var inst_5707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5708 = [new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)];
var inst_5709 = (new cljs.core.PersistentVector(null,1,(5),inst_5707,inst_5708,null));
var inst_5710 = cljs.core.get_in.call(null,ctx,inst_5709);
var inst_5711 = cljs.core.apply.call(null,cljs.core.array,inst_5710);
var inst_5712 = {"count":inst_5706,"bgColor":inst_5711};
var inst_5713 = [null,inst_5712,data];
var inst_5714 = (new cljs.core.PersistentVector(null,3,(5),inst_5699,inst_5713,null));
var state_5718__$1 = state_5718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5718__$1,(2),onModel,inst_5714);
} else {
if((state_val_5719 === (2))){
var inst_5716 = (state_5718[(2)]);
var state_5718__$1 = state_5718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5718__$1,inst_5716);
} else {
return null;
}
}
});})(c__2882__auto___5724,map__5697,map__5697__$1,ctx,onModel))
;
return ((function (switch__2792__auto__,c__2882__auto___5724,map__5697,map__5697__$1,ctx,onModel){
return (function() {
var app$particle$impl$state_machine__2793__auto__ = null;
var app$particle$impl$state_machine__2793__auto____0 = (function (){
var statearr_5720 = [null,null,null,null,null,null,null];
(statearr_5720[(0)] = app$particle$impl$state_machine__2793__auto__);

(statearr_5720[(1)] = (1));

return statearr_5720;
});
var app$particle$impl$state_machine__2793__auto____1 = (function (state_5718){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5721){if((e5721 instanceof Object)){
var ex__2796__auto__ = e5721;
var statearr_5722_5725 = state_5718;
(statearr_5722_5725[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5726 = state_5718;
state_5718 = G__5726;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$impl$state_machine__2793__auto__ = function(state_5718){
switch(arguments.length){
case 0:
return app$particle$impl$state_machine__2793__auto____0.call(this);
case 1:
return app$particle$impl$state_machine__2793__auto____1.call(this,state_5718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$impl$state_machine__2793__auto____0;
app$particle$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$impl$state_machine__2793__auto____1;
return app$particle$impl$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5724,map__5697,map__5697__$1,ctx,onModel))
})();
var state__2884__auto__ = (function (){var statearr_5723 = f__2883__auto__.call(null);
(statearr_5723[(6)] = c__2882__auto___5724);

return statearr_5723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5724,map__5697,map__5697__$1,ctx,onModel))
);


return ctx;
}));
app.particle.impl.cacheTex = cljs.core.memoize.call(null,gl.texture.texture);
cljs.core._add_method.call(null,app.particle.abstract$.onViewCommand,"add texture",(function (_,data,p__5727){
var map__5728 = p__5727;
var map__5728__$1 = ((((!((map__5728 == null)))?(((((map__5728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5728):map__5728);
var ctx = map__5728__$1;
var gl__$1 = cljs.core.get.call(null,map__5728__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
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
