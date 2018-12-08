// Compiled by ClojureScript 1.10.238 {}
goog.provide('tool.particle');
goog.require('cljs.core');
tool.particle.particle = (function tool$particle$particle(p__8973){
var map__8974 = p__8973;
var map__8974__$1 = ((((!((map__8974 == null)))?(((((map__8974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8974):map__8974);
var vec__8975 = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));
var vx = cljs.core.nth.call(null,vec__8975,(0),null);
var vy = cljs.core.nth.call(null,vec__8975,(1),null);
var vr = cljs.core.nth.call(null,vec__8975,(2),null);
var vel = vec__8975;
var vec__8978 = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var x = cljs.core.nth.call(null,vec__8978,(0),null);
var y = cljs.core.nth.call(null,vec__8978,(1),null);
var rot = cljs.core.nth.call(null,vec__8978,(2),null);
var pos = vec__8978;
var blending = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"blending","blending",31165821));
var mass = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var color = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var tex = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var map__8981 = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__8981__$1 = ((((!((map__8981 == null)))?(((((map__8981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8981):map__8981);
var emit = map__8981__$1;
var count = cljs.core.get.call(null,map__8981__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var duration = cljs.core.get.call(null,map__8981__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var size = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var formulaList = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));
var id = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lifetime = cljs.core.get.call(null,map__8974__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"tex","tex",1307057959),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"emit-times","emit-times",793706865),new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.Keyword(null,"blending","blending",31165821)],[(function (){var or__3922__auto__ = mass;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})(),(function (){var or__3922__auto__ = color;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1)], null);
}
})(),(0),(function (){var or__3922__auto__ = tex;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return null;
}
})(),(function (){var or__3922__auto__ = pos;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}
})(),(function (){var or__3922__auto__ = size;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null);
}
})(),(0),(function (){var or__3922__auto__ = formulaList;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return null;
}
})(),(function (){var or__3922__auto__ = id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null,"particle");
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),(cljs.core.truth_(emit)?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword(null,"duration","duration",1444101068),(1),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"range","range",1639692286),(0),new cljs.core.Keyword(null,"force","force",781957286),(0)], null),emit):null),(function (){var or__3922__auto__ = lifetime;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})(),(function (){var or__3922__auto__ = vel;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}
})(),(function (){var or__3922__auto__ = blending;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return null;
}
})()]);
});
tool.particle.jsobj__GT_target = (function tool$particle$jsobj__GT_target(jsobj){
var pred__8984 = cljs.core._EQ_;
var expr__8985 = jsobj;
if(cljs.core.truth_(pred__8984.call(null,"life",expr__8985))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"mass",expr__8985))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mass","mass",-2138950046)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"x",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(0)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"y",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(1)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"rot",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),(2)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"vx",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(0)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"vy",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(1)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"vr",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vel","vel",-110770822),(2)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"scale-x",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(0)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"scale-y",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),(1)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"r",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(0)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"g",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(1)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"b",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(2)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"a",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(3)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"emit-angle",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"angle","angle",1622094254)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"emit-range",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"range","range",1639692286)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"emit-count",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"count","count",2139924085)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"emit-duration",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"duration","duration",1444101068)], null);
} else {
if(cljs.core.truth_(pred__8984.call(null,"emit-force",expr__8985))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018),new cljs.core.Keyword(null,"force","force",781957286)], null);
} else {
return null;
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
tool.particle.jsobj__GT_formula = (function tool$particle$jsobj__GT_formula(jsobj){
var target = cljs.core.get.call(null,jsobj,(0));
var type = cljs.core.get.call(null,jsobj,(1));
var p1 = cljs.core.get.call(null,jsobj,(2));
var p2 = cljs.core.get.call(null,jsobj,(3));
var p3 = cljs.core.get.call(null,jsobj,(4));
var p4 = cljs.core.get.call(null,jsobj,(5));
var p5 = cljs.core.get.call(null,jsobj,(6));
var temp__5457__auto__ = tool.particle.jsobj__GT_target.call(null,target);
if(cljs.core.truth_(temp__5457__auto__)){
var t = temp__5457__auto__;
var temp__5457__auto____$1 = (function (){var pred__8987 = cljs.core._EQ_;
var expr__8988 = type;
if(cljs.core.truth_(pred__8987.call(null,"const",expr__8988))){
return ((function (pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){
return p1;
});
;})(pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5))
} else {
if(cljs.core.truth_(pred__8987.call(null,"constAdd",expr__8988))){
return ((function (pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){
return (v + p1);
});
;})(pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5))
} else {
if(cljs.core.truth_(pred__8987.call(null,"linear",expr__8988))){
return ((function (pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){
var offset = (p2 - p1);
var adj = (p1 + (offset * life));
return ((0) + adj);
});
;})(pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5))
} else {
if(cljs.core.truth_(pred__8987.call(null,"linearAdd",expr__8988))){
return ((function (pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){
var offset = (p2 - p1);
var adj = (p1 + (offset * life));
return (v + adj);
});
;})(pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5))
} else {
if(cljs.core.truth_(pred__8987.call(null,"randStartAdd",expr__8988))){
return ((function (pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){
var adj = ((p1 * cljs.core.rand.call(null)) - (p1 / (2)));
if((life === (0))){
return (v + adj);
} else {
return v;
}
});
;})(pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5))
} else {
if(cljs.core.truth_(pred__8987.call(null,"custom",expr__8988))){
return ((function (pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5){
return (function (life,v){
if(cljs.core._EQ_.call(null,life,(0))){
return p1;
} else {
if((life < 0.25)){
return (p1 + ((p2 - p1) * (life / 0.25)));
} else {
if((life < 0.5)){
return (p2 + ((p3 - p2) * ((life - 0.25) / 0.25)));
} else {
if((life < 0.75)){
return (p3 + ((p4 - p3) * ((life - 0.5) / 0.25)));
} else {
if((life < (1))){
return (p4 + ((p5 - p4) * ((life - 0.75) / 0.25)));
} else {
return p5;

}
}
}
}
}
});
;})(pred__8987,expr__8988,t,temp__5457__auto__,target,type,p1,p2,p3,p4,p5))
} else {
return null;
}
}
}
}
}
}
})();
if(cljs.core.truth_(temp__5457__auto____$1)){
var f = temp__5457__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,f], null);
} else {
return null;
}
} else {
return null;
}
});
tool.particle.jsobj__GT_particle = (function tool$particle$jsobj__GT_particle(jsobj){
var obj = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8990){
var vec__8991 = p__8990;
var k = cljs.core.nth.call(null,vec__8991,(0),null);
var v = cljs.core.nth.call(null,vec__8991,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
}),cljs.core.js__GT_clj.call(null,jsobj)));
var formula = (cljs.core.truth_(new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))?cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689),cljs.core.reduce.call(null,((function (obj){
return (function (all,curr){
var temp__5455__auto__ = tool.particle.jsobj__GT_formula.call(null,curr);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return cljs.core.cons.call(null,f,all);
} else {
return all;
}
});})(obj))
,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689).cljs$core$IFn$_invoke$arity$1(obj))):obj);
var emit = (cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(formula))?cljs.core.update_in.call(null,formula,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emit","emit",-1327179018)], null),((function (obj,formula){
return (function (ori){
return cljs.core.update_in.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj,formula){
return (function (p__8994){
var vec__8995 = p__8994;
var k = cljs.core.nth.call(null,vec__8995,(0),null);
var v = cljs.core.nth.call(null,vec__8995,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
});})(obj,formula))
,ori)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005)], null),((function (obj,formula){
return (function (ps){
return cljs.core.mapv.call(null,tool.particle.jsobj__GT_particle,ps);
});})(obj,formula))
);
});})(obj,formula))
):formula);
return tool.particle.particle.call(null,emit);
});
tool.particle.updatePos = (function tool$particle$updatePos(p__9000,t){
var map__9001 = p__9000;
var map__9001__$1 = ((((!((map__9001 == null)))?(((((map__9001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9001):map__9001);
var particle = map__9001__$1;
var pos = cljs.core.get.call(null,map__9001__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var vel = cljs.core.get.call(null,map__9001__$1,new cljs.core.Keyword(null,"vel","vel",-110770822));
var fvel = cljs.core.get.call(null,map__9001__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));
var newpos = cljs.core.map.call(null,cljs.core._PLUS_,pos,cljs.core.map.call(null,((function (map__9001,map__9001__$1,particle,pos,vel,fvel){
return (function (p1__8998_SHARP_){
return (t * p1__8998_SHARP_);
});})(map__9001,map__9001__$1,particle,pos,vel,fvel))
,vel),cljs.core.map.call(null,((function (map__9001,map__9001__$1,particle,pos,vel,fvel){
return (function (p1__8999_SHARP_){
return (t * p1__8999_SHARP_);
});})(map__9001,map__9001__$1,particle,pos,vel,fvel))
,fvel));
return cljs.core.assoc_in.call(null,particle,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.apply.call(null,cljs.core.vector,newpos));
});
tool.particle.updateTimer = (function tool$particle$updateTimer(p__9003,t){
var map__9004 = p__9003;
var map__9004__$1 = ((((!((map__9004 == null)))?(((((map__9004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9004):map__9004);
var particle = map__9004__$1;
var timer = cljs.core.get.call(null,map__9004__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"timer","timer",-1266967739),(timer + t));
});
tool.particle.updateFormula = (function tool$particle$updateFormula(p__9006){
var map__9007 = p__9006;
var map__9007__$1 = ((((!((map__9007 == null)))?(((((map__9007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9007):map__9007);
var particle = map__9007__$1;
var formulaList = cljs.core.get.call(null,map__9007__$1,new cljs.core.Keyword(null,"formulaList","formulaList",1834616689));
if(!((formulaList == null))){
return cljs.core.reduce.call(null,((function (map__9007,map__9007__$1,particle,formulaList){
return (function (p__9009,p__9010){
var map__9011 = p__9009;
var map__9011__$1 = ((((!((map__9011 == null)))?(((((map__9011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9011):map__9011);
var particle__$1 = map__9011__$1;
var timer = cljs.core.get.call(null,map__9011__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var lifetime = cljs.core.get.call(null,map__9011__$1,new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561));
var vec__9012 = p__9010;
var target = cljs.core.nth.call(null,vec__9012,(0),null);
var formula = cljs.core.nth.call(null,vec__9012,(1),null);
return cljs.core.update_in.call(null,particle__$1,target,cljs.core.partial.call(null,formula,(timer / lifetime)));
});})(map__9007,map__9007__$1,particle,formulaList))
,particle,formulaList);
} else {
return particle;
}
});
tool.particle.forceIt = (function tool$particle$forceIt(p__9017,f){
var map__9018 = p__9017;
var map__9018__$1 = ((((!((map__9018 == null)))?(((((map__9018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9018):map__9018);
var particle = map__9018__$1;
var vel = cljs.core.get.call(null,map__9018__$1,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227));
var mass = cljs.core.get.call(null,map__9018__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var accel = cljs.core.map.call(null,((function (map__9018,map__9018__$1,particle,vel,mass){
return (function (p1__9016_SHARP_){
return (p1__9016_SHARP_ / mass);
});})(map__9018,map__9018__$1,particle,vel,mass))
,f);
return cljs.core.assoc.call(null,particle,new cljs.core.Keyword(null,"forceVel","forceVel",-826997227),cljs.core.map.call(null,cljs.core._PLUS_,vel,accel));
});
tool.particle.update = (function tool$particle$update(t,ctx){
var update_each = (function (p__9022){
var map__9023 = p__9022;
var map__9023__$1 = ((((!((map__9023 == null)))?(((((map__9023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9023):map__9023);
var ctx__$1 = map__9023__$1;
var ps = cljs.core.get.call(null,map__9023__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.map.call(null,((function (map__9023,map__9023__$1,ctx__$1,ps){
return (function (p1__9020_SHARP_){
return tool.particle.updateTimer.call(null,tool.particle.updatePos.call(null,tool.particle.updateFormula.call(null,p1__9020_SHARP_),t),t);
});})(map__9023,map__9023__$1,ctx__$1,ps))
,ps));
});
var update_emit = ((function (update_each){
return (function (p__9025){
var map__9026 = p__9025;
var map__9026__$1 = ((((!((map__9026 == null)))?(((((map__9026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9026):map__9026);
var ctx__$1 = map__9026__$1;
var ps = cljs.core.get.call(null,map__9026__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
return cljs.core.reduce.call(null,((function (map__9026,map__9026__$1,ctx__$1,ps,update_each){
return (function (ctx__$2,p__9028){
var map__9029 = p__9028;
var map__9029__$1 = ((((!((map__9029 == null)))?(((((map__9029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9029):map__9029);
var part = map__9029__$1;
var pos = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var timer = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"timer","timer",-1266967739));
var emit_times = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"emit-times","emit-times",793706865));
var map__9030 = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__9030__$1 = ((((!((map__9030 == null)))?(((((map__9030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9030):map__9030);
var emit = map__9030__$1;
var count = cljs.core.get.call(null,map__9030__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var duration = cljs.core.get.call(null,map__9030__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var angle = cljs.core.get.call(null,map__9030__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var range = cljs.core.get.call(null,map__9030__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var force = cljs.core.get.call(null,map__9030__$1,new cljs.core.Keyword(null,"force","force",781957286));
var prototype = cljs.core.get.call(null,map__9030__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));
if((emit == null)){
return cljs.core.update_in.call(null,ctx__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,part);
} else {
var should_times = ((timer / duration) | (0));
var emit_times_now = (count * (should_times - emit_times));
var emit_particle = ((function (should_times,emit_times_now,map__9029,map__9029__$1,part,pos,timer,emit_times,map__9030,map__9030__$1,emit,count,duration,angle,range,force,prototype,map__9026,map__9026__$1,ctx__$1,ps,update_each){
return (function (ctx__$3){
return cljs.core.reduce.call(null,((function (should_times,emit_times_now,map__9029,map__9029__$1,part,pos,timer,emit_times,map__9030,map__9030__$1,emit,count,duration,angle,range,force,prototype,map__9026,map__9026__$1,ctx__$1,ps,update_each){
return (function (ctx__$4,n){
var targetangle = (angle + (cljs.core.rand.call(null,range) - (range / (2))));
return cljs.core.reduce.call(null,((function (targetangle,should_times,emit_times_now,map__9029,map__9029__$1,part,pos,timer,emit_times,map__9030,map__9030__$1,emit,count,duration,angle,range,force,prototype,map__9026,map__9026__$1,ctx__$1,ps,update_each){
return (function (ctx__$5,proto){
return cljs.core.update_in.call(null,ctx__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,tool.particle.forceIt.call(null,tool.particle.particle.call(null,cljs.core.merge.call(null,proto,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(force * Math.cos(targetangle)),(force * Math.sin(targetangle)),(0)], null)));
});})(targetangle,should_times,emit_times_now,map__9029,map__9029__$1,part,pos,timer,emit_times,map__9030,map__9030__$1,emit,count,duration,angle,range,force,prototype,map__9026,map__9026__$1,ctx__$1,ps,update_each))
,ctx__$4,prototype);
});})(should_times,emit_times_now,map__9029,map__9029__$1,part,pos,timer,emit_times,map__9030,map__9030__$1,emit,count,duration,angle,range,force,prototype,map__9026,map__9026__$1,ctx__$1,ps,update_each))
,ctx__$3,cljs.core.range.call(null,emit_times_now));
});})(should_times,emit_times_now,map__9029,map__9029__$1,part,pos,timer,emit_times,map__9030,map__9030__$1,emit,count,duration,angle,range,force,prototype,map__9026,map__9026__$1,ctx__$1,ps,update_each))
;
return cljs.core.update_in.call(null,emit_particle.call(null,ctx__$2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ps","ps",292358046)], null),cljs.core.conj,cljs.core.assoc.call(null,part,new cljs.core.Keyword(null,"emit-times","emit-times",793706865),should_times));
}
});})(map__9026,map__9026__$1,ctx__$1,ps,update_each))
,cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.PersistentVector.EMPTY),ps);
});})(update_each))
;
var update_remove = ((function (update_each,update_emit){
return (function (p__9033){
var map__9034 = p__9033;
var map__9034__$1 = ((((!((map__9034 == null)))?(((((map__9034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9034):map__9034);
var ctx__$1 = map__9034__$1;
var ps = cljs.core.get.call(null,map__9034__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var remove_self = cljs.core.remove.call(null,((function (map__9034,map__9034__$1,ctx__$1,ps,update_each,update_emit){
return (function (p1__9021_SHARP_){
return (((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__9021_SHARP_) > (0))) && ((new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p1__9021_SHARP_) > new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p1__9021_SHARP_))));
});})(map__9034,map__9034__$1,ctx__$1,ps,update_each,update_emit))
,ps);
return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),remove_self);
});})(update_each,update_emit))
;
var update_remove_limit = ((function (update_each,update_emit,update_remove){
return (function (p__9036){
var map__9037 = p__9036;
var map__9037__$1 = ((((!((map__9037 == null)))?(((((map__9037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9037):map__9037);
var ctx__$1 = map__9037__$1;
var ps = cljs.core.get.call(null,map__9037__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var limit = cljs.core.get.call(null,map__9037__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
if((((limit > (0))) && ((cljs.core.count.call(null,ps) > limit)))){
return cljs.core.assoc.call(null,ctx__$1,new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.drop_last.call(null,(cljs.core.count.call(null,ps) - limit),cljs.core.sort_by.call(null,((function (map__9037,map__9037__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove){
return (function (p){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit","emit",-1327179018).cljs$core$IFn$_invoke$arity$1(p))){
return (0);
} else {
if((new cljs.core.Keyword(null,"lifetime","lifetime",-1568939561).cljs$core$IFn$_invoke$arity$1(p) === (0))){
return (0);
} else {
return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(p);
}
}
});})(map__9037,map__9037__$1,ctx__$1,ps,limit,update_each,update_emit,update_remove))
,ps)));
} else {
return ctx__$1;
}
});})(update_each,update_emit,update_remove))
;
return update_remove_limit.call(null,update_remove.call(null,update_each.call(null,update_emit.call(null,ctx))));
});

//# sourceMappingURL=particle.js.map
