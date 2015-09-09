// Compiled by ClojureScript 0.0-2268
goog.provide('test.webgl_tex');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.shader');
goog.require('gl.util');
goog.require('gl.shader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('gl.texture');
goog.require('gl.texture');
goog.require('gl.mesh');
goog.require('gl.mesh');
goog.require('gl.util');
test.webgl_tex.loadImage = (function loadImage(url){var onload = cljs.core.async.chan.call(null);var img = (new Image());var G__39242_39257 = img;(G__39242_39257["src"] = url);
(G__39242_39257["onload"] = ((function (G__39242_39257,onload,img){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,G__39242_39257,onload,img){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,G__39242_39257,onload,img){
return (function (state_39247){var state_val_39248 = (state_39247[(1)]);if((state_val_39248 === (2)))
{var inst_39244 = (state_39247[(2)]);var inst_39245 = cljs.core.async.close_BANG_.call(null,onload);var state_39247__$1 = (function (){var statearr_39249 = state_39247;(statearr_39249[(7)] = inst_39244);
return statearr_39249;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39247__$1,inst_39245);
} else
{if((state_val_39248 === (1)))
{var state_39247__$1 = state_39247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39247__$1,(2),onload,img);
} else
{return null;
}
}
});})(c__6202__auto__,G__39242_39257,onload,img))
;return ((function (switch__6187__auto__,c__6202__auto__,G__39242_39257,onload,img){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39253 = [null,null,null,null,null,null,null,null];(statearr_39253[(0)] = state_machine__6188__auto__);
(statearr_39253[(1)] = (1));
return statearr_39253;
});
var state_machine__6188__auto____1 = (function (state_39247){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39254){if((e39254 instanceof Object))
{var ex__6191__auto__ = e39254;var statearr_39255_39258 = state_39247;(statearr_39255_39258[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39259 = state_39247;
state_39247 = G__39259;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39247){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,G__39242_39257,onload,img))
})();var state__6204__auto__ = (function (){var statearr_39256 = f__6203__auto__.call(null);(statearr_39256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,G__39242_39257,onload,img))
);
return c__6202__auto__;
});})(G__39242_39257,onload,img))
);
return onload;
});
/**
* 畫一張貼圖, 使用spriteProgramObject矯正成2D座標
*/
test.webgl_tex.test_tex = (function test_tex(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_39318){var state_val_39319 = (state_39318[(1)]);if((state_val_39319 === (2)))
{var inst_39299 = (state_39318[(2)]);var inst_39300 = document.getElementById("webgl");var inst_39301 = gl.util.getContext.call(null,inst_39300,null);var inst_39302 = gl.texture.texture.call(null,inst_39301,inst_39299);var inst_39303 = gl.mesh.plain_2d.call(null,inst_39301);var inst_39304 = gl.shader.spriteProgramObject.call(null,inst_39301);var inst_39305 = inst_39300.width;var inst_39306 = inst_39300.height;var inst_39307 = [inst_39305,inst_39306];var inst_39308 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39307,null));var inst_39309 = cljs.core.nth.call(null,inst_39308,(0),null);var inst_39310 = cljs.core.nth.call(null,inst_39308,(1),null);var inst_39311 = inst_39301.viewport((0),(0),inst_39309,inst_39310);var inst_39312 = inst_39301.clearColor((0),(0),(0),(1));var inst_39313 = inst_39301.COLOR_BUFFER_BIT;var inst_39314 = inst_39301.clear(inst_39313);var inst_39315 = (function (){var ch = inst_39310;var cw = inst_39309;var vec__39296 = inst_39308;var sprite_shader = inst_39304;var mesh = inst_39303;var tex = inst_39302;var gl__$1 = inst_39301;var canvas = inst_39300;var img = inst_39299;return ((function (ch,cw,vec__39296,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_39299,inst_39300,inst_39301,inst_39302,inst_39303,inst_39304,inst_39305,inst_39306,inst_39307,inst_39308,inst_39309,inst_39310,inst_39311,inst_39312,inst_39313,inst_39314,state_val_39319,c__6202__auto__){
return (function (pobj){var x = (0);var y = (0);var rot = (0);var xs = (300);var ys = (300);var r = (0);var g = (0);var b = (0);var proj = (function (){var G__39320 = (new THREE.Matrix4());G__39320.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__39320;
})();var tras = (function (){var G__39321 = (new THREE.Matrix4());G__39321.makeTranslation(x,y,(0));
G__39321.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__39321.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__39321;
})();var texTx = (function (){var G__39322 = (new THREE.Matrix3());return G__39322;
})();var colorTx = (function (){var G__39323 = (new THREE.Matrix4());G__39323.makeTranslation(r,g,b);
return G__39323;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
return null;
});
;})(ch,cw,vec__39296,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_39299,inst_39300,inst_39301,inst_39302,inst_39303,inst_39304,inst_39305,inst_39306,inst_39307,inst_39308,inst_39309,inst_39310,inst_39311,inst_39312,inst_39313,inst_39314,state_val_39319,c__6202__auto__))
})();var inst_39316 = gl.shader.use.call(null,inst_39301,inst_39304,inst_39315);var state_39318__$1 = (function (){var statearr_39324 = state_39318;(statearr_39324[(7)] = inst_39314);
(statearr_39324[(8)] = inst_39312);
(statearr_39324[(9)] = inst_39311);
return statearr_39324;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39318__$1,inst_39316);
} else
{if((state_val_39319 === (1)))
{var inst_39297 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_39318__$1 = state_39318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39318__$1,(2),inst_39297);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39328 = [null,null,null,null,null,null,null,null,null,null];(statearr_39328[(0)] = state_machine__6188__auto__);
(statearr_39328[(1)] = (1));
return statearr_39328;
});
var state_machine__6188__auto____1 = (function (state_39318){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39318);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39329){if((e39329 instanceof Object))
{var ex__6191__auto__ = e39329;var statearr_39330_39332 = state_39318;(statearr_39330_39332[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39333 = state_39318;
state_39318 = G__39333;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39318){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39331 = f__6203__auto__.call(null);(statearr_39331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* 水紋效果，沒有矯正座標系，可以看到材質貼圖為上下相反的
*/
test.webgl_tex.test_wave = (function test_wave(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_39430){var state_val_39431 = (state_39430[(1)]);if((state_val_39431 === (2)))
{var inst_39396 = (state_39430[(2)]);var inst_39397 = document.getElementById("webgl2");var inst_39398 = gl.util.getContext.call(null,inst_39397,null);var inst_39399 = gl.texture.texture.call(null,inst_39398,inst_39396);var inst_39400 = gl.mesh.plain.call(null,inst_39398);var inst_39401 = gl.shader.waveProgramObject.call(null,inst_39398);var inst_39402 = inst_39397.width;var inst_39403 = inst_39397.height;var inst_39404 = [inst_39402,inst_39403];var inst_39405 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39404,null));var inst_39406 = cljs.core.nth.call(null,inst_39405,(0),null);var inst_39407 = cljs.core.nth.call(null,inst_39405,(1),null);var inst_39426 = cljs.core.async.chan.call(null,(1));var inst_39427 = (function (){var wave_shader = inst_39401;var cw = inst_39406;var img = inst_39396;var tex = inst_39399;var ch = inst_39407;var canvas = inst_39397;var c__6202__auto____$1 = inst_39426;var mesh = inst_39400;var gl__$1 = inst_39398;var vec__39393 = inst_39405;return ((function (wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__){
return (function (state_39424){var state_val_39425 = (state_39424[(1)]);if((state_val_39425 === (4)))
{var inst_39408 = (state_39424[(7)]);var inst_39418 = (state_39424[(2)]);var inst_39419 = (inst_39408 + 0.03);var inst_39408__$1 = inst_39419;var state_39424__$1 = (function (){var statearr_39432 = state_39424;(statearr_39432[(7)] = inst_39408__$1);
(statearr_39432[(8)] = inst_39418);
return statearr_39432;
})();var statearr_39433_39452 = state_39424__$1;(statearr_39433_39452[(2)] = null);
(statearr_39433_39452[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39425 === (3)))
{var inst_39422 = (state_39424[(2)]);var state_39424__$1 = state_39424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39424__$1,inst_39422);
} else
{if((state_val_39425 === (2)))
{var inst_39408 = (state_39424[(7)]);var inst_39410 = gl__$1.viewport((0),(0),cw,ch);var inst_39411 = gl__$1.clearColor((0),(0),(0),(1));var inst_39412 = gl__$1.COLOR_BUFFER_BIT;var inst_39413 = gl__$1.clear(inst_39412);var inst_39414 = (function (){var phase = inst_39408;return ((function (phase,inst_39408,inst_39410,inst_39411,inst_39412,inst_39413,state_val_39425,wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),"2f",[0.5,0.5]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),"1f",phase], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(phase,inst_39408,inst_39410,inst_39411,inst_39412,inst_39413,state_val_39425,wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__))
})();var inst_39415 = gl.shader.use.call(null,gl__$1,wave_shader,inst_39414);var inst_39416 = cljs.core.async.timeout.call(null,(33));var state_39424__$1 = (function (){var statearr_39434 = state_39424;(statearr_39434[(9)] = inst_39415);
(statearr_39434[(10)] = inst_39410);
(statearr_39434[(11)] = inst_39411);
(statearr_39434[(12)] = inst_39413);
return statearr_39434;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39424__$1,(4),inst_39416);
} else
{if((state_val_39425 === (1)))
{var inst_39408 = (0);var state_39424__$1 = (function (){var statearr_39435 = state_39424;(statearr_39435[(7)] = inst_39408);
return statearr_39435;
})();var statearr_39436_39453 = state_39424__$1;(statearr_39436_39453[(2)] = null);
(statearr_39436_39453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__))
;return ((function (switch__6187__auto__,wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39440 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39440[(0)] = state_machine__6188__auto__);
(statearr_39440[(1)] = (1));
return statearr_39440;
});
var state_machine__6188__auto____1 = (function (state_39424){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39424);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39441){if((e39441 instanceof Object))
{var ex__6191__auto__ = e39441;var statearr_39442_39454 = state_39424;(statearr_39442_39454[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39455 = state_39424;
state_39424 = G__39455;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39424){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39443 = f__6203__auto__.call(null);(statearr_39443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_39443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(wave_shader,cw,img,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,vec__39393,inst_39396,inst_39397,inst_39398,inst_39399,inst_39400,inst_39401,inst_39402,inst_39403,inst_39404,inst_39405,inst_39406,inst_39407,inst_39426,state_val_39431,c__6202__auto__))
})();var inst_39428 = cljs.core.async.impl.dispatch.run.call(null,inst_39427);var state_39430__$1 = (function (){var statearr_39444 = state_39430;(statearr_39444[(7)] = inst_39428);
return statearr_39444;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39430__$1,null);
} else
{if((state_val_39431 === (1)))
{var inst_39394 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_39430__$1 = state_39430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39430__$1,(2),inst_39394);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39448 = [null,null,null,null,null,null,null,null];(statearr_39448[(0)] = state_machine__6188__auto__);
(statearr_39448[(1)] = (1));
return statearr_39448;
});
var state_machine__6188__auto____1 = (function (state_39430){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39449){if((e39449 instanceof Object))
{var ex__6191__auto__ = e39449;var statearr_39450_39456 = state_39430;(statearr_39450_39456[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39457 = state_39430;
state_39430 = G__39457;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39430){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39451 = f__6203__auto__.call(null);(statearr_39451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.webgl_tex.test_online_shader = (function test_online_shader(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_39558){var state_val_39559 = (state_39558[(1)]);if((state_val_39559 === (1)))
{var inst_39520 = document.getElementById("webgl3");var inst_39521 = gl.util.getContext.call(null,inst_39520,null);var inst_39522 = gl.mesh.plain.call(null,inst_39521);var inst_39523 = [new cljs.core.Keyword(null,"position","position",-2011731912)];var inst_39524 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39523,null));var inst_39525 = [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)];var inst_39526 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39525,null));var inst_39527 = gl.util.domContent.call(null,"vertexShader");var inst_39528 = gl.util.domContent.call(null,"fragmentShader");var inst_39529 = gl.shader.programObject.call(null,inst_39521,inst_39524,inst_39526,inst_39527,inst_39528);var inst_39530 = inst_39520.width;var inst_39531 = inst_39520.height;var inst_39532 = [inst_39530,inst_39531];var inst_39533 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_39532,null));var inst_39534 = cljs.core.nth.call(null,inst_39533,(0),null);var inst_39535 = cljs.core.nth.call(null,inst_39533,(1),null);var inst_39554 = cljs.core.async.chan.call(null,(1));var inst_39555 = (function (){var c__6202__auto____$1 = inst_39554;var ch = inst_39535;var cw = inst_39534;var vec__39519 = inst_39533;var spec_shader = inst_39529;var mesh = inst_39522;var gl__$1 = inst_39521;var canvas = inst_39520;return ((function (c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__){
return (function (state_39552){var state_val_39553 = (state_39552[(1)]);if((state_val_39553 === (4)))
{var inst_39536 = (state_39552[(7)]);var inst_39546 = (state_39552[(2)]);var inst_39547 = (inst_39536 + 0.03);var inst_39536__$1 = inst_39547;var state_39552__$1 = (function (){var statearr_39560 = state_39552;(statearr_39560[(8)] = inst_39546);
(statearr_39560[(7)] = inst_39536__$1);
return statearr_39560;
})();var statearr_39561_39580 = state_39552__$1;(statearr_39561_39580[(2)] = null);
(statearr_39561_39580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_39553 === (3)))
{var inst_39550 = (state_39552[(2)]);var state_39552__$1 = state_39552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39552__$1,inst_39550);
} else
{if((state_val_39553 === (2)))
{var inst_39536 = (state_39552[(7)]);var inst_39538 = gl__$1.viewport((0),(0),cw,ch);var inst_39539 = gl__$1.clearColor((0),(0),(0),(1));var inst_39540 = gl__$1.COLOR_BUFFER_BIT;var inst_39541 = gl__$1.clear(inst_39540);var inst_39542 = (function (){var timer = inst_39536;return ((function (timer,inst_39536,inst_39538,inst_39539,inst_39540,inst_39541,state_val_39553,c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(timer,inst_39536,inst_39538,inst_39539,inst_39540,inst_39541,state_val_39553,c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__))
})();var inst_39543 = gl.shader.use.call(null,gl__$1,spec_shader,inst_39542);var inst_39544 = cljs.core.async.timeout.call(null,(33));var state_39552__$1 = (function (){var statearr_39562 = state_39552;(statearr_39562[(9)] = inst_39543);
(statearr_39562[(10)] = inst_39541);
(statearr_39562[(11)] = inst_39539);
(statearr_39562[(12)] = inst_39538);
return statearr_39562;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39552__$1,(4),inst_39544);
} else
{if((state_val_39553 === (1)))
{var inst_39536 = (0);var state_39552__$1 = (function (){var statearr_39563 = state_39552;(statearr_39563[(7)] = inst_39536);
return statearr_39563;
})();var statearr_39564_39581 = state_39552__$1;(statearr_39564_39581[(2)] = null);
(statearr_39564_39581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39568 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39568[(0)] = state_machine__6188__auto__);
(statearr_39568[(1)] = (1));
return statearr_39568;
});
var state_machine__6188__auto____1 = (function (state_39552){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39552);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39569){if((e39569 instanceof Object))
{var ex__6191__auto__ = e39569;var statearr_39570_39582 = state_39552;(statearr_39570_39582[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39583 = state_39552;
state_39552 = G__39583;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39552){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39571 = f__6203__auto__.call(null);(statearr_39571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_39571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,ch,cw,vec__39519,spec_shader,mesh,gl__$1,canvas,inst_39520,inst_39521,inst_39522,inst_39523,inst_39524,inst_39525,inst_39526,inst_39527,inst_39528,inst_39529,inst_39530,inst_39531,inst_39532,inst_39533,inst_39534,inst_39535,inst_39554,state_val_39559,c__6202__auto__))
})();var inst_39556 = cljs.core.async.impl.dispatch.run.call(null,inst_39555);var state_39558__$1 = (function (){var statearr_39572 = state_39558;(statearr_39572[(7)] = inst_39556);
return statearr_39572;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39558__$1,null);
} else
{return null;
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_39576 = [null,null,null,null,null,null,null,null];(statearr_39576[(0)] = state_machine__6188__auto__);
(statearr_39576[(1)] = (1));
return statearr_39576;
});
var state_machine__6188__auto____1 = (function (state_39558){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_39558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e39577){if((e39577 instanceof Object))
{var ex__6191__auto__ = e39577;var statearr_39578_39584 = state_39558;(statearr_39578_39584[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e39577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__39585 = state_39558;
state_39558 = G__39585;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_39558){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_39558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_39579 = f__6203__auto__.call(null);(statearr_39579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_39579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.webgl_tex.test_tex.call(null);
test.webgl_tex.test_wave.call(null);
test.webgl_tex.test_online_shader.call(null);
