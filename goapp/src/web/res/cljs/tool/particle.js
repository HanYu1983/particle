// Compiled by ClojureScript 0.0-2268
goog.provide('tool.particle');
goog.require('cljs.core');
tool.particle.particle = (function particle(p__16207){var map__16212 = p__16207;var map__16212__$1 = ((cljs.core.seq_QMARK_.call(null,map__16212))?cljs.core.apply.call(null,cljs.core.hash_map,map__16212):map__16212);var vec__16213 = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__16213,(0),null);var vy = cljs.core.nth.call(null,vec__16213,(1),null);var vr = cljs.core.nth.call(null,vec__16213,(2),null);var vel = vec__16213;var vec__16214 = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__16214,(0),null);var y = cljs.core.nth.call(null,vec__16214,(1),null);var rot = cljs.core.nth.call(null,vec__16214,(2),null);var pos = vec__16214;var mass = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"color","color",1011675173));var map__16215 = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__16215__$1 = ((cljs.core.seq_QMARK_.call(null,map__16215))?cljs.core.apply.call(null,cljs.core.hash_map,map__16215):map__16215);var emit = map__16215__$1;var count = cljs.core.get.call(null,map__16215__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__16215__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__16212__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
tool.particle.jsobj__GT_particle = (function jsobj__GT_particle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16220){var vec__16221 = p__16220;var k = cljs.core.nth.call(null,vec__16221,(0),null);var v = cljs.core.nth.call(null,vec__16221,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.update_in.call(null,obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj){
return (function (p__16222){var vec__16223 = p__16222;var k = cljs.core.nth.call(null,vec__16223,(0),null);var v = cljs.core.nth.call(null,vec__16223,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj){
return (function (ps){return cljs.core.mapv.call(null,jsobj__GT_particle,ps);
});})(obj))
);
});})(obj))
):obj);return tool.particle.particle.call(null,emit);
});
tool.particle.updatePos = (function updatePos(p__16226,t){var map__16228 = p__16226;var map__16228__$1 = ((cljs.core.seq_QMARK_.call(null,map__16228))?cljs.core.apply.call(null,cljs.core.hash_map,map__16228):map__16228);var particle = map__16228__$1;var pos = cljs.core.get.call(null,map__16228__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__16228__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__16228__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__16228,map__16228__$1,particle,pos,vel,fvel){
return (function (p1__16224_SHARP_){return (t * p1__16224_SHARP_);
});})(map__16228,map__16228__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__16228,map__16228__$1,particle,pos,vel,fvel){
return (function (p1__16225_SHARP_){return (t * p1__16225_SHARP_);
});})(map__16228,map__16228__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
tool.particle.updateTimer = (function updateTimer(p__16229,t){var map__16231 = p__16229;var map__16231__$1 = ((cljs.core.seq_QMARK_.call(null,map__16231))?cljs.core.apply.call(null,cljs.core.hash_map,map__16231):map__16231);var particle = map__16231__$1;var timer = cljs.core.get.call(null,map__16231__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
tool.particle.updateFormula = (function updateFormula(p__16232){var map__16238 = p__16232;var map__16238__$1 = ((cljs.core.seq_QMARK_.call(null,map__16238))?cljs.core.apply.call(null,cljs.core.hash_map,map__16238):map__16238);var particle = map__16238__$1;var formulaList = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__16238,map__16238__$1,particle,formulaList){
return (function (p__16239,p__16240){var map__16241 = p__16239;var map__16241__$1 = ((cljs.core.seq_QMARK_.call(null,map__16241))?cljs.core.apply.call(null,cljs.core.hash_map,map__16241):map__16241);var particle__$1 = map__16241__$1;var timer = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__16241__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__16242 = p__16240;var target = cljs.core.nth.call(null,vec__16242,(0),null);var formula = cljs.core.nth.call(null,vec__16242,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__16238,map__16238__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
tool.particle.forceIt = (function forceIt(p__16244,f){var map__16246 = p__16244;var map__16246__$1 = ((cljs.core.seq_QMARK_.call(null,map__16246))?cljs.core.apply.call(null,cljs.core.hash_map,map__16246):map__16246);var particle = map__16246__$1;var vel = cljs.core.get.call(null,map__16246__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__16246__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__16246,map__16246__$1,particle,vel,mass){
return (function (p1__16243_SHARP_){return (p1__16243_SHARP_ / mass);
});})(map__16246,map__16246__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
tool.particle.update = (function update(t,ctx){var update_each = (function (p__16258){var map__16259 = p__16258;var map__16259__$1 = ((cljs.core.seq_QMARK_.call(null,map__16259))?cljs.core.apply.call(null,cljs.core.hash_map,map__16259):map__16259);var ctx__$1 = map__16259__$1;var ps = cljs.core.get.call(null,map__16259__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__16259,map__16259__$1,ctx__$1,ps){
return (function (p1__16247_SHARP_){return tool.particle.updateTimer.call(null,tool.particle.updatePos.call(null,tool.particle.updateFormula.call(null,p1__16247_SHARP_),t),t);
});})(map__16259,map__16259__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__16260){var map__16261 = p__16260;var map__16261__$1 = ((cljs.core.seq_QMARK_.call(null,map__16261))?cljs.core.apply.call(null,cljs.core.hash_map,map__16261):map__16261);var ctx__$1 = map__16261__$1;var ps = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__16261,map__16261__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__16262){var map__16263 = p__16262;var map__16263__$1 = ((cljs.core.seq_QMARK_.call(null,map__16263))?cljs.core.apply.call(null,cljs.core.hash_map,map__16263):map__16263);var part = map__16263__$1;var pos = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__16264 = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__16264__$1 = ((cljs.core.seq_QMARK_.call(null,map__16264))?cljs.core.apply.call(null,cljs.core.hash_map,map__16264):map__16264);var emit = map__16264__$1;var count = cljs.core.get.call(null,map__16264__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__16264__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__16264__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__16264__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__16264__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__16264__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__16263,map__16263__$1,part,pos,timer,emit_times,map__16264,map__16264__$1,emit,count,duration,angle,range,force,prototype,map__16261,map__16261__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__16263,map__16263__$1,part,pos,timer,emit_times,map__16264,map__16264__$1,emit,count,duration,angle,range,force,prototype,map__16261,map__16261__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__16263,map__16263__$1,part,pos,timer,emit_times,map__16264,map__16264__$1,emit,count,duration,angle,range,force,prototype,map__16261,map__16261__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,tool.particle.forceIt.call(null,tool.particle.particle.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__16263,map__16263__$1,part,pos,timer,emit_times,map__16264,map__16264__$1,emit,count,duration,angle,range,force,prototype,map__16261,map__16261__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__16263,map__16263__$1,part,pos,timer,emit_times,map__16264,map__16264__$1,emit,count,duration,angle,range,force,prototype,map__16261,map__16261__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__16263,map__16263__$1,part,pos,timer,emit_times,map__16264,map__16264__$1,emit,count,duration,angle,range,force,prototype,map__16261,map__16261__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__16261,map__16261__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__16265){var map__16266 = p__16265;var map__16266__$1 = ((cljs.core.seq_QMARK_.call(null,map__16266))?cljs.core.apply.call(null,cljs.core.hash_map,map__16266):map__16266);var ctx__$1 = map__16266__$1;var ps = cljs.core.get.call(null,map__16266__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__16266,map__16266__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__16248_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__16248_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__16248_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__16248_SHARP_)));
});})(map__16266,map__16266__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;return update_remove.call(null,update_each.call(null,update_emit.call(null,ctx)));
});
