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
var G__6007_6019 = img;
(G__6007_6019["src"] = url);

(G__6007_6019["onload"] = ((function (G__6007_6019,onload,img){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,G__6007_6019,onload,img){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,G__6007_6019,onload,img){
return (function (state_6012){
var state_val_6013 = (state_6012[(1)]);
if((state_val_6013 === (1))){
var state_6012__$1 = state_6012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6012__$1,(2),onload,img);
} else {
if((state_val_6013 === (2))){
var inst_6009 = (state_6012[(2)]);
var inst_6010 = cljs.core.async.close_BANG_.call(null,onload);
var state_6012__$1 = (function (){var statearr_6014 = state_6012;
(statearr_6014[(7)] = inst_6009);

return statearr_6014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6012__$1,inst_6010);
} else {
return null;
}
}
});})(c__2882__auto__,G__6007_6019,onload,img))
;
return ((function (switch__2792__auto__,c__2882__auto__,G__6007_6019,onload,img){
return (function() {
var test$webgl_tex$loadImage_$_state_machine__2793__auto__ = null;
var test$webgl_tex$loadImage_$_state_machine__2793__auto____0 = (function (){
var statearr_6015 = [null,null,null,null,null,null,null,null];
(statearr_6015[(0)] = test$webgl_tex$loadImage_$_state_machine__2793__auto__);

(statearr_6015[(1)] = (1));

return statearr_6015;
});
var test$webgl_tex$loadImage_$_state_machine__2793__auto____1 = (function (state_6012){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6016){if((e6016 instanceof Object)){
var ex__2796__auto__ = e6016;
var statearr_6017_6020 = state_6012;
(statearr_6017_6020[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6021 = state_6012;
state_6012 = G__6021;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$webgl_tex$loadImage_$_state_machine__2793__auto__ = function(state_6012){
switch(arguments.length){
case 0:
return test$webgl_tex$loadImage_$_state_machine__2793__auto____0.call(this);
case 1:
return test$webgl_tex$loadImage_$_state_machine__2793__auto____1.call(this,state_6012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$loadImage_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$loadImage_$_state_machine__2793__auto____0;
test$webgl_tex$loadImage_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$loadImage_$_state_machine__2793__auto____1;
return test$webgl_tex$loadImage_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,G__6007_6019,onload,img))
})();
var state__2884__auto__ = (function (){var statearr_6018 = f__2883__auto__.call(null);
(statearr_6018[(6)] = c__2882__auto__);

return statearr_6018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,G__6007_6019,onload,img))
);

return c__2882__auto__;
});})(G__6007_6019,onload,img))
);


return onload;
});
/**
 * 畫一張貼圖, 使用spriteProgramObject矯正成2D座標
 */
test.webgl_tex.test_tex = (function test$webgl_tex$test_tex(){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6047){
var state_val_6048 = (state_6047[(1)]);
if((state_val_6048 === (1))){
var inst_6025 = test.webgl_tex.loadImage.call(null,"/common/images/card/cardback_0.jpg");
var state_6047__$1 = state_6047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6047__$1,(2),inst_6025);
} else {
if((state_val_6048 === (2))){
var inst_6027 = (state_6047[(2)]);
var inst_6028 = document.getElementById("webgl");
var inst_6029 = gl.util.getContext.call(null,inst_6028,null);
var inst_6030 = gl.texture.texture.call(null,inst_6029,inst_6027);
var inst_6031 = gl.mesh.plain_2d.call(null,inst_6029);
var inst_6032 = gl.shader.spriteProgramObject.call(null,inst_6029);
var inst_6033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6034 = inst_6028.width;
var inst_6035 = inst_6028.height;
var inst_6036 = [inst_6034,inst_6035];
var inst_6037 = (new cljs.core.PersistentVector(null,2,(5),inst_6033,inst_6036,null));
var inst_6038 = cljs.core.nth.call(null,inst_6037,(0),null);
var inst_6039 = cljs.core.nth.call(null,inst_6037,(1),null);
var inst_6040 = inst_6029.viewport((0),(0),inst_6038,inst_6039);
var inst_6041 = inst_6029.clearColor((0),(0),(0),(1));
var inst_6042 = inst_6029.COLOR_BUFFER_BIT;
var inst_6043 = inst_6029.clear(inst_6042);
var inst_6044 = (function (){var img = inst_6027;
var canvas = inst_6028;
var gl__$1 = inst_6029;
var tex = inst_6030;
var mesh = inst_6031;
var sprite_shader = inst_6032;
var vec__6022 = inst_6037;
var cw = inst_6038;
var ch = inst_6039;
return ((function (img,canvas,gl__$1,tex,mesh,sprite_shader,vec__6022,cw,ch,inst_6027,inst_6028,inst_6029,inst_6030,inst_6031,inst_6032,inst_6033,inst_6034,inst_6035,inst_6036,inst_6037,inst_6038,inst_6039,inst_6040,inst_6041,inst_6042,inst_6043,state_val_6048,c__2882__auto__){
return (function (pobj){
var x = (0);
var y = (0);
var rot = (0);
var xs = (300);
var ys = (300);
var r = (0);
var g = (0);
var b = (0);
var proj = (function (){var G__6049 = (new THREE.Matrix4());
G__6049.makeOrthographic((0),cw,ch,(0),(1),(-1));

return G__6049;
})();
var tras = (function (){var G__6050 = (new THREE.Matrix4());
G__6050.makeTranslation(x,y,(0));

G__6050.multiply((new THREE.Matrix4()).makeRotationZ(rot));

G__6050.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));

return G__6050;
})();
var texTx = (function (){var G__6051 = (new THREE.Matrix3());
return G__6051;
})();
var colorTx = (function (){var G__6052 = (new THREE.Matrix4());
G__6052.makeTranslation(r,g,b);

return G__6052;
})();
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));

gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));

gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));

gl.mesh.draw.call(null,gl__$1,mesh,null);

return null;
});
;})(img,canvas,gl__$1,tex,mesh,sprite_shader,vec__6022,cw,ch,inst_6027,inst_6028,inst_6029,inst_6030,inst_6031,inst_6032,inst_6033,inst_6034,inst_6035,inst_6036,inst_6037,inst_6038,inst_6039,inst_6040,inst_6041,inst_6042,inst_6043,state_val_6048,c__2882__auto__))
})();
var inst_6045 = gl.shader.use.call(null,inst_6029,inst_6032,inst_6044);
var state_6047__$1 = (function (){var statearr_6053 = state_6047;
(statearr_6053[(7)] = inst_6043);

(statearr_6053[(8)] = inst_6040);

(statearr_6053[(9)] = inst_6041);

return statearr_6053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6047__$1,inst_6045);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var test$webgl_tex$test_tex_$_state_machine__2793__auto__ = null;
var test$webgl_tex$test_tex_$_state_machine__2793__auto____0 = (function (){
var statearr_6054 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6054[(0)] = test$webgl_tex$test_tex_$_state_machine__2793__auto__);

(statearr_6054[(1)] = (1));

return statearr_6054;
});
var test$webgl_tex$test_tex_$_state_machine__2793__auto____1 = (function (state_6047){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6055){if((e6055 instanceof Object)){
var ex__2796__auto__ = e6055;
var statearr_6056_6058 = state_6047;
(statearr_6056_6058[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6059 = state_6047;
state_6047 = G__6059;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$webgl_tex$test_tex_$_state_machine__2793__auto__ = function(state_6047){
switch(arguments.length){
case 0:
return test$webgl_tex$test_tex_$_state_machine__2793__auto____0.call(this);
case 1:
return test$webgl_tex$test_tex_$_state_machine__2793__auto____1.call(this,state_6047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_tex_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_tex_$_state_machine__2793__auto____0;
test$webgl_tex$test_tex_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_tex_$_state_machine__2793__auto____1;
return test$webgl_tex$test_tex_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6057 = f__2883__auto__.call(null);
(statearr_6057[(6)] = c__2882__auto__);

return statearr_6057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
/**
 * 水紋效果，沒有矯正座標系，可以看到材質貼圖為上下相反的
 */
test.webgl_tex.test_wave = (function test$webgl_tex$test_wave(){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6100){
var state_val_6101 = (state_6100[(1)]);
if((state_val_6101 === (1))){
var inst_6063 = test.webgl_tex.loadImage.call(null,"/common/images/card/cardback_0.jpg");
var state_6100__$1 = state_6100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6100__$1,(2),inst_6063);
} else {
if((state_val_6101 === (2))){
var inst_6065 = (state_6100[(2)]);
var inst_6066 = document.getElementById("webgl2");
var inst_6067 = gl.util.getContext.call(null,inst_6066,null);
var inst_6068 = gl.texture.texture.call(null,inst_6067,inst_6065);
var inst_6069 = gl.mesh.plain.call(null,inst_6067);
var inst_6070 = gl.shader.waveProgramObject.call(null,inst_6067);
var inst_6071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6072 = inst_6066.width;
var inst_6073 = inst_6066.height;
var inst_6074 = [inst_6072,inst_6073];
var inst_6075 = (new cljs.core.PersistentVector(null,2,(5),inst_6071,inst_6074,null));
var inst_6076 = cljs.core.nth.call(null,inst_6075,(0),null);
var inst_6077 = cljs.core.nth.call(null,inst_6075,(1),null);
var inst_6096 = cljs.core.async.chan.call(null,(1));
var inst_6097 = (function (){var wave_shader = inst_6070;
var cw = inst_6076;
var vec__6060 = inst_6075;
var img = inst_6065;
var c__2882__auto____$1 = inst_6096;
var tex = inst_6068;
var ch = inst_6077;
var canvas = inst_6066;
var mesh = inst_6069;
var gl__$1 = inst_6067;
return ((function (wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__){
return (function (state_6094){
var state_val_6095 = (state_6094[(1)]);
if((state_val_6095 === (1))){
var inst_6078 = (0);
var state_6094__$1 = (function (){var statearr_6102 = state_6094;
(statearr_6102[(7)] = inst_6078);

return statearr_6102;
})();
var statearr_6103_6116 = state_6094__$1;
(statearr_6103_6116[(2)] = null);

(statearr_6103_6116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6095 === (2))){
var inst_6078 = (state_6094[(7)]);
var inst_6080 = gl__$1.viewport((0),(0),cw,ch);
var inst_6081 = gl__$1.clearColor((0),(0),(0),(1));
var inst_6082 = gl__$1.COLOR_BUFFER_BIT;
var inst_6083 = gl__$1.clear(inst_6082);
var inst_6084 = (function (){var phase = inst_6078;
return ((function (phase,inst_6078,inst_6080,inst_6081,inst_6082,inst_6083,state_val_6095,wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__){
return (function (pobj){
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));

gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null)));

gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),"2f",[0.5,0.5]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),"1f",phase], null));

return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(phase,inst_6078,inst_6080,inst_6081,inst_6082,inst_6083,state_val_6095,wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__))
})();
var inst_6085 = gl.shader.use.call(null,gl__$1,wave_shader,inst_6084);
var inst_6086 = cljs.core.async.timeout.call(null,(33));
var state_6094__$1 = (function (){var statearr_6104 = state_6094;
(statearr_6104[(8)] = inst_6080);

(statearr_6104[(9)] = inst_6085);

(statearr_6104[(10)] = inst_6081);

(statearr_6104[(11)] = inst_6083);

return statearr_6104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6094__$1,(4),inst_6086);
} else {
if((state_val_6095 === (3))){
var inst_6092 = (state_6094[(2)]);
var state_6094__$1 = state_6094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6094__$1,inst_6092);
} else {
if((state_val_6095 === (4))){
var inst_6078 = (state_6094[(7)]);
var inst_6088 = (state_6094[(2)]);
var inst_6089 = (inst_6078 + 0.03);
var inst_6078__$1 = inst_6089;
var state_6094__$1 = (function (){var statearr_6105 = state_6094;
(statearr_6105[(12)] = inst_6088);

(statearr_6105[(7)] = inst_6078__$1);

return statearr_6105;
})();
var statearr_6106_6117 = state_6094__$1;
(statearr_6106_6117[(2)] = null);

(statearr_6106_6117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__))
;
return ((function (switch__2792__auto__,wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__){
return (function() {
var test$webgl_tex$test_wave_$_state_machine__2793__auto__ = null;
var test$webgl_tex$test_wave_$_state_machine__2793__auto____0 = (function (){
var statearr_6107 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6107[(0)] = test$webgl_tex$test_wave_$_state_machine__2793__auto__);

(statearr_6107[(1)] = (1));

return statearr_6107;
});
var test$webgl_tex$test_wave_$_state_machine__2793__auto____1 = (function (state_6094){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6108){if((e6108 instanceof Object)){
var ex__2796__auto__ = e6108;
var statearr_6109_6118 = state_6094;
(statearr_6109_6118[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6119 = state_6094;
state_6094 = G__6119;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$webgl_tex$test_wave_$_state_machine__2793__auto__ = function(state_6094){
switch(arguments.length){
case 0:
return test$webgl_tex$test_wave_$_state_machine__2793__auto____0.call(this);
case 1:
return test$webgl_tex$test_wave_$_state_machine__2793__auto____1.call(this,state_6094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_wave_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_wave_$_state_machine__2793__auto____0;
test$webgl_tex$test_wave_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_wave_$_state_machine__2793__auto____1;
return test$webgl_tex$test_wave_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6110 = f__2883__auto__.call(null);
(statearr_6110[(6)] = c__2882__auto____$1);

return statearr_6110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});
;})(wave_shader,cw,vec__6060,img,c__2882__auto____$1,tex,ch,canvas,mesh,gl__$1,inst_6065,inst_6066,inst_6067,inst_6068,inst_6069,inst_6070,inst_6071,inst_6072,inst_6073,inst_6074,inst_6075,inst_6076,inst_6077,inst_6096,state_val_6101,c__2882__auto__))
})();
var inst_6098 = cljs.core.async.impl.dispatch.run.call(null,inst_6097);
var state_6100__$1 = (function (){var statearr_6111 = state_6100;
(statearr_6111[(7)] = inst_6098);

return statearr_6111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6100__$1,null);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var test$webgl_tex$test_wave_$_state_machine__2793__auto__ = null;
var test$webgl_tex$test_wave_$_state_machine__2793__auto____0 = (function (){
var statearr_6112 = [null,null,null,null,null,null,null,null];
(statearr_6112[(0)] = test$webgl_tex$test_wave_$_state_machine__2793__auto__);

(statearr_6112[(1)] = (1));

return statearr_6112;
});
var test$webgl_tex$test_wave_$_state_machine__2793__auto____1 = (function (state_6100){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6113){if((e6113 instanceof Object)){
var ex__2796__auto__ = e6113;
var statearr_6114_6120 = state_6100;
(statearr_6114_6120[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6121 = state_6100;
state_6100 = G__6121;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$webgl_tex$test_wave_$_state_machine__2793__auto__ = function(state_6100){
switch(arguments.length){
case 0:
return test$webgl_tex$test_wave_$_state_machine__2793__auto____0.call(this);
case 1:
return test$webgl_tex$test_wave_$_state_machine__2793__auto____1.call(this,state_6100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_wave_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_wave_$_state_machine__2793__auto____0;
test$webgl_tex$test_wave_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_wave_$_state_machine__2793__auto____1;
return test$webgl_tex$test_wave_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6115 = f__2883__auto__.call(null);
(statearr_6115[(6)] = c__2882__auto__);

return statearr_6115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
test.webgl_tex.test_online_shader = (function test$webgl_tex$test_online_shader(){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6166){
var state_val_6167 = (state_6166[(1)]);
if((state_val_6167 === (1))){
var inst_6125 = document.getElementById("webgl3");
var inst_6126 = gl.util.getContext.call(null,inst_6125,null);
var inst_6127 = gl.mesh.plain.call(null,inst_6126);
var inst_6128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6129 = [new cljs.core.Keyword(null,"position","position",-2011731912)];
var inst_6130 = (new cljs.core.PersistentVector(null,1,(5),inst_6128,inst_6129,null));
var inst_6131 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6132 = [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)];
var inst_6133 = (new cljs.core.PersistentVector(null,2,(5),inst_6131,inst_6132,null));
var inst_6134 = gl.util.domContent.call(null,"vertexShader");
var inst_6135 = gl.util.domContent.call(null,"fragmentShader");
var inst_6136 = gl.shader.programObject.call(null,inst_6126,inst_6130,inst_6133,inst_6134,inst_6135);
var inst_6137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6138 = inst_6125.width;
var inst_6139 = inst_6125.height;
var inst_6140 = [inst_6138,inst_6139];
var inst_6141 = (new cljs.core.PersistentVector(null,2,(5),inst_6137,inst_6140,null));
var inst_6142 = cljs.core.nth.call(null,inst_6141,(0),null);
var inst_6143 = cljs.core.nth.call(null,inst_6141,(1),null);
var inst_6162 = cljs.core.async.chan.call(null,(1));
var inst_6163 = (function (){var canvas = inst_6125;
var gl__$1 = inst_6126;
var mesh = inst_6127;
var spec_shader = inst_6136;
var vec__6122 = inst_6141;
var cw = inst_6142;
var ch = inst_6143;
var c__2882__auto____$1 = inst_6162;
return ((function (canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__){
return (function (state_6160){
var state_val_6161 = (state_6160[(1)]);
if((state_val_6161 === (1))){
var inst_6144 = (0);
var state_6160__$1 = (function (){var statearr_6168 = state_6160;
(statearr_6168[(7)] = inst_6144);

return statearr_6168;
})();
var statearr_6169_6182 = state_6160__$1;
(statearr_6169_6182[(2)] = null);

(statearr_6169_6182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6161 === (2))){
var inst_6144 = (state_6160[(7)]);
var inst_6146 = gl__$1.viewport((0),(0),cw,ch);
var inst_6147 = gl__$1.clearColor((0),(0),(0),(1));
var inst_6148 = gl__$1.COLOR_BUFFER_BIT;
var inst_6149 = gl__$1.clear(inst_6148);
var inst_6150 = (function (){var timer = inst_6144;
return ((function (timer,inst_6144,inst_6146,inst_6147,inst_6148,inst_6149,state_val_6161,canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__){
return (function (pobj){
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));

gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));

return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(timer,inst_6144,inst_6146,inst_6147,inst_6148,inst_6149,state_val_6161,canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__))
})();
var inst_6151 = gl.shader.use.call(null,gl__$1,spec_shader,inst_6150);
var inst_6152 = cljs.core.async.timeout.call(null,(33));
var state_6160__$1 = (function (){var statearr_6170 = state_6160;
(statearr_6170[(8)] = inst_6146);

(statearr_6170[(9)] = inst_6147);

(statearr_6170[(10)] = inst_6149);

(statearr_6170[(11)] = inst_6151);

return statearr_6170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6160__$1,(4),inst_6152);
} else {
if((state_val_6161 === (3))){
var inst_6158 = (state_6160[(2)]);
var state_6160__$1 = state_6160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6160__$1,inst_6158);
} else {
if((state_val_6161 === (4))){
var inst_6144 = (state_6160[(7)]);
var inst_6154 = (state_6160[(2)]);
var inst_6155 = (inst_6144 + 0.03);
var inst_6144__$1 = inst_6155;
var state_6160__$1 = (function (){var statearr_6171 = state_6160;
(statearr_6171[(7)] = inst_6144__$1);

(statearr_6171[(12)] = inst_6154);

return statearr_6171;
})();
var statearr_6172_6183 = state_6160__$1;
(statearr_6172_6183[(2)] = null);

(statearr_6172_6183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__))
;
return ((function (switch__2792__auto__,canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__){
return (function() {
var test$webgl_tex$test_online_shader_$_state_machine__2793__auto__ = null;
var test$webgl_tex$test_online_shader_$_state_machine__2793__auto____0 = (function (){
var statearr_6173 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6173[(0)] = test$webgl_tex$test_online_shader_$_state_machine__2793__auto__);

(statearr_6173[(1)] = (1));

return statearr_6173;
});
var test$webgl_tex$test_online_shader_$_state_machine__2793__auto____1 = (function (state_6160){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6174){if((e6174 instanceof Object)){
var ex__2796__auto__ = e6174;
var statearr_6175_6184 = state_6160;
(statearr_6175_6184[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6185 = state_6160;
state_6160 = G__6185;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$webgl_tex$test_online_shader_$_state_machine__2793__auto__ = function(state_6160){
switch(arguments.length){
case 0:
return test$webgl_tex$test_online_shader_$_state_machine__2793__auto____0.call(this);
case 1:
return test$webgl_tex$test_online_shader_$_state_machine__2793__auto____1.call(this,state_6160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_online_shader_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_online_shader_$_state_machine__2793__auto____0;
test$webgl_tex$test_online_shader_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_online_shader_$_state_machine__2793__auto____1;
return test$webgl_tex$test_online_shader_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6176 = f__2883__auto__.call(null);
(statearr_6176[(6)] = c__2882__auto____$1);

return statearr_6176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});
;})(canvas,gl__$1,mesh,spec_shader,vec__6122,cw,ch,c__2882__auto____$1,inst_6125,inst_6126,inst_6127,inst_6128,inst_6129,inst_6130,inst_6131,inst_6132,inst_6133,inst_6134,inst_6135,inst_6136,inst_6137,inst_6138,inst_6139,inst_6140,inst_6141,inst_6142,inst_6143,inst_6162,state_val_6167,c__2882__auto__))
})();
var inst_6164 = cljs.core.async.impl.dispatch.run.call(null,inst_6163);
var state_6166__$1 = (function (){var statearr_6177 = state_6166;
(statearr_6177[(7)] = inst_6164);

return statearr_6177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6166__$1,null);
} else {
return null;
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var test$webgl_tex$test_online_shader_$_state_machine__2793__auto__ = null;
var test$webgl_tex$test_online_shader_$_state_machine__2793__auto____0 = (function (){
var statearr_6178 = [null,null,null,null,null,null,null,null];
(statearr_6178[(0)] = test$webgl_tex$test_online_shader_$_state_machine__2793__auto__);

(statearr_6178[(1)] = (1));

return statearr_6178;
});
var test$webgl_tex$test_online_shader_$_state_machine__2793__auto____1 = (function (state_6166){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6179){if((e6179 instanceof Object)){
var ex__2796__auto__ = e6179;
var statearr_6180_6186 = state_6166;
(statearr_6180_6186[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6187 = state_6166;
state_6166 = G__6187;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$webgl_tex$test_online_shader_$_state_machine__2793__auto__ = function(state_6166){
switch(arguments.length){
case 0:
return test$webgl_tex$test_online_shader_$_state_machine__2793__auto____0.call(this);
case 1:
return test$webgl_tex$test_online_shader_$_state_machine__2793__auto____1.call(this,state_6166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$webgl_tex$test_online_shader_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$webgl_tex$test_online_shader_$_state_machine__2793__auto____0;
test$webgl_tex$test_online_shader_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$webgl_tex$test_online_shader_$_state_machine__2793__auto____1;
return test$webgl_tex$test_online_shader_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6181 = f__2883__auto__.call(null);
(statearr_6181[(6)] = c__2882__auto__);

return statearr_6181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
test.webgl_tex.test_tex.call(null);
test.webgl_tex.test_wave.call(null);
test.webgl_tex.test_online_shader.call(null);

//# sourceMappingURL=webgl_tex.js.map
