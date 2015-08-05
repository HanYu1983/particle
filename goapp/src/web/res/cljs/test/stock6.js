// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock6');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('stock.formula');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.drawer');
goog.require('stock.tool');
goog.require('stock.tool');
test.stock6.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__47659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__47659,(0),null);var h = cljs.core.nth.call(null,vec__47659,(1),null);var proj_x = ((function (ctx,vec__47659,w,h){
return (function (v){return ((v * (w / (4))) + (w / (2)));
});})(ctx,vec__47659,w,h))
;var proj_y = ((function (ctx,vec__47659,w,h,proj_x){
return (function (v){return (((v * (h / (4))) * (-1)) + (h / (2)));
});})(ctx,vec__47659,w,h,proj_x))
;return ((function (ctx,vec__47659,w,h,proj_x,proj_y){
return (function (cz,vz){console.log(cljs.core.pr_str.call(null,cz));
console.log(cljs.core.pr_str.call(null,vz));
(ctx["fillStyle"] = "gray");
ctx.fillRect((0),(0),w,h);
(ctx["strokeStyle"] = "red");
var seq__47660 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (ctx,vec__47659,w,h,proj_x,proj_y){
return (function() { 
var G__47666__delegate = function (args){return args;
};
var G__47666 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__47666__delegate.call(this,args);};
G__47666.cljs$lang$maxFixedArity = 0;
G__47666.cljs$lang$applyTo = (function (arglist__47667){
var args = cljs.core.seq(arglist__47667);
return G__47666__delegate(args);
});
G__47666.cljs$core$IFn$_invoke$arity$variadic = G__47666__delegate;
return G__47666;
})()
;})(ctx,vec__47659,w,h,proj_x,proj_y))
,cz,cljs.core.rest.call(null,cz),vz,cljs.core.rest.call(null,vz)));var chunk__47661 = null;var count__47662 = (0);var i__47663 = (0);while(true){
if((i__47663 < count__47662))
{var vec__47664 = cljs.core._nth.call(null,chunk__47661,i__47663);var pc = cljs.core.nth.call(null,vec__47664,(0),null);var cc = cljs.core.nth.call(null,vec__47664,(1),null);var pv = cljs.core.nth.call(null,vec__47664,(2),null);var cv = cljs.core.nth.call(null,vec__47664,(3),null);ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__47668 = seq__47660;
var G__47669 = chunk__47661;
var G__47670 = count__47662;
var G__47671 = (i__47663 + (1));
seq__47660 = G__47668;
chunk__47661 = G__47669;
count__47662 = G__47670;
i__47663 = G__47671;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__47660);if(temp__4126__auto__)
{var seq__47660__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47660__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__47660__$1);{
var G__47672 = cljs.core.chunk_rest.call(null,seq__47660__$1);
var G__47673 = c__4307__auto__;
var G__47674 = cljs.core.count.call(null,c__4307__auto__);
var G__47675 = (0);
seq__47660 = G__47672;
chunk__47661 = G__47673;
count__47662 = G__47674;
i__47663 = G__47675;
continue;
}
} else
{var vec__47665 = cljs.core.first.call(null,seq__47660__$1);var pc = cljs.core.nth.call(null,vec__47665,(0),null);var cc = cljs.core.nth.call(null,vec__47665,(1),null);var pv = cljs.core.nth.call(null,vec__47665,(2),null);var cv = cljs.core.nth.call(null,vec__47665,(3),null);ctx.beginPath();
ctx.moveTo(proj_x.call(null,pv),proj_y.call(null,pc));
ctx.lineTo(proj_x.call(null,cv),proj_y.call(null,cc));
ctx.stroke();
{
var G__47676 = cljs.core.next.call(null,seq__47660__$1);
var G__47677 = null;
var G__47678 = (0);
var G__47679 = (0);
seq__47660 = G__47676;
chunk__47661 = G__47677;
count__47662 = G__47678;
i__47663 = G__47679;
continue;
}
}
} else
{return null;
}
}
break;
}
});
;})(ctx,vec__47659,w,h,proj_x,proj_y))
});
test.stock6.main = (function main(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_47730){var state_val_47731 = (state_47730[(1)]);if((state_val_47731 === (2)))
{var inst_47713 = (state_47730[(2)]);var inst_47714 = cljs.core.nth.call(null,inst_47713,(0),null);var inst_47715 = cljs.core.nth.call(null,inst_47713,(1),null);var inst_47716 = stock.tool.close.call(null,inst_47715);var inst_47717 = stock.formula.avg_seq.call(null,(10),inst_47716);var inst_47718 = stock.formula.average.call(null,inst_47717);var inst_47719 = stock.formula.StandardDeviation.call(null,inst_47718,inst_47717);var inst_47720 = stock.formula.z_score.call(null,inst_47718,inst_47719,inst_47717);var inst_47721 = stock.tool.volume.call(null,inst_47715);var inst_47722 = stock.formula.avg_seq.call(null,(10),inst_47721);var inst_47723 = stock.formula.average.call(null,inst_47722);var inst_47724 = stock.formula.StandardDeviation.call(null,inst_47723,inst_47722);var inst_47725 = stock.formula.z_score.call(null,inst_47723,inst_47724,inst_47722);var inst_47726 = document.getElementById("canvas");var inst_47727 = test.stock6.draw.call(null,inst_47726);var inst_47728 = inst_47727.call(null,inst_47720,inst_47725);var state_47730__$1 = (function (){var statearr_47732 = state_47730;(statearr_47732[(7)] = inst_47714);
(statearr_47732[(8)] = inst_47728);
return statearr_47732;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47730__$1,null);
} else
{if((state_val_47731 === (1)))
{var inst_47711 = stock.tool.stock_info.call(null,null,(2330),"2015/1/1",(0),(200));var state_47730__$1 = state_47730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47730__$1,(2),inst_47711);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47736 = [null,null,null,null,null,null,null,null,null];(statearr_47736[(0)] = state_machine__6188__auto__);
(statearr_47736[(1)] = (1));
return statearr_47736;
});
var state_machine__6188__auto____1 = (function (state_47730){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47730);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47737){if((e47737 instanceof Object))
{var ex__6191__auto__ = e47737;var statearr_47738_47740 = state_47730;(statearr_47738_47740[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47737;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47741 = state_47730;
state_47730 = G__47741;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47730){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_47739 = f__6203__auto__.call(null);(statearr_47739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main2 = (function main2(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_47802){var state_val_47803 = (state_47802[(1)]);if((state_val_47803 === (2)))
{var inst_47781 = (state_47802[(2)]);var inst_47782 = cljs.core.nth.call(null,inst_47781,(0),null);var inst_47783 = cljs.core.nth.call(null,inst_47781,(1),null);var inst_47784 = document.getElementById("canvas2");var inst_47785 = inst_47784.width;var inst_47786 = inst_47784.height;var inst_47787 = [inst_47785,inst_47786];var inst_47788 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47787,null));var inst_47789 = cljs.core.nth.call(null,inst_47788,(0),null);var inst_47790 = cljs.core.nth.call(null,inst_47788,(1),null);var inst_47791 = inst_47784.getContext("2d");var inst_47792 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_47793 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_47794 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_47783];var inst_47795 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_47793,inst_47794);var inst_47796 = [inst_47795];var inst_47797 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_47796,null));var inst_47798 = [inst_47797];var inst_47799 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_47792,inst_47798);var inst_47800 = stock.drawer.draw.call(null,inst_47799,inst_47789,inst_47790,inst_47791);var state_47802__$1 = (function (){var statearr_47804 = state_47802;(statearr_47804[(7)] = inst_47782);
return statearr_47804;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47802__$1,inst_47800);
} else
{if((state_val_47803 === (1)))
{var inst_47779 = stock.tool.stock_info.call(null,null,(2330),"2015/1/1",(0),(200));var state_47802__$1 = state_47802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47802__$1,(2),inst_47779);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_47808 = [null,null,null,null,null,null,null,null];(statearr_47808[(0)] = state_machine__6188__auto__);
(statearr_47808[(1)] = (1));
return statearr_47808;
});
var state_machine__6188__auto____1 = (function (state_47802){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_47802);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e47809){if((e47809 instanceof Object))
{var ex__6191__auto__ = e47809;var statearr_47810_47812 = state_47802;(statearr_47810_47812[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47802);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e47809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__47813 = state_47802;
state_47802 = G__47813;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_47802){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_47802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_47811 = f__6203__auto__.call(null);(statearr_47811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_47811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
