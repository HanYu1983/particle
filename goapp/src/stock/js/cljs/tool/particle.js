// Compiled by ClojureScript 0.0-2268
goog.provide('tool.particle');
goog.require('cljs.core');
tool.particle.particle = (function particle(p__56628){var map__56633 = p__56628;var map__56633__$1 = ((cljs.core.seq_QMARK_.call(null,map__56633))?cljs.core.apply.call(null,cljs.core.hash_map,map__56633):map__56633);var vec__56634 = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__56634,(0),null);var vy = cljs.core.nth.call(null,vec__56634,(1),null);var vr = cljs.core.nth.call(null,vec__56634,(2),null);var vel = vec__56634;var vec__56635 = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__56635,(0),null);var y = cljs.core.nth.call(null,vec__56635,(1),null);var rot = cljs.core.nth.call(null,vec__56635,(2),null);var pos = vec__56635;var blending = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var mass = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"color","color",1011675173));var tex = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var map__56636 = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__56636__$1 = ((cljs.core.seq_QMARK_.call(null,map__56636))?cljs.core.apply.call(null,cljs.core.hash_map,map__56636):map__56636);var emit = map__56636__$1;var count = cljs.core.get.call(null,map__56636__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__56636__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__56633__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"tex","tex",1307057959),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"blending","blending",31165821)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
tool.particle.jsobj__GT_target = (function jsobj__GT_target(jsobj){var pred__56640 = cljs.core._EQ_;var expr__56641 = jsobj;if(cljs.core.truth_(pred__56640.call(null,"life",expr__56641)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"mass",expr__56641)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mass","mass",-2138950046)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"x",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"y",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"rot",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"vx",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"vy",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"vr",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"scale-x",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(0)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"scale-y",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"r",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(0)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"g",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(1)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"b",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(2)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"a",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(3)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"emit-angle",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"emit-range",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"range","range",1639692286)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"emit-count",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"count","count",2139924085)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"emit-duration",expr__56641)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"duration","duration",1444101068)], null);
} else
{if(cljs.core.truth_(pred__56640.call(null,"emit-force",expr__56641)))
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
{var t = temp__4126__auto__;var temp__4126__auto____$1 = (function (){var pred__56646 = cljs.core._EQ_;var expr__56647 = type;if(cljs.core.truth_(pred__56646.call(null,"const",expr__56647)))
{return ((function (pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){return p1;
});
;})(pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__56646.call(null,"constAdd",expr__56647)))
{return ((function (pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){return (v + p1);
});
;})(pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__56646.call(null,"linear",expr__56647)))
{return ((function (pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var offset = (p2 - p1);var adj = (p1 + (offset * life));return ((0) + adj);
});
;})(pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__56646.call(null,"linearAdd",expr__56647)))
{return ((function (pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var offset = (p2 - p1);var adj = (p1 + (offset * life));return (v + adj);
});
;})(pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__56646.call(null,"randStartAdd",expr__56647)))
{return ((function (pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var adj = ((p1 * cljs.core.rand.call(null)) - (p1 / (2)));if((life === (0)))
{return (v + adj);
} else
{return v;
}
});
;})(pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__56646.call(null,"custom",expr__56647)))
{return ((function (pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){if(cljs.core._EQ_.call(null,life,(0)))
{return p1;
} else
{if((life < 0.25))
{return (p1 + ((p2 - p1) * (life / 0.25)));
} else
{if((life < 0.5))
{return (p2 + ((p3 - p2) * ((life - 0.25) / 0.25)));
} else
{if((life < 0.75))
{return (p3 + ((p4 - p3) * ((life - 0.5) / 0.25)));
} else
{if((life < (1)))
{return (p4 + ((p5 - p4) * ((life - 0.75) / 0.25)));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return p5;
} else
{return null;
}
}
}
}
}
}
});
;})(pred__56646,expr__56647,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{return null;
}
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
tool.particle.jsobj__GT_particle = (function jsobj__GT_particle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__56653){var vec__56654 = p__56653;var k = cljs.core.nth.call(null,vec__56654,(0),null);var v = cljs.core.nth.call(null,vec__56654,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var formula = (cljs.core.truth_(new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),cljs.core.reduce.call(null,((function (obj){
return (function (all,curr){var temp__4124__auto__ = tool.particle.jsobj__GT_formula.call(null,curr);if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.cons.call(null,f,all);
} else
{return all;
}
});})(obj))
,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))):obj);var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(formula))?cljs.core.update_in.call(null,formula,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj,formula){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj,formula){
return (function (p__56655){var vec__56656 = p__56655;var k = cljs.core.nth.call(null,vec__56656,(0),null);var v = cljs.core.nth.call(null,vec__56656,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj,formula))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj,formula){
return (function (ps){return cljs.core.mapv.call(null,jsobj__GT_particle,ps);
});})(obj,formula))
);
});})(obj,formula))
):formula);return tool.particle.particle.call(null,emit);
});
tool.particle.updatePos = (function updatePos(p__56659,t){var map__56661 = p__56659;var map__56661__$1 = ((cljs.core.seq_QMARK_.call(null,map__56661))?cljs.core.apply.call(null,cljs.core.hash_map,map__56661):map__56661);var particle = map__56661__$1;var pos = cljs.core.get.call(null,map__56661__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__56661__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__56661__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__56661,map__56661__$1,particle,pos,vel,fvel){
return (function (p1__56657_SHARP_){return (t * p1__56657_SHARP_);
});})(map__56661,map__56661__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__56661,map__56661__$1,particle,pos,vel,fvel){
return (function (p1__56658_SHARP_){return (t * p1__56658_SHARP_);
});})(map__56661,map__56661__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
tool.particle.updateTimer = (function updateTimer(p__56662,t){var map__56664 = p__56662;var map__56664__$1 = ((cljs.core.seq_QMARK_.call(null,map__56664))?cljs.core.apply.call(null,cljs.core.hash_map,map__56664):map__56664);var particle = map__56664__$1;var timer = cljs.core.get.call(null,map__56664__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
tool.particle.updateFormula = (function updateFormula(p__56665){var map__56671 = p__56665;var map__56671__$1 = ((cljs.core.seq_QMARK_.call(null,map__56671))?cljs.core.apply.call(null,cljs.core.hash_map,map__56671):map__56671);var particle = map__56671__$1;var formulaList = cljs.core.get.call(null,map__56671__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__56671,map__56671__$1,particle,formulaList){
return (function (p__56672,p__56673){var map__56674 = p__56672;var map__56674__$1 = ((cljs.core.seq_QMARK_.call(null,map__56674))?cljs.core.apply.call(null,cljs.core.hash_map,map__56674):map__56674);var particle__$1 = map__56674__$1;var timer = cljs.core.get.call(null,map__56674__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__56674__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__56675 = p__56673;var target = cljs.core.nth.call(null,vec__56675,(0),null);var formula = cljs.core.nth.call(null,vec__56675,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__56671,map__56671__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
tool.particle.forceIt = (function forceIt(p__56677,f){var map__56679 = p__56677;var map__56679__$1 = ((cljs.core.seq_QMARK_.call(null,map__56679))?cljs.core.apply.call(null,cljs.core.hash_map,map__56679):map__56679);var particle = map__56679__$1;var vel = cljs.core.get.call(null,map__56679__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__56679__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__56679,map__56679__$1,particle,vel,mass){
return (function (p1__56676_SHARP_){return (p1__56676_SHARP_ / mass);
});})(map__56679,map__56679__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
tool.particle.update = (function update(t,ctx){var update_each = (function (p__56693){var map__56694 = p__56693;var map__56694__$1 = ((cljs.core.seq_QMARK_.call(null,map__56694))?cljs.core.apply.call(null,cljs.core.hash_map,map__56694):map__56694);var ctx__$1 = map__56694__$1;var ps = cljs.core.get.call(null,map__56694__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__56694,map__56694__$1,ctx__$1,ps){
return (function (p1__56680_SHARP_){return tool.particle.updateTimer.call(null,tool.particle.updatePos.call(null,tool.particle.updateFormula.call(null,p1__56680_SHARP_),t),t);
});})(map__56694,map__56694__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__56695){var map__56696 = p__56695;var map__56696__$1 = ((cljs.core.seq_QMARK_.call(null,map__56696))?cljs.core.apply.call(null,cljs.core.hash_map,map__56696):map__56696);var ctx__$1 = map__56696__$1;var ps = cljs.core.get.call(null,map__56696__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__56696,map__56696__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__56697){var map__56698 = p__56697;var map__56698__$1 = ((cljs.core.seq_QMARK_.call(null,map__56698))?cljs.core.apply.call(null,cljs.core.hash_map,map__56698):map__56698);var part = map__56698__$1;var pos = cljs.core.get.call(null,map__56698__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__56698__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__56698__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__56699 = cljs.core.get.call(null,map__56698__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__56699__$1 = ((cljs.core.seq_QMARK_.call(null,map__56699))?cljs.core.apply.call(null,cljs.core.hash_map,map__56699):map__56699);var emit = map__56699__$1;var count = cljs.core.get.call(null,map__56699__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__56699__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__56699__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__56699__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__56699__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__56699__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__56698,map__56698__$1,part,pos,timer,emit_times,map__56699,map__56699__$1,emit,count,duration,angle,range,force,prototype,map__56696,map__56696__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__56698,map__56698__$1,part,pos,timer,emit_times,map__56699,map__56699__$1,emit,count,duration,angle,range,force,prototype,map__56696,map__56696__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__56698,map__56698__$1,part,pos,timer,emit_times,map__56699,map__56699__$1,emit,count,duration,angle,range,force,prototype,map__56696,map__56696__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,tool.particle.forceIt.call(null,tool.particle.particle.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__56698,map__56698__$1,part,pos,timer,emit_times,map__56699,map__56699__$1,emit,count,duration,angle,range,force,prototype,map__56696,map__56696__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__56698,map__56698__$1,part,pos,timer,emit_times,map__56699,map__56699__$1,emit,count,duration,angle,range,force,prototype,map__56696,map__56696__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__56698,map__56698__$1,part,pos,timer,emit_times,map__56699,map__56699__$1,emit,count,duration,angle,range,force,prototype,map__56696,map__56696__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__56696,map__56696__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__56700){var map__56701 = p__56700;var map__56701__$1 = ((cljs.core.seq_QMARK_.call(null,map__56701))?cljs.core.apply.call(null,cljs.core.hash_map,map__56701):map__56701);var ctx__$1 = map__56701__$1;var ps = cljs.core.get.call(null,map__56701__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__56701,map__56701__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__56681_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__56681_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__56681_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__56681_SHARP_)));
});})(map__56701,map__56701__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;var update_remove_limit = ((function (update_each,update_emit,update_remove){
return (function (p__56702){var map__56703 = p__56702;var map__56703__$1 = ((cljs.core.seq_QMARK_.call(null,map__56703))?cljs.core.apply.call(null,cljs.core.hash_map,map__56703):map__56703);var ctx__$1 = map__56703__$1;var ps = cljs.core.get.call(null,map__56703__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var limit = cljs.core.get.call(null,map__56703__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));if(((limit > (0))) && ((cljs.core.count.call(null,ps) > limit)))
{return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.drop_last.call(null,(cljs.core.count.call(null,ps) - limit),cljs.core.sort_by.call(null,((function (map__56703,map__56703__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove){
return (function (p){if(cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(p)))
{return (0);
} else
{if((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p) === (0)))
{return (0);
} else
{return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p);
}
}
});})(map__56703,map__56703__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove))
,ps)));
} else
{return ctx__$1;
}
});})(update_each,update_emit,update_remove))
;return update_remove_limit.call(null,update_remove.call(null,update_each.call(null,update_emit.call(null,ctx))));
});
