// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle');
goog.require('cljs.core');
app.particle.create = (function create(p__9751){var map__9756 = p__9751;var map__9756__$1 = ((cljs.core.seq_QMARK_.call(null,map__9756))?cljs.core.apply.call(null,cljs.core.hash_map,map__9756):map__9756);var map__9757 = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__9757__$1 = ((cljs.core.seq_QMARK_.call(null,map__9757))?cljs.core.apply.call(null,cljs.core.hash_map,map__9757):map__9757);var emit = map__9757__$1;var count = cljs.core.get.call(null,map__9757__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__9757__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var vec__9758 = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__9758,(0),null);var y = cljs.core.nth.call(null,vec__9758,(1),null);var rot = cljs.core.nth.call(null,vec__9758,(2),null);var pos = vec__9758;var vec__9759 = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__9759,(0),null);var vy = cljs.core.nth.call(null,vec__9759,(1),null);var vr = cljs.core.nth.call(null,vec__9759,(2),null);var vel = vec__9759;var lifetime = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var mass = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var formulaList = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var size = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"size","size",1098693007));var color = cljs.core.get.call(null,map__9756__$1,new cljs.core.Keyword(null,"color","color",1011675173));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
app.particle.updatePos = (function updatePos(p__9762,t){var map__9764 = p__9762;var map__9764__$1 = ((cljs.core.seq_QMARK_.call(null,map__9764))?cljs.core.apply.call(null,cljs.core.hash_map,map__9764):map__9764);var particle = map__9764__$1;var pos = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__9764__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__9764,map__9764__$1,particle,pos,vel,fvel){
return (function (p1__9760_SHARP_){return (t * p1__9760_SHARP_);
});})(map__9764,map__9764__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__9764,map__9764__$1,particle,pos,vel,fvel){
return (function (p1__9761_SHARP_){return (t * p1__9761_SHARP_);
});})(map__9764,map__9764__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
app.particle.updateTimer = (function updateTimer(p__9765,t){var map__9767 = p__9765;var map__9767__$1 = ((cljs.core.seq_QMARK_.call(null,map__9767))?cljs.core.apply.call(null,cljs.core.hash_map,map__9767):map__9767);var particle = map__9767__$1;var timer = cljs.core.get.call(null,map__9767__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
app.particle.updateFormula = (function updateFormula(p__9768){var map__9774 = p__9768;var map__9774__$1 = ((cljs.core.seq_QMARK_.call(null,map__9774))?cljs.core.apply.call(null,cljs.core.hash_map,map__9774):map__9774);var particle = map__9774__$1;var formulaList = cljs.core.get.call(null,map__9774__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__9774,map__9774__$1,particle,formulaList){
return (function (p__9775,p__9776){var map__9777 = p__9775;var map__9777__$1 = ((cljs.core.seq_QMARK_.call(null,map__9777))?cljs.core.apply.call(null,cljs.core.hash_map,map__9777):map__9777);var particle__$1 = map__9777__$1;var timer = cljs.core.get.call(null,map__9777__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__9777__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__9778 = p__9776;var target = cljs.core.nth.call(null,vec__9778,(0),null);var formula = cljs.core.nth.call(null,vec__9778,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__9774,map__9774__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
app.particle.forceIt = (function forceIt(p__9780,f){var map__9782 = p__9780;var map__9782__$1 = ((cljs.core.seq_QMARK_.call(null,map__9782))?cljs.core.apply.call(null,cljs.core.hash_map,map__9782):map__9782);var particle = map__9782__$1;var vel = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__9782,map__9782__$1,particle,vel,mass){
return (function (p1__9779_SHARP_){return (p1__9779_SHARP_ / mass);
});})(map__9782,map__9782__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
app.particle.update = (function update(t,ctx){var update_each = (function (p__9794){var map__9795 = p__9794;var map__9795__$1 = ((cljs.core.seq_QMARK_.call(null,map__9795))?cljs.core.apply.call(null,cljs.core.hash_map,map__9795):map__9795);var ctx__$1 = map__9795__$1;var ps = cljs.core.get.call(null,map__9795__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__9795,map__9795__$1,ctx__$1,ps){
return (function (p1__9783_SHARP_){return app.particle.updateTimer.call(null,app.particle.updatePos.call(null,app.particle.updateFormula.call(null,p1__9783_SHARP_),t),t);
});})(map__9795,map__9795__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__9796){var map__9797 = p__9796;var map__9797__$1 = ((cljs.core.seq_QMARK_.call(null,map__9797))?cljs.core.apply.call(null,cljs.core.hash_map,map__9797):map__9797);var ctx__$1 = map__9797__$1;var ps = cljs.core.get.call(null,map__9797__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__9797,map__9797__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__9798){var map__9799 = p__9798;var map__9799__$1 = ((cljs.core.seq_QMARK_.call(null,map__9799))?cljs.core.apply.call(null,cljs.core.hash_map,map__9799):map__9799);var part = map__9799__$1;var pos = cljs.core.get.call(null,map__9799__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__9799__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__9799__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__9800 = cljs.core.get.call(null,map__9799__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__9800__$1 = ((cljs.core.seq_QMARK_.call(null,map__9800))?cljs.core.apply.call(null,cljs.core.hash_map,map__9800):map__9800);var emit = map__9800__$1;var count = cljs.core.get.call(null,map__9800__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__9800__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__9800__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__9800__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__9800__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__9800__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__9799,map__9799__$1,part,pos,timer,emit_times,map__9800,map__9800__$1,emit,count,duration,angle,range,force,prototype,map__9797,map__9797__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__9799,map__9799__$1,part,pos,timer,emit_times,map__9800,map__9800__$1,emit,count,duration,angle,range,force,prototype,map__9797,map__9797__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__9799,map__9799__$1,part,pos,timer,emit_times,map__9800,map__9800__$1,emit,count,duration,angle,range,force,prototype,map__9797,map__9797__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,app.particle.forceIt.call(null,app.particle.create.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__9799,map__9799__$1,part,pos,timer,emit_times,map__9800,map__9800__$1,emit,count,duration,angle,range,force,prototype,map__9797,map__9797__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__9799,map__9799__$1,part,pos,timer,emit_times,map__9800,map__9800__$1,emit,count,duration,angle,range,force,prototype,map__9797,map__9797__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__9799,map__9799__$1,part,pos,timer,emit_times,map__9800,map__9800__$1,emit,count,duration,angle,range,force,prototype,map__9797,map__9797__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__9797,map__9797__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__9801){var map__9802 = p__9801;var map__9802__$1 = ((cljs.core.seq_QMARK_.call(null,map__9802))?cljs.core.apply.call(null,cljs.core.hash_map,map__9802):map__9802);var ctx__$1 = map__9802__$1;var ps = cljs.core.get.call(null,map__9802__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__9802,map__9802__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__9784_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__9784_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__9784_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__9784_SHARP_)));
});})(map__9802,map__9802__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;return update_remove.call(null,update_each.call(null,update_emit.call(null,ctx)));
});
