// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle');
goog.require('cljs.core');
app.particle.create = (function create(p__17992){var map__17997 = p__17992;var map__17997__$1 = ((cljs.core.seq_QMARK_.call(null,map__17997))?cljs.core.apply.call(null,cljs.core.hash_map,map__17997):map__17997);var vec__17998 = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__17998,(0),null);var vy = cljs.core.nth.call(null,vec__17998,(1),null);var vr = cljs.core.nth.call(null,vec__17998,(2),null);var vel = vec__17998;var vec__17999 = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__17999,(0),null);var y = cljs.core.nth.call(null,vec__17999,(1),null);var rot = cljs.core.nth.call(null,vec__17999,(2),null);var pos = vec__17999;var mass = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"color","color",1011675173));var map__18000 = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__18000__$1 = ((cljs.core.seq_QMARK_.call(null,map__18000))?cljs.core.apply.call(null,cljs.core.hash_map,map__18000):map__18000);var emit = map__18000__$1;var count = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__17997__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
app.particle.updatePos = (function updatePos(p__18003,t){var map__18005 = p__18003;var map__18005__$1 = ((cljs.core.seq_QMARK_.call(null,map__18005))?cljs.core.apply.call(null,cljs.core.hash_map,map__18005):map__18005);var particle = map__18005__$1;var pos = cljs.core.get.call(null,map__18005__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__18005__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__18005__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__18005,map__18005__$1,particle,pos,vel,fvel){
return (function (p1__18001_SHARP_){return (t * p1__18001_SHARP_);
});})(map__18005,map__18005__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__18005,map__18005__$1,particle,pos,vel,fvel){
return (function (p1__18002_SHARP_){return (t * p1__18002_SHARP_);
});})(map__18005,map__18005__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
app.particle.updateTimer = (function updateTimer(p__18006,t){var map__18008 = p__18006;var map__18008__$1 = ((cljs.core.seq_QMARK_.call(null,map__18008))?cljs.core.apply.call(null,cljs.core.hash_map,map__18008):map__18008);var particle = map__18008__$1;var timer = cljs.core.get.call(null,map__18008__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
app.particle.updateFormula = (function updateFormula(p__18009){var map__18015 = p__18009;var map__18015__$1 = ((cljs.core.seq_QMARK_.call(null,map__18015))?cljs.core.apply.call(null,cljs.core.hash_map,map__18015):map__18015);var particle = map__18015__$1;var formulaList = cljs.core.get.call(null,map__18015__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__18015,map__18015__$1,particle,formulaList){
return (function (p__18016,p__18017){var map__18018 = p__18016;var map__18018__$1 = ((cljs.core.seq_QMARK_.call(null,map__18018))?cljs.core.apply.call(null,cljs.core.hash_map,map__18018):map__18018);var particle__$1 = map__18018__$1;var timer = cljs.core.get.call(null,map__18018__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__18018__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__18019 = p__18017;var target = cljs.core.nth.call(null,vec__18019,(0),null);var formula = cljs.core.nth.call(null,vec__18019,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__18015,map__18015__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
app.particle.forceIt = (function forceIt(p__18021,f){var map__18023 = p__18021;var map__18023__$1 = ((cljs.core.seq_QMARK_.call(null,map__18023))?cljs.core.apply.call(null,cljs.core.hash_map,map__18023):map__18023);var particle = map__18023__$1;var vel = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__18023,map__18023__$1,particle,vel,mass){
return (function (p1__18020_SHARP_){return (p1__18020_SHARP_ / mass);
});})(map__18023,map__18023__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
app.particle.update = (function update(t,ctx){var update_each = (function (p__18035){var map__18036 = p__18035;var map__18036__$1 = ((cljs.core.seq_QMARK_.call(null,map__18036))?cljs.core.apply.call(null,cljs.core.hash_map,map__18036):map__18036);var ctx__$1 = map__18036__$1;var ps = cljs.core.get.call(null,map__18036__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__18036,map__18036__$1,ctx__$1,ps){
return (function (p1__18024_SHARP_){return app.particle.updateTimer.call(null,app.particle.updatePos.call(null,app.particle.updateFormula.call(null,p1__18024_SHARP_),t),t);
});})(map__18036,map__18036__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__18037){var map__18038 = p__18037;var map__18038__$1 = ((cljs.core.seq_QMARK_.call(null,map__18038))?cljs.core.apply.call(null,cljs.core.hash_map,map__18038):map__18038);var ctx__$1 = map__18038__$1;var ps = cljs.core.get.call(null,map__18038__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__18038,map__18038__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__18039){var map__18040 = p__18039;var map__18040__$1 = ((cljs.core.seq_QMARK_.call(null,map__18040))?cljs.core.apply.call(null,cljs.core.hash_map,map__18040):map__18040);var part = map__18040__$1;var pos = cljs.core.get.call(null,map__18040__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__18040__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__18040__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__18041 = cljs.core.get.call(null,map__18040__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__18041__$1 = ((cljs.core.seq_QMARK_.call(null,map__18041))?cljs.core.apply.call(null,cljs.core.hash_map,map__18041):map__18041);var emit = map__18041__$1;var count = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__18040,map__18040__$1,part,pos,timer,emit_times,map__18041,map__18041__$1,emit,count,duration,angle,range,force,prototype,map__18038,map__18038__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__18040,map__18040__$1,part,pos,timer,emit_times,map__18041,map__18041__$1,emit,count,duration,angle,range,force,prototype,map__18038,map__18038__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__18040,map__18040__$1,part,pos,timer,emit_times,map__18041,map__18041__$1,emit,count,duration,angle,range,force,prototype,map__18038,map__18038__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,app.particle.forceIt.call(null,app.particle.create.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__18040,map__18040__$1,part,pos,timer,emit_times,map__18041,map__18041__$1,emit,count,duration,angle,range,force,prototype,map__18038,map__18038__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__18040,map__18040__$1,part,pos,timer,emit_times,map__18041,map__18041__$1,emit,count,duration,angle,range,force,prototype,map__18038,map__18038__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__18040,map__18040__$1,part,pos,timer,emit_times,map__18041,map__18041__$1,emit,count,duration,angle,range,force,prototype,map__18038,map__18038__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__18038,map__18038__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__18042){var map__18043 = p__18042;var map__18043__$1 = ((cljs.core.seq_QMARK_.call(null,map__18043))?cljs.core.apply.call(null,cljs.core.hash_map,map__18043):map__18043);var ctx__$1 = map__18043__$1;var ps = cljs.core.get.call(null,map__18043__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__18043,map__18043__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__18025_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__18025_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__18025_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__18025_SHARP_)));
});})(map__18043,map__18043__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;return update_remove.call(null,update_each.call(null,update_emit.call(null,ctx)));
});
