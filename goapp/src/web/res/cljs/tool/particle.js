// Compiled by ClojureScript 0.0-2268
goog.provide('tool.particle');
goog.require('cljs.core');
tool.particle.particle = (function particle(p__141073){var map__141078 = p__141073;var map__141078__$1 = ((cljs.core.seq_QMARK_.call(null,map__141078))?cljs.core.apply.call(null,cljs.core.hash_map,map__141078):map__141078);var vec__141079 = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__141079,(0),null);var vy = cljs.core.nth.call(null,vec__141079,(1),null);var vr = cljs.core.nth.call(null,vec__141079,(2),null);var vel = vec__141079;var vec__141080 = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__141080,(0),null);var y = cljs.core.nth.call(null,vec__141080,(1),null);var rot = cljs.core.nth.call(null,vec__141080,(2),null);var pos = vec__141080;var blending = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var mass = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"color","color",1011675173));var tex = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var map__141081 = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__141081__$1 = ((cljs.core.seq_QMARK_.call(null,map__141081))?cljs.core.apply.call(null,cljs.core.hash_map,map__141081):map__141081);var emit = map__141081__$1;var count = cljs.core.get.call(null,map__141081__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__141081__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__141078__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"tex","tex",1307057959),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"blending","blending",31165821)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return (1);
}
})(),(function (){var or__3551__auto__ = color;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1)], null);
}
})(),(0),(function (){var or__3551__auto__ = tex;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return null;
}
})(),(function (){var or__3551__auto__ = pos;if(cljs.core.truth_(or__3551__auto__))
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
})(),(function (){var or__3551__auto__ = blending;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return null;
}
})()]);
});
tool.particle.jsobj__GT_target = (function jsobj__GT_target(jsobj){var pred__141085 = cljs.core._EQ_;var expr__141086 = jsobj;if(cljs.core.truth_(pred__141085.call(null,"life",expr__141086)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"mass",expr__141086)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mass","mass",-2138950046)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"x",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"y",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"rot",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"vx",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"vy",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"vr",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"scale-x",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(0)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"scale-y",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"r",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(0)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"g",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(1)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"b",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(2)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"a",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(3)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"emit-angle",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"emit-range",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"range","range",1639692286)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"emit-count",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"count","count",2139924085)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"emit-duration",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"duration","duration",1444101068)], null);
} else
{if(cljs.core.truth_(pred__141085.call(null,"emit-force",expr__141086)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"force","force",781957286)], null);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
tool.particle.jsobj__GT_formula = (function jsobj__GT_formula(jsobj){var target = cljs.core.get.call(null,jsobj,(0));var type = cljs.core.get.call(null,jsobj,(1));var p1 = cljs.core.get.call(null,jsobj,(2));var p2 = cljs.core.get.call(null,jsobj,(3));var p3 = cljs.core.get.call(null,jsobj,(4));var p4 = cljs.core.get.call(null,jsobj,(5));var p5 = cljs.core.get.call(null,jsobj,(6));var temp__4126__auto__ = tool.particle.jsobj__GT_target.call(null,target);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;var temp__4126__auto____$1 = (function (){var pred__141091 = cljs.core._EQ_;var expr__141092 = type;if(cljs.core.truth_(pred__141091.call(null,"const",expr__141092)))
{return ((function (pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){return p1;
});
;})(pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__141091.call(null,"constAdd",expr__141092)))
{return ((function (pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){return (v + p1);
});
;})(pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__141091.call(null,"linear",expr__141092)))
{return ((function (pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var offset = (p2 - p1);var adj = (p1 + (offset * life));return ((0) + adj);
});
;})(pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__141091.call(null,"linearAdd",expr__141092)))
{return ((function (pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var offset = (p2 - p1);var adj = (p1 + (offset * life));return (v + adj);
});
;})(pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__141091.call(null,"randStartAdd",expr__141092)))
{return ((function (pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var adj = ((p1 * cljs.core.rand.call(null)) - (p1 / (2)));if((life === (0)))
{return (v + adj);
} else
{return v;
}
});
;})(pred__141091,expr__141092,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{return null;
}
}
}
}
}
})();if(cljs.core.truth_(temp__4126__auto____$1))
{var f = temp__4126__auto____$1;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,f], null);
} else
{return null;
}
} else
{return null;
}
});
tool.particle.jsobj__GT_particle = (function jsobj__GT_particle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__141098){var vec__141099 = p__141098;var k = cljs.core.nth.call(null,vec__141099,(0),null);var v = cljs.core.nth.call(null,vec__141099,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var formula = (cljs.core.truth_(new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),cljs.core.reduce.call(null,((function (obj){
return (function (all,curr){var temp__4124__auto__ = tool.particle.jsobj__GT_formula.call(null,curr);if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.cons.call(null,f,all);
} else
{return all;
}
});})(obj))
,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))):obj);var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(formula))?cljs.core.update_in.call(null,formula,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj,formula){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj,formula){
return (function (p__141100){var vec__141101 = p__141100;var k = cljs.core.nth.call(null,vec__141101,(0),null);var v = cljs.core.nth.call(null,vec__141101,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj,formula))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj,formula){
return (function (ps){return cljs.core.mapv.call(null,jsobj__GT_particle,ps);
});})(obj,formula))
);
});})(obj,formula))
):formula);return tool.particle.particle.call(null,emit);
});
tool.particle.updatePos = (function updatePos(p__141104,t){var map__141106 = p__141104;var map__141106__$1 = ((cljs.core.seq_QMARK_.call(null,map__141106))?cljs.core.apply.call(null,cljs.core.hash_map,map__141106):map__141106);var particle = map__141106__$1;var pos = cljs.core.get.call(null,map__141106__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__141106__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__141106__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__141106,map__141106__$1,particle,pos,vel,fvel){
return (function (p1__141102_SHARP_){return (t * p1__141102_SHARP_);
});})(map__141106,map__141106__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__141106,map__141106__$1,particle,pos,vel,fvel){
return (function (p1__141103_SHARP_){return (t * p1__141103_SHARP_);
});})(map__141106,map__141106__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
tool.particle.updateTimer = (function updateTimer(p__141107,t){var map__141109 = p__141107;var map__141109__$1 = ((cljs.core.seq_QMARK_.call(null,map__141109))?cljs.core.apply.call(null,cljs.core.hash_map,map__141109):map__141109);var particle = map__141109__$1;var timer = cljs.core.get.call(null,map__141109__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
tool.particle.updateFormula = (function updateFormula(p__141110){var map__141116 = p__141110;var map__141116__$1 = ((cljs.core.seq_QMARK_.call(null,map__141116))?cljs.core.apply.call(null,cljs.core.hash_map,map__141116):map__141116);var particle = map__141116__$1;var formulaList = cljs.core.get.call(null,map__141116__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__141116,map__141116__$1,particle,formulaList){
return (function (p__141117,p__141118){var map__141119 = p__141117;var map__141119__$1 = ((cljs.core.seq_QMARK_.call(null,map__141119))?cljs.core.apply.call(null,cljs.core.hash_map,map__141119):map__141119);var particle__$1 = map__141119__$1;var timer = cljs.core.get.call(null,map__141119__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__141119__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__141120 = p__141118;var target = cljs.core.nth.call(null,vec__141120,(0),null);var formula = cljs.core.nth.call(null,vec__141120,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__141116,map__141116__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
tool.particle.forceIt = (function forceIt(p__141122,f){var map__141124 = p__141122;var map__141124__$1 = ((cljs.core.seq_QMARK_.call(null,map__141124))?cljs.core.apply.call(null,cljs.core.hash_map,map__141124):map__141124);var particle = map__141124__$1;var vel = cljs.core.get.call(null,map__141124__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__141124__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__141124,map__141124__$1,particle,vel,mass){
return (function (p1__141121_SHARP_){return (p1__141121_SHARP_ / mass);
});})(map__141124,map__141124__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
tool.particle.update = (function update(t,ctx){var update_each = (function (p__141138){var map__141139 = p__141138;var map__141139__$1 = ((cljs.core.seq_QMARK_.call(null,map__141139))?cljs.core.apply.call(null,cljs.core.hash_map,map__141139):map__141139);var ctx__$1 = map__141139__$1;var ps = cljs.core.get.call(null,map__141139__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__141139,map__141139__$1,ctx__$1,ps){
return (function (p1__141125_SHARP_){return tool.particle.updateTimer.call(null,tool.particle.updatePos.call(null,tool.particle.updateFormula.call(null,p1__141125_SHARP_),t),t);
});})(map__141139,map__141139__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__141140){var map__141141 = p__141140;var map__141141__$1 = ((cljs.core.seq_QMARK_.call(null,map__141141))?cljs.core.apply.call(null,cljs.core.hash_map,map__141141):map__141141);var ctx__$1 = map__141141__$1;var ps = cljs.core.get.call(null,map__141141__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__141141,map__141141__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__141142){var map__141143 = p__141142;var map__141143__$1 = ((cljs.core.seq_QMARK_.call(null,map__141143))?cljs.core.apply.call(null,cljs.core.hash_map,map__141143):map__141143);var part = map__141143__$1;var pos = cljs.core.get.call(null,map__141143__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__141143__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__141143__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__141144 = cljs.core.get.call(null,map__141143__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__141144__$1 = ((cljs.core.seq_QMARK_.call(null,map__141144))?cljs.core.apply.call(null,cljs.core.hash_map,map__141144):map__141144);var emit = map__141144__$1;var count = cljs.core.get.call(null,map__141144__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__141144__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__141144__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__141144__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__141144__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__141144__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__141143,map__141143__$1,part,pos,timer,emit_times,map__141144,map__141144__$1,emit,count,duration,angle,range,force,prototype,map__141141,map__141141__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__141143,map__141143__$1,part,pos,timer,emit_times,map__141144,map__141144__$1,emit,count,duration,angle,range,force,prototype,map__141141,map__141141__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__141143,map__141143__$1,part,pos,timer,emit_times,map__141144,map__141144__$1,emit,count,duration,angle,range,force,prototype,map__141141,map__141141__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,tool.particle.forceIt.call(null,tool.particle.particle.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__141143,map__141143__$1,part,pos,timer,emit_times,map__141144,map__141144__$1,emit,count,duration,angle,range,force,prototype,map__141141,map__141141__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__141143,map__141143__$1,part,pos,timer,emit_times,map__141144,map__141144__$1,emit,count,duration,angle,range,force,prototype,map__141141,map__141141__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__141143,map__141143__$1,part,pos,timer,emit_times,map__141144,map__141144__$1,emit,count,duration,angle,range,force,prototype,map__141141,map__141141__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__141141,map__141141__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__141145){var map__141146 = p__141145;var map__141146__$1 = ((cljs.core.seq_QMARK_.call(null,map__141146))?cljs.core.apply.call(null,cljs.core.hash_map,map__141146):map__141146);var ctx__$1 = map__141146__$1;var ps = cljs.core.get.call(null,map__141146__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__141146,map__141146__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__141126_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__141126_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__141126_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__141126_SHARP_)));
});})(map__141146,map__141146__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;var update_remove_limit = ((function (update_each,update_emit,update_remove){
return (function (p__141147){var map__141148 = p__141147;var map__141148__$1 = ((cljs.core.seq_QMARK_.call(null,map__141148))?cljs.core.apply.call(null,cljs.core.hash_map,map__141148):map__141148);var ctx__$1 = map__141148__$1;var ps = cljs.core.get.call(null,map__141148__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var limit = cljs.core.get.call(null,map__141148__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));if(((limit > (0))) && ((cljs.core.count.call(null,ps) > limit)))
{return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.drop_last.call(null,(cljs.core.count.call(null,ps) - limit),cljs.core.sort_by.call(null,((function (map__141148,map__141148__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove){
return (function (p){if(cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(p)))
{return (0);
} else
{if((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p) === (0)))
{return (0);
} else
{return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p);
}
}
});})(map__141148,map__141148__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove))
,ps)));
} else
{return ctx__$1;
}
});})(update_each,update_emit,update_remove))
;return update_remove_limit.call(null,update_remove.call(null,update_each.call(null,update_emit.call(null,ctx))));
});
