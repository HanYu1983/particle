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
test.webgl_tex.loadImage = (function loadImage(url){var onload = cljs.core.async.chan.call(null);var img = (new Image());var G__17128_17143 = img;(G__17128_17143["src"] = url);
(G__17128_17143["onload"] = ((function (G__17128_17143,onload,img){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__17128_17143,onload,img){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__17128_17143,onload,img){
return (function (state_17133){var state_val_17134 = (state_17133[(1)]);if((state_val_17134 === (2)))
{var inst_17130 = (state_17133[(2)]);var inst_17131 = cljs.core.async.close_BANG_.call(null,onload);var state_17133__$1 = (function (){var statearr_17135 = state_17133;(statearr_17135[(7)] = inst_17130);
return statearr_17135;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17133__$1,inst_17131);
} else
{if((state_val_17134 === (1)))
{var state_17133__$1 = state_17133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17133__$1,(2),onload,img);
} else
{return null;
}
}
});})(c__6203__auto__,G__17128_17143,onload,img))
;return ((function (switch__6188__auto__,c__6203__auto__,G__17128_17143,onload,img){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17139 = [null,null,null,null,null,null,null,null];(statearr_17139[(0)] = state_machine__6189__auto__);
(statearr_17139[(1)] = (1));
return statearr_17139;
});
var state_machine__6189__auto____1 = (function (state_17133){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17133);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17140){if((e17140 instanceof Object))
{var ex__6192__auto__ = e17140;var statearr_17141_17144 = state_17133;(statearr_17141_17144[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17140;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17145 = state_17133;
state_17133 = G__17145;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17133){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__17128_17143,onload,img))
})();var state__6205__auto__ = (function (){var statearr_17142 = f__6204__auto__.call(null);(statearr_17142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__17128_17143,onload,img))
);
return c__6203__auto__;
});})(G__17128_17143,onload,img))
);
return onload;
});
/**
* 畫一張貼圖, 使用spriteProgramObject矯正成2D座標
*/
test.webgl_tex.test_tex = (function test_tex(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_17204){var state_val_17205 = (state_17204[(1)]);if((state_val_17205 === (2)))
{var inst_17185 = (state_17204[(2)]);var inst_17186 = document.getElementById("webgl");var inst_17187 = gl.util.getContext.call(null,inst_17186,null);var inst_17188 = gl.texture.texture.call(null,inst_17187,inst_17185);var inst_17189 = gl.mesh.plain_2d.call(null,inst_17187);var inst_17190 = gl.shader.spriteProgramObject.call(null,inst_17187);var inst_17191 = inst_17186.width;var inst_17192 = inst_17186.height;var inst_17193 = [inst_17191,inst_17192];var inst_17194 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17193,null));var inst_17195 = cljs.core.nth.call(null,inst_17194,(0),null);var inst_17196 = cljs.core.nth.call(null,inst_17194,(1),null);var inst_17197 = inst_17187.viewport((0),(0),inst_17195,inst_17196);var inst_17198 = inst_17187.clearColor((0),(0),(0),(1));var inst_17199 = inst_17187.COLOR_BUFFER_BIT;var inst_17200 = inst_17187.clear(inst_17199);var inst_17201 = (function (){var ch = inst_17196;var cw = inst_17195;var vec__17182 = inst_17194;var sprite_shader = inst_17190;var mesh = inst_17189;var tex = inst_17188;var gl__$1 = inst_17187;var canvas = inst_17186;var img = inst_17185;return ((function (ch,cw,vec__17182,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_17185,inst_17186,inst_17187,inst_17188,inst_17189,inst_17190,inst_17191,inst_17192,inst_17193,inst_17194,inst_17195,inst_17196,inst_17197,inst_17198,inst_17199,inst_17200,state_val_17205,c__6203__auto__){
return (function (pobj){var x = (0);var y = (0);var rot = (0);var xs = (300);var ys = (300);var r = (0);var g = (0);var b = (0);var proj = (function (){var G__17206 = (new THREE.Matrix4());G__17206.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17206;
})();var tras = (function (){var G__17207 = (new THREE.Matrix4());G__17207.makeTranslation(x,y,(0));
G__17207.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17207.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17207;
})();var texTx = (function (){var G__17208 = (new THREE.Matrix3());return G__17208;
})();var colorTx = (function (){var G__17209 = (new THREE.Matrix4());G__17209.makeTranslation(r,g,b);
return G__17209;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
return null;
});
;})(ch,cw,vec__17182,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_17185,inst_17186,inst_17187,inst_17188,inst_17189,inst_17190,inst_17191,inst_17192,inst_17193,inst_17194,inst_17195,inst_17196,inst_17197,inst_17198,inst_17199,inst_17200,state_val_17205,c__6203__auto__))
})();var inst_17202 = gl.shader.use.call(null,inst_17187,inst_17190,inst_17201);var state_17204__$1 = (function (){var statearr_17210 = state_17204;(statearr_17210[(7)] = inst_17197);
(statearr_17210[(8)] = inst_17198);
(statearr_17210[(9)] = inst_17200);
return statearr_17210;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17204__$1,inst_17202);
} else
{if((state_val_17205 === (1)))
{var inst_17183 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_17204__$1 = state_17204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17204__$1,(2),inst_17183);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17214 = [null,null,null,null,null,null,null,null,null,null];(statearr_17214[(0)] = state_machine__6189__auto__);
(statearr_17214[(1)] = (1));
return statearr_17214;
});
var state_machine__6189__auto____1 = (function (state_17204){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17204);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17215){if((e17215 instanceof Object))
{var ex__6192__auto__ = e17215;var statearr_17216_17218 = state_17204;(statearr_17216_17218[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17204);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17219 = state_17204;
state_17204 = G__17219;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17204){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17217 = f__6204__auto__.call(null);(statearr_17217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17217;
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
return (function (state_17316){var state_val_17317 = (state_17316[(1)]);if((state_val_17317 === (2)))
{var inst_17282 = (state_17316[(2)]);var inst_17283 = document.getElementById("webgl2");var inst_17284 = gl.util.getContext.call(null,inst_17283,null);var inst_17285 = gl.texture.texture.call(null,inst_17284,inst_17282);var inst_17286 = gl.mesh.plain.call(null,inst_17284);var inst_17287 = gl.shader.waveProgramObject.call(null,inst_17284);var inst_17288 = inst_17283.width;var inst_17289 = inst_17283.height;var inst_17290 = [inst_17288,inst_17289];var inst_17291 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17290,null));var inst_17292 = cljs.core.nth.call(null,inst_17291,(0),null);var inst_17293 = cljs.core.nth.call(null,inst_17291,(1),null);var inst_17312 = cljs.core.async.chan.call(null,(1));var inst_17313 = (function (){var wave_shader = inst_17287;var cw = inst_17292;var img = inst_17282;var tex = inst_17285;var c__6203__auto____$1 = inst_17312;var ch = inst_17293;var canvas = inst_17283;var vec__17279 = inst_17291;var mesh = inst_17286;var gl__$1 = inst_17284;return ((function (wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__){
return (function (state_17310){var state_val_17311 = (state_17310[(1)]);if((state_val_17311 === (4)))
{var inst_17294 = (state_17310[(7)]);var inst_17304 = (state_17310[(2)]);var inst_17305 = (inst_17294 + 0.03);var inst_17294__$1 = inst_17305;var state_17310__$1 = (function (){var statearr_17318 = state_17310;(statearr_17318[(8)] = inst_17304);
(statearr_17318[(7)] = inst_17294__$1);
return statearr_17318;
})();var statearr_17319_17338 = state_17310__$1;(statearr_17319_17338[(2)] = null);
(statearr_17319_17338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17311 === (3)))
{var inst_17308 = (state_17310[(2)]);var state_17310__$1 = state_17310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17310__$1,inst_17308);
} else
{if((state_val_17311 === (2)))
{var inst_17294 = (state_17310[(7)]);var inst_17296 = gl__$1.viewport((0),(0),cw,ch);var inst_17297 = gl__$1.clearColor((0),(0),(0),(1));var inst_17298 = gl__$1.COLOR_BUFFER_BIT;var inst_17299 = gl__$1.clear(inst_17298);var inst_17300 = (function (){var phase = inst_17294;return ((function (phase,inst_17294,inst_17296,inst_17297,inst_17298,inst_17299,state_val_17311,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),"2f",[0.5,0.5]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),"1f",phase], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(phase,inst_17294,inst_17296,inst_17297,inst_17298,inst_17299,state_val_17311,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__))
})();var inst_17301 = gl.shader.use.call(null,gl__$1,wave_shader,inst_17300);var inst_17302 = cljs.core.async.timeout.call(null,(33));var state_17310__$1 = (function (){var statearr_17320 = state_17310;(statearr_17320[(9)] = inst_17296);
(statearr_17320[(10)] = inst_17297);
(statearr_17320[(11)] = inst_17301);
(statearr_17320[(12)] = inst_17299);
return statearr_17320;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17310__$1,(4),inst_17302);
} else
{if((state_val_17311 === (1)))
{var inst_17294 = (0);var state_17310__$1 = (function (){var statearr_17321 = state_17310;(statearr_17321[(7)] = inst_17294);
return statearr_17321;
})();var statearr_17322_17339 = state_17310__$1;(statearr_17322_17339[(2)] = null);
(statearr_17322_17339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__))
;return ((function (switch__6188__auto__,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17326 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17326[(0)] = state_machine__6189__auto__);
(statearr_17326[(1)] = (1));
return statearr_17326;
});
var state_machine__6189__auto____1 = (function (state_17310){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17327){if((e17327 instanceof Object))
{var ex__6192__auto__ = e17327;var statearr_17328_17340 = state_17310;(statearr_17328_17340[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17310);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17341 = state_17310;
state_17310 = G__17341;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17310){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17329 = f__6204__auto__.call(null);(statearr_17329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_17329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(wave_shader,cw,img,tex,c__6203__auto____$1,ch,canvas,vec__17279,mesh,gl__$1,inst_17282,inst_17283,inst_17284,inst_17285,inst_17286,inst_17287,inst_17288,inst_17289,inst_17290,inst_17291,inst_17292,inst_17293,inst_17312,state_val_17317,c__6203__auto__))
})();var inst_17314 = cljs.core.async.impl.dispatch.run.call(null,inst_17313);var state_17316__$1 = (function (){var statearr_17330 = state_17316;(statearr_17330[(7)] = inst_17314);
return statearr_17330;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17316__$1,null);
} else
{if((state_val_17317 === (1)))
{var inst_17280 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_17316__$1 = state_17316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17316__$1,(2),inst_17280);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17334 = [null,null,null,null,null,null,null,null];(statearr_17334[(0)] = state_machine__6189__auto__);
(statearr_17334[(1)] = (1));
return statearr_17334;
});
var state_machine__6189__auto____1 = (function (state_17316){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17316);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17335){if((e17335 instanceof Object))
{var ex__6192__auto__ = e17335;var statearr_17336_17342 = state_17316;(statearr_17336_17342[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17343 = state_17316;
state_17316 = G__17343;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17316){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17337 = f__6204__auto__.call(null);(statearr_17337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.webgl_tex.test_online_shader = (function test_online_shader(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_17444){var state_val_17445 = (state_17444[(1)]);if((state_val_17445 === (1)))
{var inst_17406 = document.getElementById("webgl3");var inst_17407 = gl.util.getContext.call(null,inst_17406,null);var inst_17408 = gl.mesh.plain.call(null,inst_17407);var inst_17409 = [new cljs.core.Keyword(null,"position","position",-2011731912)];var inst_17410 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17409,null));var inst_17411 = [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)];var inst_17412 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17411,null));var inst_17413 = gl.util.domContent.call(null,"vertexShader");var inst_17414 = gl.util.domContent.call(null,"fragmentShader");var inst_17415 = gl.shader.programObject.call(null,inst_17407,inst_17410,inst_17412,inst_17413,inst_17414);var inst_17416 = inst_17406.width;var inst_17417 = inst_17406.height;var inst_17418 = [inst_17416,inst_17417];var inst_17419 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17418,null));var inst_17420 = cljs.core.nth.call(null,inst_17419,(0),null);var inst_17421 = cljs.core.nth.call(null,inst_17419,(1),null);var inst_17440 = cljs.core.async.chan.call(null,(1));var inst_17441 = (function (){var c__6203__auto____$1 = inst_17440;var ch = inst_17421;var cw = inst_17420;var vec__17405 = inst_17419;var spec_shader = inst_17415;var mesh = inst_17408;var gl__$1 = inst_17407;var canvas = inst_17406;return ((function (c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__){
return (function (state_17438){var state_val_17439 = (state_17438[(1)]);if((state_val_17439 === (4)))
{var inst_17422 = (state_17438[(7)]);var inst_17432 = (state_17438[(2)]);var inst_17433 = (inst_17422 + 0.03);var inst_17422__$1 = inst_17433;var state_17438__$1 = (function (){var statearr_17446 = state_17438;(statearr_17446[(8)] = inst_17432);
(statearr_17446[(7)] = inst_17422__$1);
return statearr_17446;
})();var statearr_17447_17466 = state_17438__$1;(statearr_17447_17466[(2)] = null);
(statearr_17447_17466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17439 === (3)))
{var inst_17436 = (state_17438[(2)]);var state_17438__$1 = state_17438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17438__$1,inst_17436);
} else
{if((state_val_17439 === (2)))
{var inst_17422 = (state_17438[(7)]);var inst_17424 = gl__$1.viewport((0),(0),cw,ch);var inst_17425 = gl__$1.clearColor((0),(0),(0),(1));var inst_17426 = gl__$1.COLOR_BUFFER_BIT;var inst_17427 = gl__$1.clear(inst_17426);var inst_17428 = (function (){var timer = inst_17422;return ((function (timer,inst_17422,inst_17424,inst_17425,inst_17426,inst_17427,state_val_17439,c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(timer,inst_17422,inst_17424,inst_17425,inst_17426,inst_17427,state_val_17439,c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__))
})();var inst_17429 = gl.shader.use.call(null,gl__$1,spec_shader,inst_17428);var inst_17430 = cljs.core.async.timeout.call(null,(33));var state_17438__$1 = (function (){var statearr_17448 = state_17438;(statearr_17448[(9)] = inst_17424);
(statearr_17448[(10)] = inst_17427);
(statearr_17448[(11)] = inst_17429);
(statearr_17448[(12)] = inst_17425);
return statearr_17448;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17438__$1,(4),inst_17430);
} else
{if((state_val_17439 === (1)))
{var inst_17422 = (0);var state_17438__$1 = (function (){var statearr_17449 = state_17438;(statearr_17449[(7)] = inst_17422);
return statearr_17449;
})();var statearr_17450_17467 = state_17438__$1;(statearr_17450_17467[(2)] = null);
(statearr_17450_17467[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17454 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17454[(0)] = state_machine__6189__auto__);
(statearr_17454[(1)] = (1));
return statearr_17454;
});
var state_machine__6189__auto____1 = (function (state_17438){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17438);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17455){if((e17455 instanceof Object))
{var ex__6192__auto__ = e17455;var statearr_17456_17468 = state_17438;(statearr_17456_17468[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17438);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17469 = state_17438;
state_17438 = G__17469;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17438){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17457 = f__6204__auto__.call(null);(statearr_17457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_17457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(c__6203__auto____$1,ch,cw,vec__17405,spec_shader,mesh,gl__$1,canvas,inst_17406,inst_17407,inst_17408,inst_17409,inst_17410,inst_17411,inst_17412,inst_17413,inst_17414,inst_17415,inst_17416,inst_17417,inst_17418,inst_17419,inst_17420,inst_17421,inst_17440,state_val_17445,c__6203__auto__))
})();var inst_17442 = cljs.core.async.impl.dispatch.run.call(null,inst_17441);var state_17444__$1 = (function (){var statearr_17458 = state_17444;(statearr_17458[(7)] = inst_17442);
return statearr_17458;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17444__$1,null);
} else
{return null;
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17462 = [null,null,null,null,null,null,null,null];(statearr_17462[(0)] = state_machine__6189__auto__);
(statearr_17462[(1)] = (1));
return statearr_17462;
});
var state_machine__6189__auto____1 = (function (state_17444){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17444);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17463){if((e17463 instanceof Object))
{var ex__6192__auto__ = e17463;var statearr_17464_17470 = state_17444;(statearr_17464_17470[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17444);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17471 = state_17444;
state_17444 = G__17471;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17444){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17465 = f__6204__auto__.call(null);(statearr_17465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.webgl_tex.test_tex.call(null);
test.webgl_tex.test_wave.call(null);
test.webgl_tex.test_online_shader.call(null);
