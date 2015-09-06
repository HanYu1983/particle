// Compiled by ClojureScript 0.0-2268
goog.provide('tool.particle');
goog.require('cljs.core');
tool.particle.particle = (function particle(p__142651){var map__142656 = p__142651;var map__142656__$1 = ((cljs.core.seq_QMARK_.call(null,map__142656))?cljs.core.apply.call(null,cljs.core.hash_map,map__142656):map__142656);var vec__142657 = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var vx = cljs.core.nth.call(null,vec__142657,(0),null);var vy = cljs.core.nth.call(null,vec__142657,(1),null);var vr = cljs.core.nth.call(null,vec__142657,(2),null);var vel = vec__142657;var vec__142658 = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var x = cljs.core.nth.call(null,vec__142658,(0),null);var y = cljs.core.nth.call(null,vec__142658,(1),null);var rot = cljs.core.nth.call(null,vec__142658,(2),null);var pos = vec__142658;var blending = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"blending","blending",31165821));var mass = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var color = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"color","color",1011675173));var tex = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));var map__142659 = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__142659__$1 = ((cljs.core.seq_QMARK_.call(null,map__142659))?cljs.core.apply.call(null,cljs.core.hash_map,map__142659):map__142659);var emit = map__142659__$1;var count = cljs.core.get.call(null,map__142659__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__142659__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var size = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"size","size",1098693007));var formulaList = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));var id = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var lifetime = cljs.core.get.call(null,map__142656__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"tex","tex",1307057959),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"blending","blending",31165821)],[(function (){var or__3551__auto__ = mass;if(cljs.core.truth_(or__3551__auto__))
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
tool.particle.jsobj__GT_target = (function jsobj__GT_target(jsobj){var pred__142663 = cljs.core._EQ_;var expr__142664 = jsobj;if(cljs.core.truth_(pred__142663.call(null,"life",expr__142664)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"mass",expr__142664)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mass","mass",-2138950046)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"x",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"y",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"rot",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"vx",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"vy",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"vr",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"scale-x",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(0)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"scale-y",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"r",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(0)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"g",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(1)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"b",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(2)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"a",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(3)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"emit-angle",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"emit-range",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"range","range",1639692286)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"emit-count",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"count","count",2139924085)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"emit-duration",expr__142664)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"duration","duration",1444101068)], null);
} else
{if(cljs.core.truth_(pred__142663.call(null,"emit-force",expr__142664)))
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
{var t = temp__4126__auto__;var temp__4126__auto____$1 = (function (){var pred__142669 = cljs.core._EQ_;var expr__142670 = type;if(cljs.core.truth_(pred__142669.call(null,"const",expr__142670)))
{return ((function (pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){return p1;
});
;})(pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__142669.call(null,"constAdd",expr__142670)))
{return ((function (pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){return (v + p1);
});
;})(pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__142669.call(null,"linear",expr__142670)))
{return ((function (pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var offset = (p2 - p1);var adj = (p1 + (offset * life));return ((0) + adj);
});
;})(pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__142669.call(null,"linearAdd",expr__142670)))
{return ((function (pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var offset = (p2 - p1);var adj = (p1 + (offset * life));return (v + adj);
});
;})(pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
} else
{if(cljs.core.truth_(pred__142669.call(null,"randStartAdd",expr__142670)))
{return ((function (pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){var adj = ((p1 * cljs.core.rand.call(null)) - (p1 / (2)));if((life === (0)))
{return (v + adj);
} else
{return v;
}
});
;})(pred__142669,expr__142670,t,temp__4126__auto__,target,type,p1,p2,p3,p4,p5))
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
tool.particle.jsobj__GT_particle = (function jsobj__GT_particle(jsobj){var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__142676){var vec__142677 = p__142676;var k = cljs.core.nth.call(null,vec__142677,(0),null);var v = cljs.core.nth.call(null,vec__142677,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));var formula = (cljs.core.truth_(new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),cljs.core.reduce.call(null,((function (obj){
return (function (all,curr){var temp__4124__auto__ = tool.particle.jsobj__GT_formula.call(null,curr);if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return cljs.core.cons.call(null,f,all);
} else
{return all;
}
});})(obj))
,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))):obj);var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(formula))?cljs.core.update_in.call(null,formula,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj,formula){
return (function (ori){return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj,formula){
return (function (p__142678){var vec__142679 = p__142678;var k = cljs.core.nth.call(null,vec__142679,(0),null);var v = cljs.core.nth.call(null,vec__142679,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj,formula))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj,formula){
return (function (ps){return cljs.core.mapv.call(null,jsobj__GT_particle,ps);
});})(obj,formula))
);
});})(obj,formula))
):formula);return tool.particle.particle.call(null,emit);
});
tool.particle.updatePos = (function updatePos(p__142682,t){var map__142684 = p__142682;var map__142684__$1 = ((cljs.core.seq_QMARK_.call(null,map__142684))?cljs.core.apply.call(null,cljs.core.hash_map,map__142684):map__142684);var particle = map__142684__$1;var pos = cljs.core.get.call(null,map__142684__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var vel = cljs.core.get.call(null,map__142684__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));var fvel = cljs.core.get.call(null,map__142684__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__142684,map__142684__$1,particle,pos,vel,fvel){
return (function (p1__142680_SHARP_){return (t * p1__142680_SHARP_);
});})(map__142684,map__142684__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__142684,map__142684__$1,particle,pos,vel,fvel){
return (function (p1__142681_SHARP_){return (t * p1__142681_SHARP_);
});})(map__142684,map__142684__$1,particle,pos,vel,fvel))
,fvel));return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
tool.particle.updateTimer = (function updateTimer(p__142685,t){var map__142687 = p__142685;var map__142687__$1 = ((cljs.core.seq_QMARK_.call(null,map__142687))?cljs.core.apply.call(null,cljs.core.hash_map,map__142687):map__142687);var particle = map__142687__$1;var timer = cljs.core.get.call(null,map__142687__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
tool.particle.updateFormula = (function updateFormula(p__142688){var map__142694 = p__142688;var map__142694__$1 = ((cljs.core.seq_QMARK_.call(null,map__142694))?cljs.core.apply.call(null,cljs.core.hash_map,map__142694):map__142694);var particle = map__142694__$1;var formulaList = cljs.core.get.call(null,map__142694__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));if(cljs.core.some_QMARK_.call(null,formulaList))
{return cljs.core.reduce.call(null,((function (map__142694,map__142694__$1,particle,formulaList){
return (function (p__142695,p__142696){var map__142697 = p__142695;var map__142697__$1 = ((cljs.core.seq_QMARK_.call(null,map__142697))?cljs.core.apply.call(null,cljs.core.hash_map,map__142697):map__142697);var particle__$1 = map__142697__$1;var timer = cljs.core.get.call(null,map__142697__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var lifetime = cljs.core.get.call(null,map__142697__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));var vec__142698 = p__142696;var target = cljs.core.nth.call(null,vec__142698,(0),null);var formula = cljs.core.nth.call(null,vec__142698,(1),null);return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__142694,map__142694__$1,particle,formulaList))
,particle,formulaList);
} else
{return particle;
}
});
tool.particle.forceIt = (function forceIt(p__142700,f){var map__142702 = p__142700;var map__142702__$1 = ((cljs.core.seq_QMARK_.call(null,map__142702))?cljs.core.apply.call(null,cljs.core.hash_map,map__142702):map__142702);var particle = map__142702__$1;var vel = cljs.core.get.call(null,map__142702__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));var mass = cljs.core.get.call(null,map__142702__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));var accel = cljs.core.map.call(null,((function (map__142702,map__142702__$1,particle,vel,mass){
return (function (p1__142699_SHARP_){return (p1__142699_SHARP_ / mass);
});})(map__142702,map__142702__$1,particle,vel,mass))
,f);return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
tool.particle.update = (function update(t,ctx){var update_each = (function (p__142716){var map__142717 = p__142716;var map__142717__$1 = ((cljs.core.seq_QMARK_.call(null,map__142717))?cljs.core.apply.call(null,cljs.core.hash_map,map__142717):map__142717);var ctx__$1 = map__142717__$1;var ps = cljs.core.get.call(null,map__142717__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__142717,map__142717__$1,ctx__$1,ps){
return (function (p1__142703_SHARP_){return tool.particle.updateTimer.call(null,tool.particle.updatePos.call(null,tool.particle.updateFormula.call(null,p1__142703_SHARP_),t),t);
});})(map__142717,map__142717__$1,ctx__$1,ps))
,ps));
});var update_emit = ((function (update_each){
return (function (p__142718){var map__142719 = p__142718;var map__142719__$1 = ((cljs.core.seq_QMARK_.call(null,map__142719))?cljs.core.apply.call(null,cljs.core.hash_map,map__142719):map__142719);var ctx__$1 = map__142719__$1;var ps = cljs.core.get.call(null,map__142719__$1,new cljs.core.Keyword(null,"ps","ps",292358046));return cljs.core.reduce.call(null,((function (map__142719,map__142719__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__142720){var map__142721 = p__142720;var map__142721__$1 = ((cljs.core.seq_QMARK_.call(null,map__142721))?cljs.core.apply.call(null,cljs.core.hash_map,map__142721):map__142721);var part = map__142721__$1;var pos = cljs.core.get.call(null,map__142721__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));var timer = cljs.core.get.call(null,map__142721__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));var emit_times = cljs.core.get.call(null,map__142721__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));var map__142722 = cljs.core.get.call(null,map__142721__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));var map__142722__$1 = ((cljs.core.seq_QMARK_.call(null,map__142722))?cljs.core.apply.call(null,cljs.core.hash_map,map__142722):map__142722);var emit = map__142722__$1;var count = cljs.core.get.call(null,map__142722__$1,new cljs.core.Keyword(null,"count","count",2139924085));var duration = cljs.core.get.call(null,map__142722__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));var angle = cljs.core.get.call(null,map__142722__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));var range = cljs.core.get.call(null,map__142722__$1,new cljs.core.Keyword(null,"range","range",1639692286));var force = cljs.core.get.call(null,map__142722__$1,new cljs.core.Keyword(null,"force","force",781957286));var prototype = cljs.core.get.call(null,map__142722__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));if((emit == null))
{return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else
{var should_times = ((timer / duration) | (0));var emit_times_now = (count * (should_times - emit_times));var emit_particle = ((function (should_times,emit_times_now,map__142721,map__142721__$1,part,pos,timer,emit_times,map__142722,map__142722__$1,emit,count,duration,angle,range,force,prototype,map__142719,map__142719__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__142721,map__142721__$1,part,pos,timer,emit_times,map__142722,map__142722__$1,emit,count,duration,angle,range,force,prototype,map__142719,map__142719__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__142721,map__142721__$1,part,pos,timer,emit_times,map__142722,map__142722__$1,emit,count,duration,angle,range,force,prototype,map__142719,map__142719__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,tool.particle.forceIt.call(null,tool.particle.particle.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__142721,map__142721__$1,part,pos,timer,emit_times,map__142722,map__142722__$1,emit,count,duration,angle,range,force,prototype,map__142719,map__142719__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__142721,map__142721__$1,part,pos,timer,emit_times,map__142722,map__142722__$1,emit,count,duration,angle,range,force,prototype,map__142719,map__142719__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__142721,map__142721__$1,part,pos,timer,emit_times,map__142722,map__142722__$1,emit,count,duration,angle,range,force,prototype,map__142719,map__142719__$1,ctx__$1,ps,update_each))
;return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__142719,map__142719__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;var update_remove = ((function (update_each,update_emit){
return (function (p__142723){var map__142724 = p__142723;var map__142724__$1 = ((cljs.core.seq_QMARK_.call(null,map__142724))?cljs.core.apply.call(null,cljs.core.hash_map,map__142724):map__142724);var ctx__$1 = map__142724__$1;var ps = cljs.core.get.call(null,map__142724__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var remove_self = cljs.core.remove.call(null,((function (map__142724,map__142724__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__142704_SHARP_){return ((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__142704_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__142704_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__142704_SHARP_)));
});})(map__142724,map__142724__$1,ctx__$1,ps,update_each,update_emit))
,ps);return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;var update_remove_limit = ((function (update_each,update_emit,update_remove){
return (function (p__142725){var map__142726 = p__142725;var map__142726__$1 = ((cljs.core.seq_QMARK_.call(null,map__142726))?cljs.core.apply.call(null,cljs.core.hash_map,map__142726):map__142726);var ctx__$1 = map__142726__$1;var ps = cljs.core.get.call(null,map__142726__$1,new cljs.core.Keyword(null,"ps","ps",292358046));var limit = cljs.core.get.call(null,map__142726__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));if(((limit > (0))) && ((cljs.core.count.call(null,ps) > limit)))
{return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.drop_last.call(null,(cljs.core.count.call(null,ps) - limit),cljs.core.sort_by.call(null,((function (map__142726,map__142726__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove){
return (function (p){if(cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(p)))
{return (0);
} else
{if((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p) === (0)))
{return (0);
} else
{return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p);
}
}
});})(map__142726,map__142726__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove))
,ps)));
} else
{return ctx__$1;
}
});})(update_each,update_emit,update_remove))
;return update_remove_limit.call(null,update_remove.call(null,update_each.call(null,update_emit.call(null,ctx))));
});
