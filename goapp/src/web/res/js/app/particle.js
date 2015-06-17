// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle');
goog.require('cljs.core');
app.particle.create = (function create(p__43046){var map__43051 = p__43046;var map__43051__$1 = ((cljs.core.seq_QMARK_.call(null,map__43051))?cljs.core.apply.call(null,cljs.core.hash_map,map__43051):map__43051);var map__43052 = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__43052__$1 = ((cljs.core.seq_QMARK_.call(null,map__43052))?cljs.core.apply.call(null,cljs.core.hash_map,map__43052):map__43052);var emit = map__43052__$1;var count = cljs.core.get.call(null,map__43052__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__43052__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var vec__43053 = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__43053,(0),null);var y = cljs.core.nth.call(null,vec__43053,(1),null);var rot = cljs.core.nth.call(null,vec__43053,(2),null);var pos = vec__43053;var vec__43054 = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__43054,(0),null);var vy = cljs.core.nth.call(null,vec__43054,(1),null);var vr = cljs.core.nth.call(null,vec__43054,(2),null);var vel = vec__43054;var lifetime = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var mass = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var formulaList = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var size = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"size","size",1098693007));var color = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"color","color",1011675173));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
app.particle.updatePos = (function updatePos(p__43057,t){var map__43059 = p__43057;var map__43059__$1 = ((cljs.core.seq_QMARK_.call(null,map__43059))?cljs.core.apply.call(null,cljs.core.hash_map,map__43059):map__43059);var particle = map__43059__$1;var pos = cljs.core.get.call(null,map__43059__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__43059__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__43059__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__43059,map__43059__$1,particle,pos,vel,fvel){
return (function (p1__43055_SHARP_){return (t * p1__43055_SHARP_);
});})(map__43059,map__43059__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__43059,map__43059__$1,particle,pos,vel,fvel){
return (function (p1__43056_SHARP_){return (t * p1__43056_SHARP_);
});})(map__43059,map__43059__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
app.particle.updateTimer = (function updateTimer(p__43060,t){var map__43062 = p__43060;var map__43062__$1 = ((cljs.core.seq_QMARK_.call(null,map__43062))?cljs.core.apply.call(null,cljs.core.hash_map,map__43062):map__43062);var particle = map__43062__$1;var timer = cljs.core.get.call(null,map__43062__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
app.particle.updateFormula = (function updateFormula(p__43063){var map__43069 = p__43063;var map__43069__$1 = ((cljs.core.seq_QMARK_.call(null,map__43069))?cljs.core.apply.call(null,cljs.core.hash_map,map__43069):map__43069);var particle = map__43069__$1;var formulaList = cljs.core.get.call(null,map__43069__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__43069,map__43069__$1,particle,formulaList){
return (function (p__43070,p__43071){var map__43072 = p__43070;var map__43072__$1 = ((cljs.core.seq_QMARK_.call(null,map__43072))?cljs.core.apply.call(null,cljs.core.hash_map,map__43072):map__43072);var particle__$1 = map__43072__$1;var timer = cljs.core.get.call(null,map__43072__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__43072__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__43073 = p__43071;var target = cljs.core.nth.call(null,vec__43073,(0),null);var formula = cljs.core.nth.call(null,vec__43073,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__43069,map__43069__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
app.particle.forceIt = (function forceIt(p__43075,f){var map__43077 = p__43075;var map__43077__$1 = ((cljs.core.seq_QMARK_.call(null,map__43077))?cljs.core.apply.call(null,cljs.core.hash_map,map__43077):map__43077);var particle = map__43077__$1;var vel = cljs.core.get.call(null,map__43077__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__43077__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__43077,map__43077__$1,particle,vel,mass){
return (function (p1__43074_SHARP_){return (p1__43074_SHARP_ / mass);
});})(map__43077,map__43077__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
app.particle.update = (function update(t,ctx){var update_each = (function (p__43089){var map__43090 = p__43089;var map__43090__$1 = ((cljs.core.seq_QMARK_.call(null,map__43090))?cljs.core.apply.call(null,cljs.core.hash_map,map__43090):map__43090);var ctx__$1 = map__43090__$1;var ps = cljs.core.get.call(null,map__43090__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__43090,map__43090__$1,ctx__$1,ps){
return (function (p1__43078_SHARP_){return app.particle.updateTimer.call(null,app.particle.updatePos.call(null,app.particle.updateFormula.call(null,p1__43078_SHARP_),t),t);
});})(map__43090,map__43090__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__43091){var map__43092 = p__43091;var map__43092__$1 = ((cljs.core.seq_QMARK_.call(null,map__43092))?cljs.core.apply.call(null,cljs.core.hash_map,map__43092):map__43092);var ctx__$1 = map__43092__$1;var ps = cljs.core.get.call(null,map__43092__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__43092,map__43092__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__43093){var map__43094 = p__43093;var map__43094__$1 = ((cljs.core.seq_QMARK_.call(null,map__43094))?cljs.core.apply.call(null,cljs.core.hash_map,map__43094):map__43094);var part = map__43094__$1;var pos = cljs.core.get.call(null,map__43094__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__43094__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__43094__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__43095 = cljs.core.get.call(null,map__43094__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__43095__$1 = ((cljs.core.seq_QMARK_.call(null,map__43095))?cljs.core.apply.call(null,cljs.core.hash_map,map__43095):map__43095);var emit = map__43095__$1;var count = cljs.core.get.call(null,map__43095__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__43095__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__43095__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__43095__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__43095__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__43095__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__43094,map__43094__$1,part,pos,timer,emit_times,map__43095,map__43095__$1,emit,count,duration,angle,range,force,prototype,map__43092,map__43092__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__43094,map__43094__$1,part,pos,timer,emit_times,map__43095,map__43095__$1,emit,count,duration,angle,range,force,prototype,map__43092,map__43092__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__43094,map__43094__$1,part,pos,timer,emit_times,map__43095,map__43095__$1,emit,count,duration,angle,range,force,prototype,map__43092,map__43092__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,app.particle.forceIt.call(null,app.particle.create.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__43094,map__43094__$1,part,pos,timer,emit_times,map__43095,map__43095__$1,emit,count,duration,angle,range,force,prototype,map__43092,map__43092__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__43094,map__43094__$1,part,pos,timer,emit_times,map__43095,map__43095__$1,emit,count,duration,angle,range,force,prototype,map__43092,map__43092__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__43094,map__43094__$1,part,pos,timer,emit_times,map__43095,map__43095__$1,emit,count,duration,angle,range,force,prototype,map__43092,map__43092__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__43092,map__43092__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__43096){var map__43097 = p__43096;var map__43097__$1 = ((cljs.core.seq_QMARK_.call(null,map__43097))?cljs.core.apply.call(null,cljs.core.hash_map,map__43097):map__43097);var ctx__$1 = map__43097__$1;var ps = cljs.core.get.call(null,map__43097__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__43097,map__43097__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__43079_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__43079_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__43079_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__43079_SHARP_)));
});})(map__43097,map__43097__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;return update_remove.call(null,update_each.call(null,update_emit.call(null,ctx)));
});
