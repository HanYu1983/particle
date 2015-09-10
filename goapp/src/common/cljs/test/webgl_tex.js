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
test.webgl_tex.loadImage = (function loadImage(url){var onload = cljs.core.async.chan.call(null);var img = (new Image());var G__17456_17471 = img;(G__17456_17471["src"] = url);
(G__17456_17471["onload"] = ((function (G__17456_17471,onload,img){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__17456_17471,onload,img){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__17456_17471,onload,img){
return (function (state_17461){var state_val_17462 = (state_17461[(1)]);if((state_val_17462 === (2)))
{var inst_17458 = (state_17461[(2)]);var inst_17459 = cljs.core.async.close_BANG_.call(null,onload);var state_17461__$1 = (function (){var statearr_17463 = state_17461;(statearr_17463[(7)] = inst_17458);
return statearr_17463;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17461__$1,inst_17459);
} else
{if((state_val_17462 === (1)))
{var state_17461__$1 = state_17461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17461__$1,(2),onload,img);
} else
{return null;
}
}
});})(c__6203__auto__,G__17456_17471,onload,img))
;return ((function (switch__6188__auto__,c__6203__auto__,G__17456_17471,onload,img){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17467 = [null,null,null,null,null,null,null,null];(statearr_17467[(0)] = state_machine__6189__auto__);
(statearr_17467[(1)] = (1));
return statearr_17467;
});
var state_machine__6189__auto____1 = (function (state_17461){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17468){if((e17468 instanceof Object))
{var ex__6192__auto__ = e17468;var statearr_17469_17472 = state_17461;(statearr_17469_17472[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17473 = state_17461;
state_17461 = G__17473;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17461){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__17456_17471,onload,img))
})();var state__6205__auto__ = (function (){var statearr_17470 = f__6204__auto__.call(null);(statearr_17470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__17456_17471,onload,img))
);
return c__6203__auto__;
});})(G__17456_17471,onload,img))
);
return onload;
});
/**
* 畫一張貼圖, 使用spriteProgramObject矯正成2D座標
*/
test.webgl_tex.test_tex = (function test_tex(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_17532){var state_val_17533 = (state_17532[(1)]);if((state_val_17533 === (2)))
{var inst_17513 = (state_17532[(2)]);var inst_17514 = document.getElementById("webgl");var inst_17515 = gl.util.getContext.call(null,inst_17514,null);var inst_17516 = gl.texture.texture.call(null,inst_17515,inst_17513);var inst_17517 = gl.mesh.plain_2d.call(null,inst_17515);var inst_17518 = gl.shader.spriteProgramObject.call(null,inst_17515);var inst_17519 = inst_17514.width;var inst_17520 = inst_17514.height;var inst_17521 = [inst_17519,inst_17520];var inst_17522 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17521,null));var inst_17523 = cljs.core.nth.call(null,inst_17522,(0),null);var inst_17524 = cljs.core.nth.call(null,inst_17522,(1),null);var inst_17525 = inst_17515.viewport((0),(0),inst_17523,inst_17524);var inst_17526 = inst_17515.clearColor((0),(0),(0),(1));var inst_17527 = inst_17515.COLOR_BUFFER_BIT;var inst_17528 = inst_17515.clear(inst_17527);var inst_17529 = (function (){var ch = inst_17524;var cw = inst_17523;var vec__17510 = inst_17522;var sprite_shader = inst_17518;var mesh = inst_17517;var tex = inst_17516;var gl__$1 = inst_17515;var canvas = inst_17514;var img = inst_17513;return ((function (ch,cw,vec__17510,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_17513,inst_17514,inst_17515,inst_17516,inst_17517,inst_17518,inst_17519,inst_17520,inst_17521,inst_17522,inst_17523,inst_17524,inst_17525,inst_17526,inst_17527,inst_17528,state_val_17533,c__6203__auto__){
return (function (pobj){var x = (0);var y = (0);var rot = (0);var xs = (300);var ys = (300);var r = (0);var g = (0);var b = (0);var proj = (function (){var G__17534 = (new THREE.Matrix4());G__17534.makeOrthographic((0),cw,ch,(0),(1),(-1));
return G__17534;
})();var tras = (function (){var G__17535 = (new THREE.Matrix4());G__17535.makeTranslation(x,y,(0));
G__17535.multiply((new THREE.Matrix4()).makeRotationZ(rot));
G__17535.multiply((new THREE.Matrix4()).makeScale(xs,ys,(1)));
return G__17535;
})();var texTx = (function (){var G__17536 = (new THREE.Matrix3());return G__17536;
})();var colorTx = (function (){var G__17537 = (new THREE.Matrix4());G__17537.makeTranslation(r,g,b);
return G__17537;
})();gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_position","a_position",-1834353287)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"a_texCoord","a_texCoord",1171486996)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_projection","u_projection",1168061454),"m4fv",proj.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_transform","u_transform",-900539476),"m4fv",tras.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_tex","u_tex",722131582),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_texTransform","u_texTransform",-826269360),"m3fv",texTx.elements], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u_colorTransform","u_colorTransform",149077400),"m4fv",colorTx.elements], null));
gl.mesh.draw.call(null,gl__$1,mesh,null);
return null;
});
;})(ch,cw,vec__17510,sprite_shader,mesh,tex,gl__$1,canvas,img,inst_17513,inst_17514,inst_17515,inst_17516,inst_17517,inst_17518,inst_17519,inst_17520,inst_17521,inst_17522,inst_17523,inst_17524,inst_17525,inst_17526,inst_17527,inst_17528,state_val_17533,c__6203__auto__))
})();var inst_17530 = gl.shader.use.call(null,inst_17515,inst_17518,inst_17529);var state_17532__$1 = (function (){var statearr_17538 = state_17532;(statearr_17538[(7)] = inst_17528);
(statearr_17538[(8)] = inst_17525);
(statearr_17538[(9)] = inst_17526);
return statearr_17538;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17532__$1,inst_17530);
} else
{if((state_val_17533 === (1)))
{var inst_17511 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_17532__$1 = state_17532;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17532__$1,(2),inst_17511);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17542 = [null,null,null,null,null,null,null,null,null,null];(statearr_17542[(0)] = state_machine__6189__auto__);
(statearr_17542[(1)] = (1));
return statearr_17542;
});
var state_machine__6189__auto____1 = (function (state_17532){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17532);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17543){if((e17543 instanceof Object))
{var ex__6192__auto__ = e17543;var statearr_17544_17546 = state_17532;(statearr_17544_17546[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17547 = state_17532;
state_17532 = G__17547;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17532){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17545 = f__6204__auto__.call(null);(statearr_17545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17545;
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
return (function (state_17644){var state_val_17645 = (state_17644[(1)]);if((state_val_17645 === (2)))
{var inst_17610 = (state_17644[(2)]);var inst_17611 = document.getElementById("webgl2");var inst_17612 = gl.util.getContext.call(null,inst_17611,null);var inst_17613 = gl.texture.texture.call(null,inst_17612,inst_17610);var inst_17614 = gl.mesh.plain.call(null,inst_17612);var inst_17615 = gl.shader.waveProgramObject.call(null,inst_17612);var inst_17616 = inst_17611.width;var inst_17617 = inst_17611.height;var inst_17618 = [inst_17616,inst_17617];var inst_17619 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17618,null));var inst_17620 = cljs.core.nth.call(null,inst_17619,(0),null);var inst_17621 = cljs.core.nth.call(null,inst_17619,(1),null);var inst_17640 = cljs.core.async.chan.call(null,(1));var inst_17641 = (function (){var wave_shader = inst_17615;var cw = inst_17620;var img = inst_17610;var vec__17607 = inst_17619;var tex = inst_17613;var c__6203__auto____$1 = inst_17640;var ch = inst_17621;var canvas = inst_17611;var mesh = inst_17614;var gl__$1 = inst_17612;return ((function (wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__){
return (function (state_17638){var state_val_17639 = (state_17638[(1)]);if((state_val_17639 === (4)))
{var inst_17622 = (state_17638[(7)]);var inst_17632 = (state_17638[(2)]);var inst_17633 = (inst_17622 + 0.03);var inst_17622__$1 = inst_17633;var state_17638__$1 = (function (){var statearr_17646 = state_17638;(statearr_17646[(8)] = inst_17632);
(statearr_17646[(7)] = inst_17622__$1);
return statearr_17646;
})();var statearr_17647_17666 = state_17638__$1;(statearr_17647_17666[(2)] = null);
(statearr_17647_17666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17639 === (3)))
{var inst_17636 = (state_17638[(2)]);var state_17638__$1 = state_17638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17638__$1,inst_17636);
} else
{if((state_val_17639 === (2)))
{var inst_17622 = (state_17638[(7)]);var inst_17624 = gl__$1.viewport((0),(0),cw,ch);var inst_17625 = gl__$1.clearColor((0),(0),(0),(1));var inst_17626 = gl__$1.COLOR_BUFFER_BIT;var inst_17627 = gl__$1.clear(inst_17626);var inst_17628 = (function (){var phase = inst_17622;return ((function (phase,inst_17622,inst_17624,inst_17625,inst_17626,inst_17627,state_val_17639,wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"texture","texture",-266291651),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"inputTextureCoordinate","inputTextureCoordinate",-1752956489)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),"2f",[0.5,0.5]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inputImageTexture","inputImageTexture",-613821227),"s2d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tex,(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"normalizedPhase","normalizedPhase",-1522982432),"1f",phase], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(phase,inst_17622,inst_17624,inst_17625,inst_17626,inst_17627,state_val_17639,wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__))
})();var inst_17629 = gl.shader.use.call(null,gl__$1,wave_shader,inst_17628);var inst_17630 = cljs.core.async.timeout.call(null,(33));var state_17638__$1 = (function (){var statearr_17648 = state_17638;(statearr_17648[(9)] = inst_17629);
(statearr_17648[(10)] = inst_17624);
(statearr_17648[(11)] = inst_17625);
(statearr_17648[(12)] = inst_17627);
return statearr_17648;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17638__$1,(4),inst_17630);
} else
{if((state_val_17639 === (1)))
{var inst_17622 = (0);var state_17638__$1 = (function (){var statearr_17649 = state_17638;(statearr_17649[(7)] = inst_17622);
return statearr_17649;
})();var statearr_17650_17667 = state_17638__$1;(statearr_17650_17667[(2)] = null);
(statearr_17650_17667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__))
;return ((function (switch__6188__auto__,wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17654 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17654[(0)] = state_machine__6189__auto__);
(statearr_17654[(1)] = (1));
return statearr_17654;
});
var state_machine__6189__auto____1 = (function (state_17638){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17655){if((e17655 instanceof Object))
{var ex__6192__auto__ = e17655;var statearr_17656_17668 = state_17638;(statearr_17656_17668[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17669 = state_17638;
state_17638 = G__17669;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17638){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17657 = f__6204__auto__.call(null);(statearr_17657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_17657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(wave_shader,cw,img,vec__17607,tex,c__6203__auto____$1,ch,canvas,mesh,gl__$1,inst_17610,inst_17611,inst_17612,inst_17613,inst_17614,inst_17615,inst_17616,inst_17617,inst_17618,inst_17619,inst_17620,inst_17621,inst_17640,state_val_17645,c__6203__auto__))
})();var inst_17642 = cljs.core.async.impl.dispatch.run.call(null,inst_17641);var state_17644__$1 = (function (){var statearr_17658 = state_17644;(statearr_17658[(7)] = inst_17642);
return statearr_17658;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17644__$1,null);
} else
{if((state_val_17645 === (1)))
{var inst_17608 = test.webgl_tex.loadImage.call(null,"res/images/1440-01.jpg");var state_17644__$1 = state_17644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17644__$1,(2),inst_17608);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17662 = [null,null,null,null,null,null,null,null];(statearr_17662[(0)] = state_machine__6189__auto__);
(statearr_17662[(1)] = (1));
return statearr_17662;
});
var state_machine__6189__auto____1 = (function (state_17644){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17644);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17663){if((e17663 instanceof Object))
{var ex__6192__auto__ = e17663;var statearr_17664_17670 = state_17644;(statearr_17664_17670[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17671 = state_17644;
state_17644 = G__17671;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17644){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17665 = f__6204__auto__.call(null);(statearr_17665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.webgl_tex.test_online_shader = (function test_online_shader(){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_17772){var state_val_17773 = (state_17772[(1)]);if((state_val_17773 === (1)))
{var inst_17734 = document.getElementById("webgl3");var inst_17735 = gl.util.getContext.call(null,inst_17734,null);var inst_17736 = gl.mesh.plain.call(null,inst_17735);var inst_17737 = [new cljs.core.Keyword(null,"position","position",-2011731912)];var inst_17738 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17737,null));var inst_17739 = [new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"time","time",1385887882)];var inst_17740 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17739,null));var inst_17741 = gl.util.domContent.call(null,"vertexShader");var inst_17742 = gl.util.domContent.call(null,"fragmentShader");var inst_17743 = gl.shader.programObject.call(null,inst_17735,inst_17738,inst_17740,inst_17741,inst_17742);var inst_17744 = inst_17734.width;var inst_17745 = inst_17734.height;var inst_17746 = [inst_17744,inst_17745];var inst_17747 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17746,null));var inst_17748 = cljs.core.nth.call(null,inst_17747,(0),null);var inst_17749 = cljs.core.nth.call(null,inst_17747,(1),null);var inst_17768 = cljs.core.async.chan.call(null,(1));var inst_17769 = (function (){var c__6203__auto____$1 = inst_17768;var ch = inst_17749;var cw = inst_17748;var vec__17733 = inst_17747;var spec_shader = inst_17743;var mesh = inst_17736;var gl__$1 = inst_17735;var canvas = inst_17734;return ((function (c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__){
return (function (state_17766){var state_val_17767 = (state_17766[(1)]);if((state_val_17767 === (4)))
{var inst_17750 = (state_17766[(7)]);var inst_17760 = (state_17766[(2)]);var inst_17761 = (inst_17750 + 0.03);var inst_17750__$1 = inst_17761;var state_17766__$1 = (function (){var statearr_17774 = state_17766;(statearr_17774[(7)] = inst_17750__$1);
(statearr_17774[(8)] = inst_17760);
return statearr_17774;
})();var statearr_17775_17794 = state_17766__$1;(statearr_17775_17794[(2)] = null);
(statearr_17775_17794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17767 === (3)))
{var inst_17764 = (state_17766[(2)]);var state_17766__$1 = state_17766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17766__$1,inst_17764);
} else
{if((state_val_17767 === (2)))
{var inst_17750 = (state_17766[(7)]);var inst_17752 = gl__$1.viewport((0),(0),cw,ch);var inst_17753 = gl__$1.clearColor((0),(0),(0),(1));var inst_17754 = gl__$1.COLOR_BUFFER_BIT;var inst_17755 = gl__$1.clear(inst_17754);var inst_17756 = (function (){var timer = inst_17750;return ((function (timer,inst_17750,inst_17752,inst_17753,inst_17754,inst_17755,state_val_17767,c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__){
return (function (pobj){gl.mesh.bind.call(null,gl__$1,mesh,new cljs.core.Keyword(null,"vertex","vertex",1562146351),cljs.core.get_in.call(null,pobj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
gl.shader.uniform.call(null,gl__$1,pobj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolution","resolution",-756075601),"2f",[cw,ch]], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),"1f",timer], null));
return gl.mesh.draw.call(null,gl__$1,mesh,null);
});
;})(timer,inst_17750,inst_17752,inst_17753,inst_17754,inst_17755,state_val_17767,c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__))
})();var inst_17757 = gl.shader.use.call(null,gl__$1,spec_shader,inst_17756);var inst_17758 = cljs.core.async.timeout.call(null,(33));var state_17766__$1 = (function (){var statearr_17776 = state_17766;(statearr_17776[(9)] = inst_17752);
(statearr_17776[(10)] = inst_17755);
(statearr_17776[(11)] = inst_17757);
(statearr_17776[(12)] = inst_17753);
return statearr_17776;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17766__$1,(4),inst_17758);
} else
{if((state_val_17767 === (1)))
{var inst_17750 = (0);var state_17766__$1 = (function (){var statearr_17777 = state_17766;(statearr_17777[(7)] = inst_17750);
return statearr_17777;
})();var statearr_17778_17795 = state_17766__$1;(statearr_17778_17795[(2)] = null);
(statearr_17778_17795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17782 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17782[(0)] = state_machine__6189__auto__);
(statearr_17782[(1)] = (1));
return statearr_17782;
});
var state_machine__6189__auto____1 = (function (state_17766){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17766);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17783){if((e17783 instanceof Object))
{var ex__6192__auto__ = e17783;var statearr_17784_17796 = state_17766;(statearr_17784_17796[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17797 = state_17766;
state_17766 = G__17797;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17766){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17785 = f__6204__auto__.call(null);(statearr_17785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto____$1);
return statearr_17785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});
;})(c__6203__auto____$1,ch,cw,vec__17733,spec_shader,mesh,gl__$1,canvas,inst_17734,inst_17735,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,inst_17742,inst_17743,inst_17744,inst_17745,inst_17746,inst_17747,inst_17748,inst_17749,inst_17768,state_val_17773,c__6203__auto__))
})();var inst_17770 = cljs.core.async.impl.dispatch.run.call(null,inst_17769);var state_17772__$1 = (function (){var statearr_17786 = state_17772;(statearr_17786[(7)] = inst_17770);
return statearr_17786;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17772__$1,null);
} else
{return null;
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17790 = [null,null,null,null,null,null,null,null];(statearr_17790[(0)] = state_machine__6189__auto__);
(statearr_17790[(1)] = (1));
return statearr_17790;
});
var state_machine__6189__auto____1 = (function (state_17772){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17772);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17791){if((e17791 instanceof Object))
{var ex__6192__auto__ = e17791;var statearr_17792_17798 = state_17772;(statearr_17792_17798[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17772);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17799 = state_17772;
state_17772 = G__17799;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17772){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17793 = f__6204__auto__.call(null);(statearr_17793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
test.webgl_tex.test_tex.call(null);
test.webgl_tex.test_wave.call(null);
test.webgl_tex.test_online_shader.call(null);
