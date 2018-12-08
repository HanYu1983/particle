// Compiled by ClojureScript 1.10.238 {}
goog.provide('test.webgl_tex');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.util');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.shader');
test.webgl_tex.loadImage = (function test$webgl_tex$loadImage(url){
var onload = cljs.core.async.chan.call(null);
var img = (new Image());
var G__10956_10968 = img;
(G__10956_10968["src"] = url);

(G__10956_10968["onload"] = ((function (G__10956_10968,onload,img){
return (function (){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,G__10956_10968,onload,img){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,G__10956_10968,onload,img){
return (function (state_10961){
var state_val_10962 = (state_10961[(1)]);
if((state_val_10962 === (1))){
var state_10961__$1 = state_10961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10961__$1,(2),onload,img);
} else {
if((state_val_10962 === (2))){
var inst_10958 = (state_10961[(2)]);
var inst_10959 = cljs.core.async.close_BANG_.call(null,onload);
var state_10961__$1 = (function (){var statearr_10963 = state_10961;
(statearr_10963[(7)] = inst_10958);

return statearr_10963;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10961__$1,inst_10959);
} else {
return null;
}
}
});})(c__3261__auto__,G__10956_10968,onload,img))
;
return ((function (switch__3171__auto__,c__3261__auto__,G__10956_10968,onload,img){
return (function() {
var test$webgl_tex$loadImage_$_state_machine__3172__auto__ = null;
var test$webgl_tex$loadImage_$_state_machine__3172__auto____0 = (function (){
var statearr_10964 = [null,null,null,null,null,null,null,null];
(statearr_10964[(0)] = test$webgl_tex$loadImage_$_state_machine__3172__auto__);

(statearr_10964[(1)] = (1));

return statearr_10964;
});
var test$webgl_tex$loadImage_$_state_machine__3172__auto____1 = (function (state_10961){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10965){if((e10965 instanceof Object)){
var ex__3175__auto__ = e10965;
var statearr_10966_10969 = state_10961;
(statearr_10966_10969[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10970 = state_10961;
state_10961 = G__10970;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$webgl_tex$loadImage_$_state_machine__3172__auto__ = function(state_10961){
switch(arguments.length){
case 0:
return test$webgl_tex$loadImage_$_state_machine__3172__auto____0.call(this);
case 1:
return test$webgl_tex$loadImage_$_state_machine__3172__auto____1.call(this,state_10961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$loadImage_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$loadImage_$_state_machine__3172__auto____0;
test$webgl_tex$loadImage_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$loadImage_$_state_machine__3172__auto____1;
return test$webgl_tex$loadImage_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,G__10956_10968,onload,img))
})();
var state__3263__auto__ = (function (){var statearr_10967 = f__3262__auto__.call(null);
(statearr_10967[(6)] = c__3261__auto__);

return statearr_10967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,G__10956_10968,onload,img))
);

return c__3261__auto__;
});})(G__10956_10968,onload,img))
);


return onload;
});
/**
 * 畫一張貼圖, 使用spriteProgramObject矯正成2D座標
 */
test.webgl_tex.test_tex = (function test$webgl_tex$test_tex(){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_10996){
var state_val_10997 = (state_10996[(1)]);
if((state_val_10997 === (1))){
var inst_10974 = test.webgl_tex.loadImage.call(null,"/common/images/card/cardback_0.jpg");
var state_10996__$1 = state_10996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10996__$1,(2),inst_10974);
} else {
if((state_val_10997 === (2))){
var inst_10976 = (state_10996[(2)]);
var inst_10977 = document.getElementById("webgl");
var inst_10978 = gl.util.getContext.call(null,inst_10977,null);
var inst_10979 = gl.texture.texture.call(null,inst_10978,inst_10976);
var inst_10980 = gl.mesh.plain_2d.call(null,inst_10978);
var inst_10981 = gl.shader.spriteProgramObject.call(null,inst_10978);
var inst_10982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10983 = inst_10977.width;
var inst_10984 = inst_10977.height;
var inst_10985 = [inst_10983,inst_10984];
var inst_10986 = (new cljs.core.PersistentVector(null,2,(5),inst_10982,inst_10985,null));
var inst_10987 = cljs.core.nth.call(null,inst_10986,(0),null);
var inst_10988 = cljs.core.nth.call(null,inst_10986,(1),null);
var inst_10989 = inst_10978.viewport((0),(0),inst_10987,inst_10988);
var inst_10990 = inst_10978.clearColor((0),(0),(0),(1));
var inst_10991 = inst_10978.COLOR_BUFFER_BIT;
var inst_10992 = inst_10978.clear(inst_10991);
var inst_10993 = (function (){var img = inst_10976;
var canvas = inst_10977;
var gl__$1 = inst_10978;
var tex = inst_10979;
var mesh = inst_10980;
var sprite_shader = inst_10981;
var vec__10971 = inst_10986;
var cw = inst_10987;
var ch = inst_10988;
return ((function (img,canvas,gl__$1,tex,mesh,sprite_shader,vec__10971,cw,ch,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,state_val_10997,c__3261__auto__){
return (function (pobj){
var x = (0);
var y = (0);
var rot = (0);
var xs = (300);
var ys = (300);
var r = (0);
var g = (0);
var b = (0);
var proj = (function (){var G__10998 = (new THREE.Matrix4());
G__10998.makeOrthographic((0),cw,ch,(0),(1),(-1));

return G__10998;
})();
var tras = (function (){var G__10999 = (new THREE.Matrix4());
G__10999.makeTranslation(x,y,(0));

G__10999.multiply((new THREE.Matrix4()).makeRotationZ(rot));

G__10999.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));

return G__10999;
})();
var texTx = (function (){var G__11000 = (new THREE.Matrix3());
return G__11000;
})();
var colorTx = (function (){var G__11001 = (new THREE.Matrix4());
G__11001.makeTranslation(r,g,b);

return G__11001;
})();
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));

gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));

gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));

gl.mesh.draw.call(null,gl__$1,mesh,null);

return null;
});
;})(img,canvas,gl__$1,tex,mesh,sprite_shader,vec__10971,cw,ch,inst_10976,inst_10977,inst_10978,inst_10979,inst_10980,inst_10981,inst_10982,inst_10983,inst_10984,inst_10985,inst_10986,inst_10987,inst_10988,inst_10989,inst_10990,inst_10991,inst_10992,state_val_10997,c__3261__auto__))
})();
var inst_10994 = gl.shader.use.call(null,inst_10978,inst_10981,inst_10993);
var state_10996__$1 = (function (){var statearr_11002 = state_10996;
(statearr_11002[(7)] = inst_10992);

(statearr_11002[(8)] = inst_10989);

(statearr_11002[(9)] = inst_10990);

return statearr_11002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10996__$1,inst_10994);
} else {
return null;
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var test$webgl_tex$test_tex_$_state_machine__3172__auto__ = null;
var test$webgl_tex$test_tex_$_state_machine__3172__auto____0 = (function (){
var statearr_11003 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11003[(0)] = test$webgl_tex$test_tex_$_state_machine__3172__auto__);

(statearr_11003[(1)] = (1));

return statearr_11003;
});
var test$webgl_tex$test_tex_$_state_machine__3172__auto____1 = (function (state_10996){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11004){if((e11004 instanceof Object)){
var ex__3175__auto__ = e11004;
var statearr_11005_11007 = state_10996;
(statearr_11005_11007[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11008 = state_10996;
state_10996 = G__11008;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$webgl_tex$test_tex_$_state_machine__3172__auto__ = function(state_10996){
switch(arguments.length){
case 0:
return test$webgl_tex$test_tex_$_state_machine__3172__auto____0.call(this);
case 1:
return test$webgl_tex$test_tex_$_state_machine__3172__auto____1.call(this,state_10996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_tex_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_tex_$_state_machine__3172__auto____0;
test$webgl_tex$test_tex_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_tex_$_state_machine__3172__auto____1;
return test$webgl_tex$test_tex_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11006 = f__3262__auto__.call(null);
(statearr_11006[(6)] = c__3261__auto__);

return statearr_11006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
/**
 * 水紋效果，沒有矯正座標系，可以看到材質貼圖為上下相反的
 */
test.webgl_tex.test_wave = (function test$webgl_tex$test_wave(){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_11049){
var state_val_11050 = (state_11049[(1)]);
if((state_val_11050 === (1))){
var inst_11012 = test.webgl_tex.loadImage.call(null,"/common/images/card/cardback_0.jpg");
var state_11049__$1 = state_11049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11049__$1,(2),inst_11012);
} else {
if((state_val_11050 === (2))){
var inst_11014 = (state_11049[(2)]);
var inst_11015 = document.getElementById("webgl2");
var inst_11016 = gl.util.getContext.call(null,inst_11015,null);
var inst_11017 = gl.texture.texture.call(null,inst_11016,inst_11014);
var inst_11018 = gl.mesh.plain.call(null,inst_11016);
var inst_11019 = gl.shader.waveProgramObject.call(null,inst_11016);
var inst_11020 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11021 = inst_11015.width;
var inst_11022 = inst_11015.height;
var inst_11023 = [inst_11021,inst_11022];
var inst_11024 = (new cljs.core.PersistentVector(null,2,(5),inst_11020,inst_11023,null));
var inst_11025 = cljs.core.nth.call(null,inst_11024,(0),null);
var inst_11026 = cljs.core.nth.call(null,inst_11024,(1),null);
var inst_11045 = cljs.core.async.chan.call(null,(1));
var inst_11046 = (function (){var wave_shader = inst_11019;
var cw = inst_11025;
var img = inst_11014;
var vec__11009 = inst_11024;
var tex = inst_11017;
var c__3261__auto____$1 = inst_11045;
var ch = inst_11026;
var canvas = inst_11015;
var mesh = inst_11018;
var gl__$1 = inst_11016;
return ((function (wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__){
return (function (state_11043){
var state_val_11044 = (state_11043[(1)]);
if((state_val_11044 === (1))){
var inst_11027 = (0);
var state_11043__$1 = (function (){var statearr_11051 = state_11043;
(statearr_11051[(7)] = inst_11027);

return statearr_11051;
})();
var statearr_11052_11065 = state_11043__$1;
(statearr_11052_11065[(2)] = null);

(statearr_11052_11065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (2))){
var inst_11027 = (state_11043[(7)]);
var inst_11029 = gl__$1.viewport((0),(0),cw,ch);
var inst_11030 = gl__$1.clearColor((0),(0),(0),(1));
var inst_11031 = gl__$1.COLOR_BUFFER_BIT;
var inst_11032 = gl__$1.clear(inst_11031);
var inst_11033 = (function (){var phase = inst_11027;
return ((function (phase,inst_11027,inst_11029,inst_11030,inst_11031,inst_11032,state_val_11044,wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__){
return (function (pobj){
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));

gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null)));

gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),"2f",[0.5,0.5]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),"1f",phase], null));

return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(phase,inst_11027,inst_11029,inst_11030,inst_11031,inst_11032,state_val_11044,wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__))
})();
var inst_11034 = gl.shader.use.call(null,gl__$1,wave_shader,inst_11033);
var inst_11035 = cljs.core.async.timeout.call(null,(33));
var state_11043__$1 = (function (){var statearr_11053 = state_11043;
(statearr_11053[(8)] = inst_11032);

(statearr_11053[(9)] = inst_11034);

(statearr_11053[(10)] = inst_11029);

(statearr_11053[(11)] = inst_11030);

return statearr_11053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11043__$1,(4),inst_11035);
} else {
if((state_val_11044 === (3))){
var inst_11041 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11043__$1,inst_11041);
} else {
if((state_val_11044 === (4))){
var inst_11027 = (state_11043[(7)]);
var inst_11037 = (state_11043[(2)]);
var inst_11038 = (inst_11027 + 0.03);
var inst_11027__$1 = inst_11038;
var state_11043__$1 = (function (){var statearr_11054 = state_11043;
(statearr_11054[(7)] = inst_11027__$1);

(statearr_11054[(12)] = inst_11037);

return statearr_11054;
})();
var statearr_11055_11066 = state_11043__$1;
(statearr_11055_11066[(2)] = null);

(statearr_11055_11066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__))
;
return ((function (switch__3171__auto__,wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__){
return (function() {
var test$webgl_tex$test_wave_$_state_machine__3172__auto__ = null;
var test$webgl_tex$test_wave_$_state_machine__3172__auto____0 = (function (){
var statearr_11056 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11056[(0)] = test$webgl_tex$test_wave_$_state_machine__3172__auto__);

(statearr_11056[(1)] = (1));

return statearr_11056;
});
var test$webgl_tex$test_wave_$_state_machine__3172__auto____1 = (function (state_11043){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11057){if((e11057 instanceof Object)){
var ex__3175__auto__ = e11057;
var statearr_11058_11067 = state_11043;
(statearr_11058_11067[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11068 = state_11043;
state_11043 = G__11068;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$webgl_tex$test_wave_$_state_machine__3172__auto__ = function(state_11043){
switch(arguments.length){
case 0:
return test$webgl_tex$test_wave_$_state_machine__3172__auto____0.call(this);
case 1:
return test$webgl_tex$test_wave_$_state_machine__3172__auto____1.call(this,state_11043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_wave_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_wave_$_state_machine__3172__auto____0;
test$webgl_tex$test_wave_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_wave_$_state_machine__3172__auto____1;
return test$webgl_tex$test_wave_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11059 = f__3262__auto__.call(null);
(statearr_11059[(6)] = c__3261__auto____$1);

return statearr_11059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});
;})(wave_shader,cw,img,vec__11009,tex,c__3261__auto____$1,ch,canvas,mesh,gl__$1,inst_11014,inst_11015,inst_11016,inst_11017,inst_11018,inst_11019,inst_11020,inst_11021,inst_11022,inst_11023,inst_11024,inst_11025,inst_11026,inst_11045,state_val_11050,c__3261__auto__))
})();
var inst_11047 = cljs.core.async.impl.dispatch.run.call(null,inst_11046);
var state_11049__$1 = (function (){var statearr_11060 = state_11049;
(statearr_11060[(7)] = inst_11047);

return statearr_11060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11049__$1,null);
} else {
return null;
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var test$webgl_tex$test_wave_$_state_machine__3172__auto__ = null;
var test$webgl_tex$test_wave_$_state_machine__3172__auto____0 = (function (){
var statearr_11061 = [null,null,null,null,null,null,null,null];
(statearr_11061[(0)] = test$webgl_tex$test_wave_$_state_machine__3172__auto__);

(statearr_11061[(1)] = (1));

return statearr_11061;
});
var test$webgl_tex$test_wave_$_state_machine__3172__auto____1 = (function (state_11049){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11062){if((e11062 instanceof Object)){
var ex__3175__auto__ = e11062;
var statearr_11063_11069 = state_11049;
(statearr_11063_11069[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11070 = state_11049;
state_11049 = G__11070;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$webgl_tex$test_wave_$_state_machine__3172__auto__ = function(state_11049){
switch(arguments.length){
case 0:
return test$webgl_tex$test_wave_$_state_machine__3172__auto____0.call(this);
case 1:
return test$webgl_tex$test_wave_$_state_machine__3172__auto____1.call(this,state_11049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_wave_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_wave_$_state_machine__3172__auto____0;
test$webgl_tex$test_wave_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_wave_$_state_machine__3172__auto____1;
return test$webgl_tex$test_wave_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11064 = f__3262__auto__.call(null);
(statearr_11064[(6)] = c__3261__auto__);

return statearr_11064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
test.webgl_tex.test_online_shader = (function test$webgl_tex$test_online_shader(){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_11115){
var state_val_11116 = (state_11115[(1)]);
if((state_val_11116 === (1))){
var inst_11074 = document.getElementById("webgl3");
var inst_11075 = gl.util.getContext.call(null,inst_11074,null);
var inst_11076 = gl.mesh.plain.call(null,inst_11075);
var inst_11077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11078 = [new cljs.core.Keyword(null,"position","position",-2011731912)];
var inst_11079 = (new cljs.core.PersistentVector(null,1,(5),inst_11077,inst_11078,null));
var inst_11080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11081 = [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)];
var inst_11082 = (new cljs.core.PersistentVector(null,2,(5),inst_11080,inst_11081,null));
var inst_11083 = gl.util.domContent.call(null,"vertexShader");
var inst_11084 = gl.util.domContent.call(null,"fragmentShader");
var inst_11085 = gl.shader.programObject.call(null,inst_11075,inst_11079,inst_11082,inst_11083,inst_11084);
var inst_11086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11087 = inst_11074.width;
var inst_11088 = inst_11074.height;
var inst_11089 = [inst_11087,inst_11088];
var inst_11090 = (new cljs.core.PersistentVector(null,2,(5),inst_11086,inst_11089,null));
var inst_11091 = cljs.core.nth.call(null,inst_11090,(0),null);
var inst_11092 = cljs.core.nth.call(null,inst_11090,(1),null);
var inst_11111 = cljs.core.async.chan.call(null,(1));
var inst_11112 = (function (){var canvas = inst_11074;
var gl__$1 = inst_11075;
var mesh = inst_11076;
var spec_shader = inst_11085;
var vec__11071 = inst_11090;
var cw = inst_11091;
var ch = inst_11092;
var c__3261__auto____$1 = inst_11111;
return ((function (canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__){
return (function (state_11109){
var state_val_11110 = (state_11109[(1)]);
if((state_val_11110 === (1))){
var inst_11093 = (0);
var state_11109__$1 = (function (){var statearr_11117 = state_11109;
(statearr_11117[(7)] = inst_11093);

return statearr_11117;
})();
var statearr_11118_11131 = state_11109__$1;
(statearr_11118_11131[(2)] = null);

(statearr_11118_11131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11110 === (2))){
var inst_11093 = (state_11109[(7)]);
var inst_11095 = gl__$1.viewport((0),(0),cw,ch);
var inst_11096 = gl__$1.clearColor((0),(0),(0),(1));
var inst_11097 = gl__$1.COLOR_BUFFER_BIT;
var inst_11098 = gl__$1.clear(inst_11097);
var inst_11099 = (function (){var timer = inst_11093;
return ((function (timer,inst_11093,inst_11095,inst_11096,inst_11097,inst_11098,state_val_11110,canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__){
return (function (pobj){
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));

gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));

return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(timer,inst_11093,inst_11095,inst_11096,inst_11097,inst_11098,state_val_11110,canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__))
})();
var inst_11100 = gl.shader.use.call(null,gl__$1,spec_shader,inst_11099);
var inst_11101 = cljs.core.async.timeout.call(null,(33));
var state_11109__$1 = (function (){var statearr_11119 = state_11109;
(statearr_11119[(8)] = inst_11096);

(statearr_11119[(9)] = inst_11100);

(statearr_11119[(10)] = inst_11095);

(statearr_11119[(11)] = inst_11098);

return statearr_11119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11109__$1,(4),inst_11101);
} else {
if((state_val_11110 === (3))){
var inst_11107 = (state_11109[(2)]);
var state_11109__$1 = state_11109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11109__$1,inst_11107);
} else {
if((state_val_11110 === (4))){
var inst_11093 = (state_11109[(7)]);
var inst_11103 = (state_11109[(2)]);
var inst_11104 = (inst_11093 + 0.03);
var inst_11093__$1 = inst_11104;
var state_11109__$1 = (function (){var statearr_11120 = state_11109;
(statearr_11120[(12)] = inst_11103);

(statearr_11120[(7)] = inst_11093__$1);

return statearr_11120;
})();
var statearr_11121_11132 = state_11109__$1;
(statearr_11121_11132[(2)] = null);

(statearr_11121_11132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__))
;
return ((function (switch__3171__auto__,canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__){
return (function() {
var test$webgl_tex$test_online_shader_$_state_machine__3172__auto__ = null;
var test$webgl_tex$test_online_shader_$_state_machine__3172__auto____0 = (function (){
var statearr_11122 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11122[(0)] = test$webgl_tex$test_online_shader_$_state_machine__3172__auto__);

(statearr_11122[(1)] = (1));

return statearr_11122;
});
var test$webgl_tex$test_online_shader_$_state_machine__3172__auto____1 = (function (state_11109){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11123){if((e11123 instanceof Object)){
var ex__3175__auto__ = e11123;
var statearr_11124_11133 = state_11109;
(statearr_11124_11133[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11134 = state_11109;
state_11109 = G__11134;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$webgl_tex$test_online_shader_$_state_machine__3172__auto__ = function(state_11109){
switch(arguments.length){
case 0:
return test$webgl_tex$test_online_shader_$_state_machine__3172__auto____0.call(this);
case 1:
return test$webgl_tex$test_online_shader_$_state_machine__3172__auto____1.call(this,state_11109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_online_shader_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_online_shader_$_state_machine__3172__auto____0;
test$webgl_tex$test_online_shader_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_online_shader_$_state_machine__3172__auto____1;
return test$webgl_tex$test_online_shader_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11125 = f__3262__auto__.call(null);
(statearr_11125[(6)] = c__3261__auto____$1);

return statearr_11125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});
;})(canvas,gl__$1,mesh,spec_shader,vec__11071,cw,ch,c__3261__auto____$1,inst_11074,inst_11075,inst_11076,inst_11077,inst_11078,inst_11079,inst_11080,inst_11081,inst_11082,inst_11083,inst_11084,inst_11085,inst_11086,inst_11087,inst_11088,inst_11089,inst_11090,inst_11091,inst_11092,inst_11111,state_val_11116,c__3261__auto__))
})();
var inst_11113 = cljs.core.async.impl.dispatch.run.call(null,inst_11112);
var state_11115__$1 = (function (){var statearr_11126 = state_11115;
(statearr_11126[(7)] = inst_11113);

return statearr_11126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11115__$1,null);
} else {
return null;
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var test$webgl_tex$test_online_shader_$_state_machine__3172__auto__ = null;
var test$webgl_tex$test_online_shader_$_state_machine__3172__auto____0 = (function (){
var statearr_11127 = [null,null,null,null,null,null,null,null];
(statearr_11127[(0)] = test$webgl_tex$test_online_shader_$_state_machine__3172__auto__);

(statearr_11127[(1)] = (1));

return statearr_11127;
});
var test$webgl_tex$test_online_shader_$_state_machine__3172__auto____1 = (function (state_11115){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11128){if((e11128 instanceof Object)){
var ex__3175__auto__ = e11128;
var statearr_11129_11135 = state_11115;
(statearr_11129_11135[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11136 = state_11115;
state_11115 = G__11136;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$webgl_tex$test_online_shader_$_state_machine__3172__auto__ = function(state_11115){
switch(arguments.length){
case 0:
return test$webgl_tex$test_online_shader_$_state_machine__3172__auto____0.call(this);
case 1:
return test$webgl_tex$test_online_shader_$_state_machine__3172__auto____1.call(this,state_11115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_online_shader_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_online_shader_$_state_machine__3172__auto____0;
test$webgl_tex$test_online_shader_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_online_shader_$_state_machine__3172__auto____1;
return test$webgl_tex$test_online_shader_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_11130 = f__3262__auto__.call(null);
(statearr_11130[(6)] = c__3261__auto__);

return statearr_11130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
test.webgl_tex.test_tex.call(null);
test.webgl_tex.test_wave.call(null);
test.webgl_tex.test_online_shader.call(null);

//# sourceMappingURL=webgl_tex.js.map
