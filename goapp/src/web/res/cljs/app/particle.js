// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle');
goog.require('cljs.core');
app.particle.particle = (function particle(p__16147){var map__16152 = p__16147;var map__16152__$1 = ((cljs.core.seq_QMARK_.call(null,map__16152))?cljs.core.apply.call(null,cljs.core.hash_map,map__16152):map__16152);var vec__16153 = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__16153,(0),null);var vy = cljs.core.nth.call(null,vec__16153,(1),null);var vr = cljs.core.nth.call(null,vec__16153,(2),null);var vel = vec__16153;var vec__16154 = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__16154,(0),null);var y = cljs.core.nth.call(null,vec__16154,(1),null);var rot = cljs.core.nth.call(null,vec__16154,(2),null);var pos = vec__16154;var mass = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"color","color",1011675173));var map__16155 = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__16155__$1 = ((cljs.core.seq_QMARK_.call(null,map__16155))?cljs.core.apply.call(null,cljs.core.hash_map,map__16155):map__16155);var emit = map__16155__$1;var count = cljs.core.get.call(null,map__16155__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__16155__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__16152__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
app.particle.jsobj__GT_particle = (function jsobj__GT_particle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16160){var vec__16161 = p__16160;var k = cljs.core.nth.call(null,vec__16161,(0),null);var v = cljs.core.nth.call(null,vec__16161,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__16162){var vec__16163 = p__16162;var k = cljs.core.nth.call(null,vec__16163,(0),null);var v = cljs.core.nth.call(null,vec__16163,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj){
return (function (ps){return cljs.core.mapv.call(null,jsobj__GT_particle,ps);
});})(obj))
);
});})(obj))
):obj);return app.particle.particle.call(null,emit);
});
app.particle.updatePos = (function updatePos(p__16166,t){var map__16168 = p__16166;var map__16168__$1 = ((cljs.core.seq_QMARK_.call(null,map__16168))?cljs.core.apply.call(null,cljs.core.hash_map,map__16168):map__16168);var particle = map__16168__$1;var pos = cljs.core.get.call(null,map__16168__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__16168__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__16168__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__16168,map__16168__$1,particle,pos,vel,fvel){
return (function (p1__16164_SHARP_){return (t * p1__16164_SHARP_);
});})(map__16168,map__16168__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__16168,map__16168__$1,particle,pos,vel,fvel){
return (function (p1__16165_SHARP_){return (t * p1__16165_SHARP_);
});})(map__16168,map__16168__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
app.particle.updateTimer = (function updateTimer(p__16169,t){var map__16171 = p__16169;var map__16171__$1 = ((cljs.core.seq_QMARK_.call(null,map__16171))?cljs.core.apply.call(null,cljs.core.hash_map,map__16171):map__16171);var particle = map__16171__$1;var timer = cljs.core.get.call(null,map__16171__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
app.particle.updateFormula = (function updateFormula(p__16172){var map__16178 = p__16172;var map__16178__$1 = ((cljs.core.seq_QMARK_.call(null,map__16178))?cljs.core.apply.call(null,cljs.core.hash_map,map__16178):map__16178);var particle = map__16178__$1;var formulaList = cljs.core.get.call(null,map__16178__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__16178,map__16178__$1,particle,formulaList){
return (function (p__16179,p__16180){var map__16181 = p__16179;var map__16181__$1 = ((cljs.core.seq_QMARK_.call(null,map__16181))?cljs.core.apply.call(null,cljs.core.hash_map,map__16181):map__16181);var particle__$1 = map__16181__$1;var timer = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__16181__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__16182 = p__16180;var target = cljs.core.nth.call(null,vec__16182,(0),null);var formula = cljs.core.nth.call(null,vec__16182,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__16178,map__16178__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
app.particle.forceIt = (function forceIt(p__16184,f){var map__16186 = p__16184;var map__16186__$1 = ((cljs.core.seq_QMARK_.call(null,map__16186))?cljs.core.apply.call(null,cljs.core.hash_map,map__16186):map__16186);var particle = map__16186__$1;var vel = cljs.core.get.call(null,map__16186__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__16186__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__16186,map__16186__$1,particle,vel,mass){
return (function (p1__16183_SHARP_){return (p1__16183_SHARP_ / mass);
});})(map__16186,map__16186__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
app.particle.update = (function update(t,ctx){var update_each = (function (p__16198){var map__16199 = p__16198;var map__16199__$1 = ((cljs.core.seq_QMARK_.call(null,map__16199))?cljs.core.apply.call(null,cljs.core.hash_map,map__16199):map__16199);var ctx__$1 = map__16199__$1;var ps = cljs.core.get.call(null,map__16199__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__16199,map__16199__$1,ctx__$1,ps){
return (function (p1__16187_SHARP_){return app.particle.updateTimer.call(null,app.particle.updatePos.call(null,app.particle.updateFormula.call(null,p1__16187_SHARP_),t),t);
});})(map__16199,map__16199__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__16200){var map__16201 = p__16200;var map__16201__$1 = ((cljs.core.seq_QMARK_.call(null,map__16201))?cljs.core.apply.call(null,cljs.core.hash_map,map__16201):map__16201);var ctx__$1 = map__16201__$1;var ps = cljs.core.get.call(null,map__16201__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__16201,map__16201__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__16202){var map__16203 = p__16202;var map__16203__$1 = ((cljs.core.seq_QMARK_.call(null,map__16203))?cljs.core.apply.call(null,cljs.core.hash_map,map__16203):map__16203);var part = map__16203__$1;var pos = cljs.core.get.call(null,map__16203__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__16203__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__16203__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__16204 = cljs.core.get.call(null,map__16203__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__16204__$1 = ((cljs.core.seq_QMARK_.call(null,map__16204))?cljs.core.apply.call(null,cljs.core.hash_map,map__16204):map__16204);var emit = map__16204__$1;var count = cljs.core.get.call(null,map__16204__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__16204__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__16204__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__16204__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__16204__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__16204__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__16203,map__16203__$1,part,pos,timer,emit_times,map__16204,map__16204__$1,emit,count,duration,angle,range,force,prototype,map__16201,map__16201__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__16203,map__16203__$1,part,pos,timer,emit_times,map__16204,map__16204__$1,emit,count,duration,angle,range,force,prototype,map__16201,map__16201__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__16203,map__16203__$1,part,pos,timer,emit_times,map__16204,map__16204__$1,emit,count,duration,angle,range,force,prototype,map__16201,map__16201__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,app.particle.forceIt.call(null,app.particle.particle.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__16203,map__16203__$1,part,pos,timer,emit_times,map__16204,map__16204__$1,emit,count,duration,angle,range,force,prototype,map__16201,map__16201__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__16203,map__16203__$1,part,pos,timer,emit_times,map__16204,map__16204__$1,emit,count,duration,angle,range,force,prototype,map__16201,map__16201__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__16203,map__16203__$1,part,pos,timer,emit_times,map__16204,map__16204__$1,emit,count,duration,angle,range,force,prototype,map__16201,map__16201__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__16201,map__16201__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__16205){var map__16206 = p__16205;var map__16206__$1 = ((cljs.core.seq_QMARK_.call(null,map__16206))?cljs.core.apply.call(null,cljs.core.hash_map,map__16206):map__16206);var ctx__$1 = map__16206__$1;var ps = cljs.core.get.call(null,map__16206__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__16206,map__16206__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__16188_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__16188_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__16188_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__16188_SHARP_)));
});})(map__16206,map__16206__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;return update_remove.call(null,update_each.call(null,update_emit.call(null,ctx)));
});
