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
test.webgl_tex.loadImage = (function loadImage(url){var onload = cljs.core.async.chan.call(null);var img = (new Image());var G__26541_26556 = img;(G__26541_26556["src"] = url);
(G__26541_26556["onload"] = ((function (G__26541_26556,onload,img){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,G__26541_26556,onload,img){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,G__26541_26556,onload,img){
return (function (state_26546){var state_val_26547 = (state_26546[(1)]);if((state_val_26547 === (2)))
{var inst_26543 = (state_26546[(2)]);var inst_26544 = cljs.core.async.close_BANG_.call(null,onload);var state_26546__$1 = (function (){var statearr_26548 = state_26546;(statearr_26548[(7)] = inst_26543);
return statearr_26548;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26546__$1,inst_26544);
} else
{if((state_val_26547 === (1)))
{var state_26546__$1 = state_26546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26546__$1,(2),onload,img);
} else
{return null;
}
}
});})(c__6202__auto__,G__26541_26556,onload,img))
;return ((function (switch__6187__auto__,c__6202__auto__,G__26541_26556,onload,img){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26552 = [null,null,null,null,null,null,null,null];(statearr_26552[(0)] = state_machine__6188__auto__);
(statearr_26552[(1)] = (1));
return statearr_26552;
});
var state_machine__6188__auto____1 = (function (state_26546){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26546);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26553){if((e26553 instanceof Object))
{var ex__6191__auto__ = e26553;var statearr_26554_26557 = state_26546;(statearr_26554_26557[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26558 = state_26546;
state_26546 = G__26558;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26546){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,G__26541_26556,onload,img))
})();var state__6204__auto__ = (function (){var statearr_26555 = f__6203__auto__.call(null);(statearr_26555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,G__26541_26556,onload,img))
);
return c__6202__auto__;
});})(G__26541_26556,onload,img))
);
return onload;
});
/**
* 畫一張貼圖, 使用spriteProgramObject矯正成2D座標
*/
test.webgl_tex.test_tex = (function test_tex(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26617){var state_val_26618 = (state_26617[(1)]);if((state_val_26618 === (2)))
{var inst_26598 = (state_26617[(2)]);var inst_26599 = document.getElementById("webgl");var inst_26600 = gl.util.getContext.call(null,inst_26599,null);var inst_26601 = gl.texture.texture.call(null,inst_26600,inst_26598);var inst_26602 = gl.mesh.plain_2d.call(null,inst_26600);var inst_26603 = gl.shader.spriteProgramObject.call(null,inst_26600);var inst_26604 = inst_26599.width;var inst_26605 = inst_26599.height;var inst_26606 = [inst_26604,inst_26605];var inst_26607 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26606,null));var inst_26608 = cljs.core.nth.call(null,inst_26607,(0),null);var inst_26609 = cljs.core.nth.call(null,inst_26607,(1),null);var inst_26610 = inst_26600.viewport((0),(0),inst_26608,inst_26609);var inst_26611 = inst_26600.clearColor((0),(0),(0),(1));var inst_26612 = inst_26600.COLOR_BUFFER_BIT;var inst_26613 = inst_26600.clear(inst_26612);var inst_26614 = (function (){var ch = inst_26609;var cw = inst_26608;var vec__26595 = inst_26607;var sprite_shader = inst_26603;var mesh = inst_26602;var tex = inst_26601;var gl__$1 = inst_26600;var canvas = inst_26599;var img = inst_26598;return ((function (ch,cw,vec__26595,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_26598,inst_26599,inst_26600,inst_26601,inst_26602,inst_26603,inst_26604,inst_26605,inst_26606,inst_26607,inst_26608,inst_26609,inst_26610,inst_26611,inst_26612,inst_26613,state_val_26618,c__6202__auto__){
return (function (pobj){var x = (0);var y = (0);var rot = (0);var xs = (300);var ys = (300);var r = (0);var g = (0);var b = (0);var proj = (function (){var G__26619 = (new THREE.Matrix4());G__26619.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__26619;
})();var tras = (function (){var G__26620 = (new THREE.Matrix4());G__26620.makeTranslation(x,y,(0));
G__26620.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__26620.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__26620;
})();var texTx = (function (){var G__26621 = (new THREE.Matrix3());return G__26621;
})();var colorTx = (function (){var G__26622 = (new THREE.Matrix4());G__26622.makeTranslation(r,g,b);
return G__26622;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
return null;
});
;})(ch,cw,vec__26595,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_26598,inst_26599,inst_26600,inst_26601,inst_26602,inst_26603,inst_26604,inst_26605,inst_26606,inst_26607,inst_26608,inst_26609,inst_26610,inst_26611,inst_26612,inst_26613,state_val_26618,c__6202__auto__))
})();var inst_26615 = gl.shader.use.call(null,inst_26600,inst_26603,inst_26614);var state_26617__$1 = (function (){var statearr_26623 = state_26617;(statearr_26623[(7)] = inst_26613);
(statearr_26623[(8)] = inst_26611);
(statearr_26623[(9)] = inst_26610);
return statearr_26623;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26617__$1,inst_26615);
} else
{if((state_val_26618 === (1)))
{var inst_26596 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_26617__$1 = state_26617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26617__$1,(2),inst_26596);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26627 = [null,null,null,null,null,null,null,null,null,null];(statearr_26627[(0)] = state_machine__6188__auto__);
(statearr_26627[(1)] = (1));
return statearr_26627;
});
var state_machine__6188__auto____1 = (function (state_26617){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26617);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26628){if((e26628 instanceof Object))
{var ex__6191__auto__ = e26628;var statearr_26629_26631 = state_26617;(statearr_26629_26631[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26632 = state_26617;
state_26617 = G__26632;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26617){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26630 = f__6203__auto__.call(null);(statearr_26630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26630;
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
return (function (state_26729){var state_val_26730 = (state_26729[(1)]);if((state_val_26730 === (2)))
{var inst_26695 = (state_26729[(2)]);var inst_26696 = document.getElementById("webgl2");var inst_26697 = gl.util.getContext.call(null,inst_26696,null);var inst_26698 = gl.texture.texture.call(null,inst_26697,inst_26695);var inst_26699 = gl.mesh.plain.call(null,inst_26697);var inst_26700 = gl.shader.waveProgramObject.call(null,inst_26697);var inst_26701 = inst_26696.width;var inst_26702 = inst_26696.height;var inst_26703 = [inst_26701,inst_26702];var inst_26704 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26703,null));var inst_26705 = cljs.core.nth.call(null,inst_26704,(0),null);var inst_26706 = cljs.core.nth.call(null,inst_26704,(1),null);var inst_26725 = cljs.core.async.chan.call(null,(1));var inst_26726 = (function (){var wave_shader = inst_26700;var cw = inst_26705;var img = inst_26695;var vec__26692 = inst_26704;var tex = inst_26698;var ch = inst_26706;var canvas = inst_26696;var c__6202__auto____$1 = inst_26725;var mesh = inst_26699;var gl__$1 = inst_26697;return ((function (wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__){
return (function (state_26723){var state_val_26724 = (state_26723[(1)]);if((state_val_26724 === (4)))
{var inst_26707 = (state_26723[(7)]);var inst_26717 = (state_26723[(2)]);var inst_26718 = (inst_26707 + 0.03);var inst_26707__$1 = inst_26718;var state_26723__$1 = (function (){var statearr_26731 = state_26723;(statearr_26731[(8)] = inst_26717);
(statearr_26731[(7)] = inst_26707__$1);
return statearr_26731;
})();var statearr_26732_26751 = state_26723__$1;(statearr_26732_26751[(2)] = null);
(statearr_26732_26751[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26724 === (3)))
{var inst_26721 = (state_26723[(2)]);var state_26723__$1 = state_26723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26723__$1,inst_26721);
} else
{if((state_val_26724 === (2)))
{var inst_26707 = (state_26723[(7)]);var inst_26709 = gl__$1.viewport((0),(0),cw,ch);var inst_26710 = gl__$1.clearColor((0),(0),(0),(1));var inst_26711 = gl__$1.COLOR_BUFFER_BIT;var inst_26712 = gl__$1.clear(inst_26711);var inst_26713 = (function (){var phase = inst_26707;return ((function (phase,inst_26707,inst_26709,inst_26710,inst_26711,inst_26712,state_val_26724,wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),"2f",[0.5,0.5]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),"1f",phase], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(phase,inst_26707,inst_26709,inst_26710,inst_26711,inst_26712,state_val_26724,wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__))
})();var inst_26714 = gl.shader.use.call(null,gl__$1,wave_shader,inst_26713);var inst_26715 = cljs.core.async.timeout.call(null,(33));var state_26723__$1 = (function (){var statearr_26733 = state_26723;(statearr_26733[(9)] = inst_26712);
(statearr_26733[(10)] = inst_26714);
(statearr_26733[(11)] = inst_26710);
(statearr_26733[(12)] = inst_26709);
return statearr_26733;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26723__$1,(4),inst_26715);
} else
{if((state_val_26724 === (1)))
{var inst_26707 = (0);var state_26723__$1 = (function (){var statearr_26734 = state_26723;(statearr_26734[(7)] = inst_26707);
return statearr_26734;
})();var statearr_26735_26752 = state_26723__$1;(statearr_26735_26752[(2)] = null);
(statearr_26735_26752[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__))
;return ((function (switch__6187__auto__,wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26739 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26739[(0)] = state_machine__6188__auto__);
(statearr_26739[(1)] = (1));
return statearr_26739;
});
var state_machine__6188__auto____1 = (function (state_26723){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26740){if((e26740 instanceof Object))
{var ex__6191__auto__ = e26740;var statearr_26741_26753 = state_26723;(statearr_26741_26753[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26754 = state_26723;
state_26723 = G__26754;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26723){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26742 = f__6203__auto__.call(null);(statearr_26742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_26742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(wave_shader,cw,img,vec__26692,tex,ch,canvas,c__6202__auto____$1,mesh,gl__$1,inst_26695,inst_26696,inst_26697,inst_26698,inst_26699,inst_26700,inst_26701,inst_26702,inst_26703,inst_26704,inst_26705,inst_26706,inst_26725,state_val_26730,c__6202__auto__))
})();var inst_26727 = cljs.core.async.impl.dispatch.run.call(null,inst_26726);var state_26729__$1 = (function (){var statearr_26743 = state_26729;(statearr_26743[(7)] = inst_26727);
return statearr_26743;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26729__$1,null);
} else
{if((state_val_26730 === (1)))
{var inst_26693 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_26729__$1 = state_26729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26729__$1,(2),inst_26693);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26747 = [null,null,null,null,null,null,null,null];(statearr_26747[(0)] = state_machine__6188__auto__);
(statearr_26747[(1)] = (1));
return statearr_26747;
});
var state_machine__6188__auto____1 = (function (state_26729){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26729);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26748){if((e26748 instanceof Object))
{var ex__6191__auto__ = e26748;var statearr_26749_26755 = state_26729;(statearr_26749_26755[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26756 = state_26729;
state_26729 = G__26756;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26729){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26750 = f__6203__auto__.call(null);(statearr_26750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.webgl_tex.test_online_shader = (function test_online_shader(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26857){var state_val_26858 = (state_26857[(1)]);if((state_val_26858 === (1)))
{var inst_26819 = document.getElementById("webgl3");var inst_26820 = gl.util.getContext.call(null,inst_26819,null);var inst_26821 = gl.mesh.plain.call(null,inst_26820);var inst_26822 = [new cljs.core.Keyword(null,"position","position",-2011731912)];var inst_26823 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26822,null));var inst_26824 = [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)];var inst_26825 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26824,null));var inst_26826 = gl.util.domContent.call(null,"vertexShader");var inst_26827 = gl.util.domContent.call(null,"fragmentShader");var inst_26828 = gl.shader.programObject.call(null,inst_26820,inst_26823,inst_26825,inst_26826,inst_26827);var inst_26829 = inst_26819.width;var inst_26830 = inst_26819.height;var inst_26831 = [inst_26829,inst_26830];var inst_26832 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26831,null));var inst_26833 = cljs.core.nth.call(null,inst_26832,(0),null);var inst_26834 = cljs.core.nth.call(null,inst_26832,(1),null);var inst_26853 = cljs.core.async.chan.call(null,(1));var inst_26854 = (function (){var c__6202__auto____$1 = inst_26853;var ch = inst_26834;var cw = inst_26833;var vec__26818 = inst_26832;var spec_shader = inst_26828;var mesh = inst_26821;var gl__$1 = inst_26820;var canvas = inst_26819;return ((function (c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__){
return (function (state_26851){var state_val_26852 = (state_26851[(1)]);if((state_val_26852 === (4)))
{var inst_26835 = (state_26851[(7)]);var inst_26845 = (state_26851[(2)]);var inst_26846 = (inst_26835 + 0.03);var inst_26835__$1 = inst_26846;var state_26851__$1 = (function (){var statearr_26859 = state_26851;(statearr_26859[(7)] = inst_26835__$1);
(statearr_26859[(8)] = inst_26845);
return statearr_26859;
})();var statearr_26860_26879 = state_26851__$1;(statearr_26860_26879[(2)] = null);
(statearr_26860_26879[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26852 === (3)))
{var inst_26849 = (state_26851[(2)]);var state_26851__$1 = state_26851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26851__$1,inst_26849);
} else
{if((state_val_26852 === (2)))
{var inst_26835 = (state_26851[(7)]);var inst_26837 = gl__$1.viewport((0),(0),cw,ch);var inst_26838 = gl__$1.clearColor((0),(0),(0),(1));var inst_26839 = gl__$1.COLOR_BUFFER_BIT;var inst_26840 = gl__$1.clear(inst_26839);var inst_26841 = (function (){var timer = inst_26835;return ((function (timer,inst_26835,inst_26837,inst_26838,inst_26839,inst_26840,state_val_26852,c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(timer,inst_26835,inst_26837,inst_26838,inst_26839,inst_26840,state_val_26852,c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__))
})();var inst_26842 = gl.shader.use.call(null,gl__$1,spec_shader,inst_26841);var inst_26843 = cljs.core.async.timeout.call(null,(33));var state_26851__$1 = (function (){var statearr_26861 = state_26851;(statearr_26861[(9)] = inst_26842);
(statearr_26861[(10)] = inst_26838);
(statearr_26861[(11)] = inst_26837);
(statearr_26861[(12)] = inst_26840);
return statearr_26861;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26851__$1,(4),inst_26843);
} else
{if((state_val_26852 === (1)))
{var inst_26835 = (0);var state_26851__$1 = (function (){var statearr_26862 = state_26851;(statearr_26862[(7)] = inst_26835);
return statearr_26862;
})();var statearr_26863_26880 = state_26851__$1;(statearr_26863_26880[(2)] = null);
(statearr_26863_26880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26867 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26867[(0)] = state_machine__6188__auto__);
(statearr_26867[(1)] = (1));
return statearr_26867;
});
var state_machine__6188__auto____1 = (function (state_26851){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26851);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26868){if((e26868 instanceof Object))
{var ex__6191__auto__ = e26868;var statearr_26869_26881 = state_26851;(statearr_26869_26881[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26882 = state_26851;
state_26851 = G__26882;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26851){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26870 = f__6203__auto__.call(null);(statearr_26870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_26870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,ch,cw,vec__26818,spec_shader,mesh,gl__$1,canvas,inst_26819,inst_26820,inst_26821,inst_26822,inst_26823,inst_26824,inst_26825,inst_26826,inst_26827,inst_26828,inst_26829,inst_26830,inst_26831,inst_26832,inst_26833,inst_26834,inst_26853,state_val_26858,c__6202__auto__))
})();var inst_26855 = cljs.core.async.impl.dispatch.run.call(null,inst_26854);var state_26857__$1 = (function (){var statearr_26871 = state_26857;(statearr_26871[(7)] = inst_26855);
return statearr_26871;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26857__$1,null);
} else
{return null;
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26875 = [null,null,null,null,null,null,null,null];(statearr_26875[(0)] = state_machine__6188__auto__);
(statearr_26875[(1)] = (1));
return statearr_26875;
});
var state_machine__6188__auto____1 = (function (state_26857){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26857);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26876){if((e26876 instanceof Object))
{var ex__6191__auto__ = e26876;var statearr_26877_26883 = state_26857;(statearr_26877_26883[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26857);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26884 = state_26857;
state_26857 = G__26884;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26857){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26878 = f__6203__auto__.call(null);(statearr_26878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.webgl_tex.test_tex.call(null);
test.webgl_tex.test_wave.call(null);
test.webgl_tex.test_online_shader.call(null);
