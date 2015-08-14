// Compiled by ClojureScript 0.0-2268
goog.provide('tool.particle');
goog.require('cljs.core');
tool.particle.particle = (function particle(p__15503){var map__15508 = p__15503;var map__15508__$1 = ((cljs.core.seq_QMARK_.call(null,map__15508))?cljs.core.apply.call(null,cljs.core.hash_map,map__15508):map__15508);var vec__15509 = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__15509,(0),null);var vy = cljs.core.nth.call(null,vec__15509,(1),null);var vr = cljs.core.nth.call(null,vec__15509,(2),null);var vel = vec__15509;var vec__15510 = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__15510,(0),null);var y = cljs.core.nth.call(null,vec__15510,(1),null);var rot = cljs.core.nth.call(null,vec__15510,(2),null);var pos = vec__15510;var mass = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"color","color",1011675173));var map__15511 = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__15511__$1 = ((cljs.core.seq_QMARK_.call(null,map__15511))?cljs.core.apply.call(null,cljs.core.hash_map,map__15511):map__15511);var emit = map__15511__$1;var count = cljs.core.get.call(null,map__15511__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__15511__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (1);
}
})(),(function (){var or__3551__auto__ = color;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1)], null);
}
})(),(0),(function (){var or__3551__auto__ = pos;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}
})(),(function (){var or__3551__auto__ = size;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null);
}
})(),(0),(function (){var or__3551__auto__ = formulaList;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return null;
}
})(),(function (){var or__3551__auto__ = id;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.gensym.call(null,"particle");
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(cljs.core.truth_(emit)?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"range","range",1639692286),(0),new cljs.core.Keyword(null,"force","force",781957286),(0)], null),emit):null),(function (){var or__3551__auto__ = lifetime;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (10);
}
})(),(function (){var or__3551__auto__ = vel;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}
})()]);
});
tool.particle.jsobj__GT_particle = (function jsobj__GT_particle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__15516){var vec__15517 = p__15516;var k = cljs.core.nth.call(null,vec__15517,(0),null);var v = cljs.core.nth.call(null,vec__15517,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__15518){var vec__15519 = p__15518;var k = cljs.core.nth.call(null,vec__15519,(0),null);var v = cljs.core.nth.call(null,vec__15519,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj){
return (function (ps){return cljs.core.mapv.call(null,jsobj__GT_particle,ps);
});})(obj))
);
});})(obj))
):obj);return tool.particle.particle.call(null,emit);
});
tool.particle.updatePos = (function updatePos(p__15522,t){var map__15524 = p__15522;var map__15524__$1 = ((cljs.core.seq_QMARK_.call(null,map__15524))?cljs.core.apply.call(null,cljs.core.hash_map,map__15524):map__15524);var particle = map__15524__$1;var pos = cljs.core.get.call(null,map__15524__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__15524__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__15524__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__15524,map__15524__$1,particle,pos,vel,fvel){
return (function (p1__15520_SHARP_){return (t * p1__15520_SHARP_);
});})(map__15524,map__15524__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__15524,map__15524__$1,particle,pos,vel,fvel){
return (function (p1__15521_SHARP_){return (t * p1__15521_SHARP_);
});})(map__15524,map__15524__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
tool.particle.updateTimer = (function updateTimer(p__15525,t){var map__15527 = p__15525;var map__15527__$1 = ((cljs.core.seq_QMARK_.call(null,map__15527))?cljs.core.apply.call(null,cljs.core.hash_map,map__15527):map__15527);var particle = map__15527__$1;var timer = cljs.core.get.call(null,map__15527__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
tool.particle.updateFormula = (function updateFormula(p__15528){var map__15534 = p__15528;var map__15534__$1 = ((cljs.core.seq_QMARK_.call(null,map__15534))?cljs.core.apply.call(null,cljs.core.hash_map,map__15534):map__15534);var particle = map__15534__$1;var formulaList = cljs.core.get.call(null,map__15534__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__15534,map__15534__$1,particle,formulaList){
return (function (p__15535,p__15536){var map__15537 = p__15535;var map__15537__$1 = ((cljs.core.seq_QMARK_.call(null,map__15537))?cljs.core.apply.call(null,cljs.core.hash_map,map__15537):map__15537);var particle__$1 = map__15537__$1;var timer = cljs.core.get.call(null,map__15537__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__15537__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__15538 = p__15536;var target = cljs.core.nth.call(null,vec__15538,(0),null);var formula = cljs.core.nth.call(null,vec__15538,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__15534,map__15534__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
tool.particle.forceIt = (function forceIt(p__15540,f){var map__15542 = p__15540;var map__15542__$1 = ((cljs.core.seq_QMARK_.call(null,map__15542))?cljs.core.apply.call(null,cljs.core.hash_map,map__15542):map__15542);var particle = map__15542__$1;var vel = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__15542__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__15542,map__15542__$1,particle,vel,mass){
return (function (p1__15539_SHARP_){return (p1__15539_SHARP_ / mass);
});})(map__15542,map__15542__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
tool.particle.update = (function update(t,ctx){var update_each = (function (p__15554){var map__15555 = p__15554;var map__15555__$1 = ((cljs.core.seq_QMARK_.call(null,map__15555))?cljs.core.apply.call(null,cljs.core.hash_map,map__15555):map__15555);var ctx__$1 = map__15555__$1;var ps = cljs.core.get.call(null,map__15555__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__15555,map__15555__$1,ctx__$1,ps){
return (function (p1__15543_SHARP_){return tool.particle.updateTimer.call(null,tool.particle.updatePos.call(null,tool.particle.updateFormula.call(null,p1__15543_SHARP_),t),t);
});})(map__15555,map__15555__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__15556){var map__15557 = p__15556;var map__15557__$1 = ((cljs.core.seq_QMARK_.call(null,map__15557))?cljs.core.apply.call(null,cljs.core.hash_map,map__15557):map__15557);var ctx__$1 = map__15557__$1;var ps = cljs.core.get.call(null,map__15557__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__15557,map__15557__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__15558){var map__15559 = p__15558;var map__15559__$1 = ((cljs.core.seq_QMARK_.call(null,map__15559))?cljs.core.apply.call(null,cljs.core.hash_map,map__15559):map__15559);var part = map__15559__$1;var pos = cljs.core.get.call(null,map__15559__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__15559__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__15559__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__15560 = cljs.core.get.call(null,map__15559__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__15560__$1 = ((cljs.core.seq_QMARK_.call(null,map__15560))?cljs.core.apply.call(null,cljs.core.hash_map,map__15560):map__15560);var emit = map__15560__$1;var count = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__15560__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__15559,map__15559__$1,part,pos,timer,emit_times,map__15560,map__15560__$1,emit,count,duration,angle,range,force,prototype,map__15557,map__15557__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__15559,map__15559__$1,part,pos,timer,emit_times,map__15560,map__15560__$1,emit,count,duration,angle,range,force,prototype,map__15557,map__15557__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__15559,map__15559__$1,part,pos,timer,emit_times,map__15560,map__15560__$1,emit,count,duration,angle,range,force,prototype,map__15557,map__15557__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,tool.particle.forceIt.call(null,tool.particle.particle.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__15559,map__15559__$1,part,pos,timer,emit_times,map__15560,map__15560__$1,emit,count,duration,angle,range,force,prototype,map__15557,map__15557__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__15559,map__15559__$1,part,pos,timer,emit_times,map__15560,map__15560__$1,emit,count,duration,angle,range,force,prototype,map__15557,map__15557__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__15559,map__15559__$1,part,pos,timer,emit_times,map__15560,map__15560__$1,emit,count,duration,angle,range,force,prototype,map__15557,map__15557__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__15557,map__15557__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__15561){var map__15562 = p__15561;var map__15562__$1 = ((cljs.core.seq_QMARK_.call(null,map__15562))?cljs.core.apply.call(null,cljs.core.hash_map,map__15562):map__15562);var ctx__$1 = map__15562__$1;var ps = cljs.core.get.call(null,map__15562__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__15562,map__15562__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__15544_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__15544_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__15544_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__15544_SHARP_)));
});})(map__15562,map__15562__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;return update_remove.call(null,update_each.call(null,update_emit.call(null,ctx)));
});
