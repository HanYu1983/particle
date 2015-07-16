// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle');
goog.require('cljs.core');
app.particle.create = (function create(p__34424){var map__34429 = p__34424;var map__34429__$1 = ((cljs.core.seq_QMARK_.call(null,map__34429))?cljs.core.apply.call(null,cljs.core.hash_map,map__34429):map__34429);var vec__34430 = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__34430,(0),null);var vy = cljs.core.nth.call(null,vec__34430,(1),null);var vr = cljs.core.nth.call(null,vec__34430,(2),null);var vel = vec__34430;var vec__34431 = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__34431,(0),null);var y = cljs.core.nth.call(null,vec__34431,(1),null);var rot = cljs.core.nth.call(null,vec__34431,(2),null);var pos = vec__34431;var mass = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"color","color",1011675173));var map__34432 = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__34432__$1 = ((cljs.core.seq_QMARK_.call(null,map__34432))?cljs.core.apply.call(null,cljs.core.hash_map,map__34432):map__34432);var emit = map__34432__$1;var count = cljs.core.get.call(null,map__34432__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__34432__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__34429__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
app.particle.updatePos = (function updatePos(p__34435,t){var map__34437 = p__34435;var map__34437__$1 = ((cljs.core.seq_QMARK_.call(null,map__34437))?cljs.core.apply.call(null,cljs.core.hash_map,map__34437):map__34437);var particle = map__34437__$1;var pos = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__34437,map__34437__$1,particle,pos,vel,fvel){
return (function (p1__34433_SHARP_){return (t * p1__34433_SHARP_);
});})(map__34437,map__34437__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__34437,map__34437__$1,particle,pos,vel,fvel){
return (function (p1__34434_SHARP_){return (t * p1__34434_SHARP_);
});})(map__34437,map__34437__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
app.particle.updateTimer = (function updateTimer(p__34438,t){var map__34440 = p__34438;var map__34440__$1 = ((cljs.core.seq_QMARK_.call(null,map__34440))?cljs.core.apply.call(null,cljs.core.hash_map,map__34440):map__34440);var particle = map__34440__$1;var timer = cljs.core.get.call(null,map__34440__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
app.particle.updateFormula = (function updateFormula(p__34441){var map__34447 = p__34441;var map__34447__$1 = ((cljs.core.seq_QMARK_.call(null,map__34447))?cljs.core.apply.call(null,cljs.core.hash_map,map__34447):map__34447);var particle = map__34447__$1;var formulaList = cljs.core.get.call(null,map__34447__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__34447,map__34447__$1,particle,formulaList){
return (function (p__34448,p__34449){var map__34450 = p__34448;var map__34450__$1 = ((cljs.core.seq_QMARK_.call(null,map__34450))?cljs.core.apply.call(null,cljs.core.hash_map,map__34450):map__34450);var particle__$1 = map__34450__$1;var timer = cljs.core.get.call(null,map__34450__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__34450__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__34451 = p__34449;var target = cljs.core.nth.call(null,vec__34451,(0),null);var formula = cljs.core.nth.call(null,vec__34451,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__34447,map__34447__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
app.particle.forceIt = (function forceIt(p__34453,f){var map__34455 = p__34453;var map__34455__$1 = ((cljs.core.seq_QMARK_.call(null,map__34455))?cljs.core.apply.call(null,cljs.core.hash_map,map__34455):map__34455);var particle = map__34455__$1;var vel = cljs.core.get.call(null,map__34455__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__34455__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__34455,map__34455__$1,particle,vel,mass){
return (function (p1__34452_SHARP_){return (p1__34452_SHARP_ / mass);
});})(map__34455,map__34455__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
app.particle.update = (function update(t,ctx){var update_each = (function (p__34467){var map__34468 = p__34467;var map__34468__$1 = ((cljs.core.seq_QMARK_.call(null,map__34468))?cljs.core.apply.call(null,cljs.core.hash_map,map__34468):map__34468);var ctx__$1 = map__34468__$1;var ps = cljs.core.get.call(null,map__34468__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__34468,map__34468__$1,ctx__$1,ps){
return (function (p1__34456_SHARP_){return app.particle.updateTimer.call(null,app.particle.updatePos.call(null,app.particle.updateFormula.call(null,p1__34456_SHARP_),t),t);
});})(map__34468,map__34468__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__34469){var map__34470 = p__34469;var map__34470__$1 = ((cljs.core.seq_QMARK_.call(null,map__34470))?cljs.core.apply.call(null,cljs.core.hash_map,map__34470):map__34470);var ctx__$1 = map__34470__$1;var ps = cljs.core.get.call(null,map__34470__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__34470,map__34470__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__34471){var map__34472 = p__34471;var map__34472__$1 = ((cljs.core.seq_QMARK_.call(null,map__34472))?cljs.core.apply.call(null,cljs.core.hash_map,map__34472):map__34472);var part = map__34472__$1;var pos = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__34473 = cljs.core.get.call(null,map__34472__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__34473__$1 = ((cljs.core.seq_QMARK_.call(null,map__34473))?cljs.core.apply.call(null,cljs.core.hash_map,map__34473):map__34473);var emit = map__34473__$1;var count = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__34473__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__34472,map__34472__$1,part,pos,timer,emit_times,map__34473,map__34473__$1,emit,count,duration,angle,range,force,prototype,map__34470,map__34470__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__34472,map__34472__$1,part,pos,timer,emit_times,map__34473,map__34473__$1,emit,count,duration,angle,range,force,prototype,map__34470,map__34470__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__34472,map__34472__$1,part,pos,timer,emit_times,map__34473,map__34473__$1,emit,count,duration,angle,range,force,prototype,map__34470,map__34470__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,app.particle.forceIt.call(null,app.particle.create.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__34472,map__34472__$1,part,pos,timer,emit_times,map__34473,map__34473__$1,emit,count,duration,angle,range,force,prototype,map__34470,map__34470__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__34472,map__34472__$1,part,pos,timer,emit_times,map__34473,map__34473__$1,emit,count,duration,angle,range,force,prototype,map__34470,map__34470__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__34472,map__34472__$1,part,pos,timer,emit_times,map__34473,map__34473__$1,emit,count,duration,angle,range,force,prototype,map__34470,map__34470__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__34470,map__34470__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__34474){var map__34475 = p__34474;var map__34475__$1 = ((cljs.core.seq_QMARK_.call(null,map__34475))?cljs.core.apply.call(null,cljs.core.hash_map,map__34475):map__34475);var ctx__$1 = map__34475__$1;var ps = cljs.core.get.call(null,map__34475__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__34475,map__34475__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__34457_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__34457_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__34457_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__34457_SHARP_)));
});})(map__34475,map__34475__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;return update_remove.call(null,update_each.call(null,update_emit.call(null,ctx)));
});
