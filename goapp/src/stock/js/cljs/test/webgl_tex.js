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
test.webgl_tex.loadImage = (function loadImage(url){var onload = cljs.core.async.chan.call(null);var img = (new Image());var G__15146_15161 = img;(G__15146_15161["src"] = url);
(G__15146_15161["onload"] = ((function (G__15146_15161,onload,img){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__15146_15161,onload,img){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__15146_15161,onload,img){
return (function (state_15151){var state_val_15152 = (state_15151[(1)]);if((state_val_15152 === (2)))
{var inst_15148 = (state_15151[(2)]);var inst_15149 = cljs.core.async.close_BANG_.call(null,onload);var state_15151__$1 = (function (){var statearr_15153 = state_15151;(statearr_15153[(7)] = inst_15148);
return statearr_15153;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15151__$1,inst_15149);
} else
{if((state_val_15152 === (1)))
{var state_15151__$1 = state_15151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15151__$1,(2),onload,img);
} else
{return null;
}
}
});})(c__6203__auto__,G__15146_15161,onload,img))
;return ((function (switch__6188__auto__,c__6203__auto__,G__15146_15161,onload,img){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15157 = [null,null,null,null,null,null,null,null];(statearr_15157[(0)] = state_machine__6189__auto__);
(statearr_15157[(1)] = (1));
return statearr_15157;
});
var state_machine__6189__auto____1 = (function (state_15151){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15151);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15158){if((e15158 instanceof Object))
{var ex__6192__auto__ = e15158;var statearr_15159_15162 = state_15151;(statearr_15159_15162[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15151);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15163 = state_15151;
state_15151 = G__15163;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15151){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__15146_15161,onload,img))
})();var state__6205__auto__ = (function (){var statearr_15160 = f__6204__auto__.call(null);(statearr_15160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__15146_15161,onload,img))
);
return c__6203__auto__;
});})(G__15146_15161,onload,img))
);
return onload;
});
/**
* 畫一張貼圖, 使用spriteProgramObject矯正成2D座標
*/
test.webgl_tex.test_tex = (function test_tex(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_15222){var state_val_15223 = (state_15222[(1)]);if((state_val_15223 === (2)))
{var inst_15203 = (state_15222[(2)]);var inst_15204 = document.getElementById("webgl");var inst_15205 = gl.util.getContext.call(null,inst_15204,null);var inst_15206 = gl.texture.texture.call(null,inst_15205,inst_15203);var inst_15207 = gl.mesh.plain_2d.call(null,inst_15205);var inst_15208 = gl.shader.spriteProgramObject.call(null,inst_15205);var inst_15209 = inst_15204.width;var inst_15210 = inst_15204.height;var inst_15211 = [inst_15209,inst_15210];var inst_15212 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15211,null));var inst_15213 = cljs.core.nth.call(null,inst_15212,(0),null);var inst_15214 = cljs.core.nth.call(null,inst_15212,(1),null);var inst_15215 = inst_15205.viewport((0),(0),inst_15213,inst_15214);var inst_15216 = inst_15205.clearColor((0),(0),(0),(1));var inst_15217 = inst_15205.COLOR_BUFFER_BIT;var inst_15218 = inst_15205.clear(inst_15217);var inst_15219 = (function (){var ch = inst_15214;var cw = inst_15213;var vec__15200 = inst_15212;var sprite_shader = inst_15208;var mesh = inst_15207;var tex = inst_15206;var gl__$1 = inst_15205;var canvas = inst_15204;var img = inst_15203;return ((function (ch,cw,vec__15200,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_15203,inst_15204,inst_15205,inst_15206,inst_15207,inst_15208,inst_15209,inst_15210,inst_15211,inst_15212,inst_15213,inst_15214,inst_15215,inst_15216,inst_15217,inst_15218,state_val_15223,c__6203__auto__){
return (function (pobj){var x = (0);var y = (0);var rot = (0);var xs = (300);var ys = (300);var r = (0);var g = (0);var b = (0);var proj = (function (){var G__15224 = (new THREE.Matrix4());G__15224.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__15224;
})();var tras = (function (){var G__15225 = (new THREE.Matrix4());G__15225.makeTranslation(x,y,(0));
G__15225.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__15225.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__15225;
})();var texTx = (function (){var G__15226 = (new THREE.Matrix3());return G__15226;
})();var colorTx = (function (){var G__15227 = (new THREE.Matrix4());G__15227.makeTranslation(r,g,b);
return G__15227;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
return null;
});
;})(ch,cw,vec__15200,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_15203,inst_15204,inst_15205,inst_15206,inst_15207,inst_15208,inst_15209,inst_15210,inst_15211,inst_15212,inst_15213,inst_15214,inst_15215,inst_15216,inst_15217,inst_15218,state_val_15223,c__6203__auto__))
})();var inst_15220 = gl.shader.use.call(null,inst_15205,inst_15208,inst_15219);var state_15222__$1 = (function (){var statearr_15228 = state_15222;(statearr_15228[(7)] = inst_15216);
(statearr_15228[(8)] = inst_15215);
(statearr_15228[(9)] = inst_15218);
return statearr_15228;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15222__$1,inst_15220);
} else
{if((state_val_15223 === (1)))
{var inst_15201 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_15222__$1 = state_15222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15222__$1,(2),inst_15201);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15232 = [null,null,null,null,null,null,null,null,null,null];(statearr_15232[(0)] = state_machine__6189__auto__);
(statearr_15232[(1)] = (1));
return statearr_15232;
});
var state_machine__6189__auto____1 = (function (state_15222){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15233){if((e15233 instanceof Object))
{var ex__6192__auto__ = e15233;var statearr_15234_15236 = state_15222;(statearr_15234_15236[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15237 = state_15222;
state_15222 = G__15237;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15222){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15235 = f__6204__auto__.call(null);(statearr_15235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
/**
* 水紋效果，沒有矯正座標系，可以看到材質貼圖為上下相反的
*/
test.webgl_tex.test_wave = (function test_wave(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_15334){var state_val_15335 = (state_15334[(1)]);if((state_val_15335 === (2)))
{var inst_15300 = (state_15334[(2)]);var inst_15301 = document.getElementById("webgl2");var inst_15302 = gl.util.getContext.call(null,inst_15301,null);var inst_15303 = gl.texture.texture.call(null,inst_15302,inst_15300);var inst_15304 = gl.mesh.plain.call(null,inst_15302);var inst_15305 = gl.shader.waveProgramObject.call(null,inst_15302);var inst_15306 = inst_15301.width;var inst_15307 = inst_15301.height;var inst_15308 = [inst_15306,inst_15307];var inst_15309 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15308,null));var inst_15310 = cljs.core.nth.call(null,inst_15309,(0),null);var inst_15311 = cljs.core.nth.call(null,inst_15309,(1),null);var inst_15330 = cljs.core.async.chan.call(null,(1));var inst_15331 = (function (){var wave_shader = inst_15305;var cw = inst_15310;var img = inst_15300;var tex = inst_15303;var c__6203__auto____$1 = inst_15330;var ch = inst_15311;var canvas = inst_15301;var mesh = inst_15304;var vec__15297 = inst_15309;var gl__$1 = inst_15302;return ((function (wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__){
return (function (state_15328){var state_val_15329 = (state_15328[(1)]);if((state_val_15329 === (4)))
{var inst_15312 = (state_15328[(7)]);var inst_15322 = (state_15328[(2)]);var inst_15323 = (inst_15312 + 0.03);var inst_15312__$1 = inst_15323;var state_15328__$1 = (function (){var statearr_15336 = state_15328;(statearr_15336[(7)] = inst_15312__$1);
(statearr_15336[(8)] = inst_15322);
return statearr_15336;
})();var statearr_15337_15356 = state_15328__$1;(statearr_15337_15356[(2)] = null);
(statearr_15337_15356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15329 === (3)))
{var inst_15326 = (state_15328[(2)]);var state_15328__$1 = state_15328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15328__$1,inst_15326);
} else
{if((state_val_15329 === (2)))
{var inst_15312 = (state_15328[(7)]);var inst_15314 = gl__$1.viewport((0),(0),cw,ch);var inst_15315 = gl__$1.clearColor((0),(0),(0),(1));var inst_15316 = gl__$1.COLOR_BUFFER_BIT;var inst_15317 = gl__$1.clear(inst_15316);var inst_15318 = (function (){var phase = inst_15312;return ((function (phase,inst_15312,inst_15314,inst_15315,inst_15316,inst_15317,state_val_15329,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),"2f",[0.5,0.5]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),"1f",phase], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(phase,inst_15312,inst_15314,inst_15315,inst_15316,inst_15317,state_val_15329,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__))
})();var inst_15319 = gl.shader.use.call(null,gl__$1,wave_shader,inst_15318);var inst_15320 = cljs.core.async.timeout.call(null,(33));var state_15328__$1 = (function (){var statearr_15338 = state_15328;(statearr_15338[(9)] = inst_15315);
(statearr_15338[(10)] = inst_15319);
(statearr_15338[(11)] = inst_15317);
(statearr_15338[(12)] = inst_15314);
return statearr_15338;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15328__$1,(4),inst_15320);
} else
{if((state_val_15329 === (1)))
{var inst_15312 = (0);var state_15328__$1 = (function (){var statearr_15339 = state_15328;(statearr_15339[(7)] = inst_15312);
return statearr_15339;
})();var statearr_15340_15357 = state_15328__$1;(statearr_15340_15357[(2)] = null);
(statearr_15340_15357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__))
;return ((function (switch__6188__auto__,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15344 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15344[(0)] = state_machine__6189__auto__);
(statearr_15344[(1)] = (1));
return statearr_15344;
});
var state_machine__6189__auto____1 = (function (state_15328){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15345){if((e15345 instanceof Object))
{var ex__6192__auto__ = e15345;var statearr_15346_15358 = state_15328;(statearr_15346_15358[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15359 = state_15328;
state_15328 = G__15359;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15328){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15347 = f__6204__auto__.call(null);(statearr_15347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_15347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,mesh,vec__15297,gl__$1,inst_15300,inst_15301,inst_15302,inst_15303,inst_15304,inst_15305,inst_15306,inst_15307,inst_15308,inst_15309,inst_15310,inst_15311,inst_15330,state_val_15335,c__6203__auto__))
})();var inst_15332 = cljs.core.async.impl.dispatch.run.call(null,inst_15331);var state_15334__$1 = (function (){var statearr_15348 = state_15334;(statearr_15348[(7)] = inst_15332);
return statearr_15348;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15334__$1,null);
} else
{if((state_val_15335 === (1)))
{var inst_15298 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_15334__$1 = state_15334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15334__$1,(2),inst_15298);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15352 = [null,null,null,null,null,null,null,null];(statearr_15352[(0)] = state_machine__6189__auto__);
(statearr_15352[(1)] = (1));
return statearr_15352;
});
var state_machine__6189__auto____1 = (function (state_15334){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15334);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15353){if((e15353 instanceof Object))
{var ex__6192__auto__ = e15353;var statearr_15354_15360 = state_15334;(statearr_15354_15360[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15334);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15361 = state_15334;
state_15334 = G__15361;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15334){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15355 = f__6204__auto__.call(null);(statearr_15355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.webgl_tex.test_online_shader = (function test_online_shader(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_15462){var state_val_15463 = (state_15462[(1)]);if((state_val_15463 === (1)))
{var inst_15424 = document.getElementById("webgl3");var inst_15425 = gl.util.getContext.call(null,inst_15424,null);var inst_15426 = gl.mesh.plain.call(null,inst_15425);var inst_15427 = [new cljs.core.Keyword(null,"position","position",-2011731912)];var inst_15428 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15427,null));var inst_15429 = [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)];var inst_15430 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15429,null));var inst_15431 = gl.util.domContent.call(null,"vertexShader");var inst_15432 = gl.util.domContent.call(null,"fragmentShader");var inst_15433 = gl.shader.programObject.call(null,inst_15425,inst_15428,inst_15430,inst_15431,inst_15432);var inst_15434 = inst_15424.width;var inst_15435 = inst_15424.height;var inst_15436 = [inst_15434,inst_15435];var inst_15437 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15436,null));var inst_15438 = cljs.core.nth.call(null,inst_15437,(0),null);var inst_15439 = cljs.core.nth.call(null,inst_15437,(1),null);var inst_15458 = cljs.core.async.chan.call(null,(1));var inst_15459 = (function (){var c__6203__auto____$1 = inst_15458;var ch = inst_15439;var cw = inst_15438;var vec__15423 = inst_15437;var spec_shader = inst_15433;var mesh = inst_15426;var gl__$1 = inst_15425;var canvas = inst_15424;return ((function (c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__){
return (function (state_15456){var state_val_15457 = (state_15456[(1)]);if((state_val_15457 === (4)))
{var inst_15440 = (state_15456[(7)]);var inst_15450 = (state_15456[(2)]);var inst_15451 = (inst_15440 + 0.03);var inst_15440__$1 = inst_15451;var state_15456__$1 = (function (){var statearr_15464 = state_15456;(statearr_15464[(8)] = inst_15450);
(statearr_15464[(7)] = inst_15440__$1);
return statearr_15464;
})();var statearr_15465_15484 = state_15456__$1;(statearr_15465_15484[(2)] = null);
(statearr_15465_15484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15457 === (3)))
{var inst_15454 = (state_15456[(2)]);var state_15456__$1 = state_15456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15456__$1,inst_15454);
} else
{if((state_val_15457 === (2)))
{var inst_15440 = (state_15456[(7)]);var inst_15442 = gl__$1.viewport((0),(0),cw,ch);var inst_15443 = gl__$1.clearColor((0),(0),(0),(1));var inst_15444 = gl__$1.COLOR_BUFFER_BIT;var inst_15445 = gl__$1.clear(inst_15444);var inst_15446 = (function (){var timer = inst_15440;return ((function (timer,inst_15440,inst_15442,inst_15443,inst_15444,inst_15445,state_val_15457,c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(timer,inst_15440,inst_15442,inst_15443,inst_15444,inst_15445,state_val_15457,c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__))
})();var inst_15447 = gl.shader.use.call(null,gl__$1,spec_shader,inst_15446);var inst_15448 = cljs.core.async.timeout.call(null,(33));var state_15456__$1 = (function (){var statearr_15466 = state_15456;(statearr_15466[(9)] = inst_15442);
(statearr_15466[(10)] = inst_15445);
(statearr_15466[(11)] = inst_15447);
(statearr_15466[(12)] = inst_15443);
return statearr_15466;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15456__$1,(4),inst_15448);
} else
{if((state_val_15457 === (1)))
{var inst_15440 = (0);var state_15456__$1 = (function (){var statearr_15467 = state_15456;(statearr_15467[(7)] = inst_15440);
return statearr_15467;
})();var statearr_15468_15485 = state_15456__$1;(statearr_15468_15485[(2)] = null);
(statearr_15468_15485[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15472 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15472[(0)] = state_machine__6189__auto__);
(statearr_15472[(1)] = (1));
return statearr_15472;
});
var state_machine__6189__auto____1 = (function (state_15456){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15456);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15473){if((e15473 instanceof Object))
{var ex__6192__auto__ = e15473;var statearr_15474_15486 = state_15456;(statearr_15474_15486[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15487 = state_15456;
state_15456 = G__15487;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15456){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15475 = f__6204__auto__.call(null);(statearr_15475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_15475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(c__6203__auto____$1,ch,cw,vec__15423,spec_shader,mesh,gl__$1,canvas,inst_15424,inst_15425,inst_15426,inst_15427,inst_15428,inst_15429,inst_15430,inst_15431,inst_15432,inst_15433,inst_15434,inst_15435,inst_15436,inst_15437,inst_15438,inst_15439,inst_15458,state_val_15463,c__6203__auto__))
})();var inst_15460 = cljs.core.async.impl.dispatch.run.call(null,inst_15459);var state_15462__$1 = (function (){var statearr_15476 = state_15462;(statearr_15476[(7)] = inst_15460);
return statearr_15476;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15462__$1,null);
} else
{return null;
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15480 = [null,null,null,null,null,null,null,null];(statearr_15480[(0)] = state_machine__6189__auto__);
(statearr_15480[(1)] = (1));
return statearr_15480;
});
var state_machine__6189__auto____1 = (function (state_15462){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15462);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15481){if((e15481 instanceof Object))
{var ex__6192__auto__ = e15481;var statearr_15482_15488 = state_15462;(statearr_15482_15488[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15462);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15489 = state_15462;
state_15462 = G__15489;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15462){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_15483 = f__6204__auto__.call(null);(statearr_15483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_15483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.webgl_tex.test_tex.call(null);
test.webgl_tex.test_wave.call(null);
test.webgl_tex.test_online_shader.call(null);
