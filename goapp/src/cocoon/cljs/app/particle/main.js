// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.util');
goog.require('app.particle.draw');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('app.particle.abstract$');
goog.require('tool.particle');
goog.require('app.particle.impl');
goog.require('gl.util');
goog.require('app.particle.abstract$');
goog.require('app.particle.draw');
app.particle.main.demo = (function demo(onView){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_45553){var state_val_45554 = (state_45553[(1)]);if((state_val_45554 === (5)))
{var inst_45551 = (state_45553[(2)]);var state_45553__$1 = state_45553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45553__$1,inst_45551);
} else
{if((state_val_45554 === (4)))
{var inst_45521 = (state_45553[(2)]);var inst_45528 = [(0),(0),(0)];var inst_45529 = [(1),(0),(1),(1)];var inst_45530 = [(10),(20)];var inst_45531 = [(0),(0),(0)];var inst_45532 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_45533 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_45534 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_45535 = [inst_45532,inst_45533,inst_45534];var inst_45536 = {"position":inst_45528,"color":inst_45529,"size":inst_45530,"vel":inst_45531,"tex":"img_map","formulaList":inst_45535};var inst_45537 = [inst_45536];var inst_45538 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_45537};var inst_45539 = [(0),(0),(1),(1)];var inst_45540 = [(30),(10)];var inst_45541 = [(10),(10),(0)];var inst_45542 = [(0),(0),(0)];var inst_45543 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_45544 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_45545 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_45546 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_45547 = [inst_45543,inst_45544,inst_45545,inst_45546];var inst_45548 = {"id":"x1","emit":inst_45538,"color":inst_45539,"size":inst_45540,"pos":inst_45541,"vel":inst_45542,"tex":"img_face","formulaList":inst_45547};var inst_45549 = ["edit-particle",inst_45548];var state_45553__$1 = (function (){var statearr_45555 = state_45553;(statearr_45555[(7)] = inst_45521);
return statearr_45555;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45553__$1,(5),onView,inst_45549);
} else
{if((state_val_45554 === (3)))
{var inst_45518 = (state_45553[(2)]);var inst_45519 = cljs.core.async.timeout.call(null,(1100));var state_45553__$1 = (function (){var statearr_45556 = state_45553;(statearr_45556[(8)] = inst_45518);
return statearr_45556;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45553__$1,(4),inst_45519);
} else
{if((state_val_45554 === (2)))
{var inst_45511 = (state_45553[(2)]);var inst_45514 = [(10),(10),(0)];var inst_45515 = {"id":"x1","pos":inst_45514};var inst_45516 = ["edit-particle",inst_45515];var state_45553__$1 = (function (){var statearr_45557 = state_45553;(statearr_45557[(9)] = inst_45511);
return statearr_45557;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45553__$1,(3),onView,inst_45516);
} else
{if((state_val_45554 === (1)))
{var inst_45509 = cljs.core.async.timeout.call(null,(1000));var state_45553__$1 = state_45553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45553__$1,(2),inst_45509);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45561 = [null,null,null,null,null,null,null,null,null,null];(statearr_45561[(0)] = state_machine__6188__auto__);
(statearr_45561[(1)] = (1));
return statearr_45561;
});
var state_machine__6188__auto____1 = (function (state_45553){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45553);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45562){if((e45562 instanceof Object))
{var ex__6191__auto__ = e45562;var statearr_45563_45565 = state_45553;(statearr_45563_45565[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45566 = state_45553;
state_45553 = G__45566;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45553){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_45564 = f__6203__auto__.call(null);(statearr_45564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_45564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj45749 = {};return obj45749;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45753){var state_val_45754 = (state_45753[(1)]);if((state_val_45754 === (2)))
{var inst_45751 = (state_45753[(2)]);var state_45753__$1 = state_45753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45753__$1,inst_45751);
} else
{if((state_val_45754 === (1)))
{var state_45753__$1 = state_45753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45753__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45758 = [null,null,null,null,null,null,null];(statearr_45758[(0)] = state_machine__6188__auto__);
(statearr_45758[(1)] = (1));
return statearr_45758;
});
var state_machine__6188__auto____1 = (function (state_45753){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45753);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45759){if((e45759 instanceof Object))
{var ex__6191__auto__ = e45759;var statearr_45760_45929 = state_45753;(statearr_45760_45929[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45930 = state_45753;
state_45753 = G__45930;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45753){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45761 = f__6203__auto__.call(null);(statearr_45761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_45761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45931 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45931,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45931,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45775){var state_val_45776 = (state_45775[(1)]);if((state_val_45776 === (4)))
{var inst_45765 = (state_45775[(2)]);var inst_45766 = cljs.core.nth.call(null,inst_45765,(0),null);var inst_45767 = cljs.core.nth.call(null,inst_45765,(1),null);var inst_45768 = cljs.core.nth.call(null,inst_45765,(2),null);var inst_45769 = [inst_45766,inst_45767,inst_45768];var inst_45770 = common.onModel.onNext(inst_45769);var state_45775__$1 = (function (){var statearr_45777 = state_45775;(statearr_45777[(7)] = inst_45770);
return statearr_45777;
})();var statearr_45778_45932 = state_45775__$1;(statearr_45778_45932[(2)] = null);
(statearr_45778_45932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45776 === (3)))
{var inst_45773 = (state_45775[(2)]);var state_45775__$1 = state_45775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45775__$1,inst_45773);
} else
{if((state_val_45776 === (2)))
{var state_45775__$1 = state_45775;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45775__$1,(4),onModel);
} else
{if((state_val_45776 === (1)))
{var state_45775__$1 = state_45775;var statearr_45779_45933 = state_45775__$1;(statearr_45779_45933[(2)] = null);
(statearr_45779_45933[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___45931,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45931,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45783 = [null,null,null,null,null,null,null,null];(statearr_45783[(0)] = state_machine__6188__auto__);
(statearr_45783[(1)] = (1));
return statearr_45783;
});
var state_machine__6188__auto____1 = (function (state_45775){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45784){if((e45784 instanceof Object))
{var ex__6191__auto__ = e45784;var statearr_45785_45934 = state_45775;(statearr_45785_45934[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45935 = state_45775;
state_45775 = G__45935;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45775){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45931,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45786 = f__6203__auto__.call(null);(statearr_45786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45931);
return statearr_45786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45931,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45936 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45936,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45936,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45799){var state_val_45800 = (state_45799[(1)]);if((state_val_45800 === (4)))
{var inst_45790 = (state_45799[(2)]);var inst_45791 = cljs.core.nth.call(null,inst_45790,(0),null);var inst_45792 = cljs.core.nth.call(null,inst_45790,(1),null);var inst_45793 = [inst_45791,inst_45792];var inst_45794 = common.onModelEvent.onNext(inst_45793);var state_45799__$1 = (function (){var statearr_45801 = state_45799;(statearr_45801[(7)] = inst_45794);
return statearr_45801;
})();var statearr_45802_45937 = state_45799__$1;(statearr_45802_45937[(2)] = null);
(statearr_45802_45937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45800 === (3)))
{var inst_45797 = (state_45799[(2)]);var state_45799__$1 = state_45799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45799__$1,inst_45797);
} else
{if((state_val_45800 === (2)))
{var state_45799__$1 = state_45799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45799__$1,(4),onModelEvent);
} else
{if((state_val_45800 === (1)))
{var state_45799__$1 = state_45799;var statearr_45803_45938 = state_45799__$1;(statearr_45803_45938[(2)] = null);
(statearr_45803_45938[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___45936,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45936,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45807 = [null,null,null,null,null,null,null,null];(statearr_45807[(0)] = state_machine__6188__auto__);
(statearr_45807[(1)] = (1));
return statearr_45807;
});
var state_machine__6188__auto____1 = (function (state_45799){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45799);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45808){if((e45808 instanceof Object))
{var ex__6191__auto__ = e45808;var statearr_45809_45939 = state_45799;(statearr_45809_45939[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45799);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45940 = state_45799;
state_45799 = G__45940;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45799){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45936,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45810 = f__6203__auto__.call(null);(statearr_45810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45936);
return statearr_45810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45936,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45941 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45941,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45941,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45829){var state_val_45830 = (state_45829[(1)]);if((state_val_45830 === (5)))
{var inst_45820 = (state_45829[(7)]);var inst_45813 = (state_45829[(8)]);var inst_45824 = (state_45829[(2)]);var tmp45831 = inst_45813;var inst_45813__$1 = tmp45831;var inst_45814 = inst_45820;var state_45829__$1 = (function (){var statearr_45832 = state_45829;(statearr_45832[(9)] = inst_45824);
(statearr_45832[(8)] = inst_45813__$1);
(statearr_45832[(10)] = inst_45814);
return statearr_45832;
})();var statearr_45833_45942 = state_45829__$1;(statearr_45833_45942[(2)] = null);
(statearr_45833_45942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45830 === (4)))
{var inst_45820 = (state_45829[(7)]);var inst_45814 = (state_45829[(10)]);var inst_45818 = (state_45829[(2)]);var inst_45819 = (new Date());var inst_45820__$1 = inst_45819.getTime();var inst_45821 = (inst_45820__$1 - inst_45814);var inst_45822 = (inst_45821 / (1000));var state_45829__$1 = (function (){var statearr_45834 = state_45829;(statearr_45834[(7)] = inst_45820__$1);
(statearr_45834[(11)] = inst_45818);
return statearr_45834;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45829__$1,(5),onTick,inst_45822);
} else
{if((state_val_45830 === (3)))
{var inst_45827 = (state_45829[(2)]);var state_45829__$1 = state_45829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45829__$1,inst_45827);
} else
{if((state_val_45830 === (2)))
{var inst_45813 = (state_45829[(8)]);var inst_45816 = cljs.core.async.timeout.call(null,inst_45813);var state_45829__$1 = state_45829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45829__$1,(4),inst_45816);
} else
{if((state_val_45830 === (1)))
{var inst_45811 = (new Date());var inst_45812 = inst_45811.getTime();var inst_45813 = mspf;var inst_45814 = inst_45812;var state_45829__$1 = (function (){var statearr_45835 = state_45829;(statearr_45835[(8)] = inst_45813);
(statearr_45835[(10)] = inst_45814);
return statearr_45835;
})();var statearr_45836_45943 = state_45829__$1;(statearr_45836_45943[(2)] = null);
(statearr_45836_45943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___45941,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45941,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45840 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45840[(0)] = state_machine__6188__auto__);
(statearr_45840[(1)] = (1));
return statearr_45840;
});
var state_machine__6188__auto____1 = (function (state_45829){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45829);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45841){if((e45841 instanceof Object))
{var ex__6191__auto__ = e45841;var statearr_45842_45944 = state_45829;(statearr_45842_45944[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45945 = state_45829;
state_45829 = G__45945;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45829){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45941,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45843 = f__6203__auto__.call(null);(statearr_45843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45941);
return statearr_45843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45941,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___45946 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45899){var state_val_45900 = (state_45899[(1)]);if((state_val_45900 === (7)))
{var inst_45894 = (state_45899[(2)]);var inst_45855 = inst_45894;var state_45899__$1 = (function (){var statearr_45901 = state_45899;(statearr_45901[(7)] = inst_45855);
return statearr_45901;
})();var statearr_45902_45947 = state_45899__$1;(statearr_45902_45947[(2)] = null);
(statearr_45902_45947[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45900 === (1)))
{var inst_45844 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_45845 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317)];var inst_45846 = cljs.core.List.EMPTY;var inst_45847 = [0.1,0.1,0.1];var inst_45848 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45847,null));var inst_45849 = [inst_45846,(200),inst_45848];var inst_45850 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45845,inst_45849);var inst_45851 = [(0),(0)];var inst_45852 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45851,null));var inst_45853 = [(0),inst_45850,inst_45852,onModel,gl__$1];var inst_45854 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45844,inst_45853);var inst_45855 = inst_45854;var state_45899__$1 = (function (){var statearr_45903 = state_45899;(statearr_45903[(7)] = inst_45855);
return statearr_45903;
})();var statearr_45904_45948 = state_45899__$1;(statearr_45904_45948[(2)] = null);
(statearr_45904_45948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45900 === (4)))
{var inst_45861 = (state_45899[(8)]);var inst_45863 = (state_45899[(9)]);var inst_45861__$1 = (state_45899[(2)]);var inst_45862 = cljs.core.nth.call(null,inst_45861__$1,(0),null);var inst_45863__$1 = cljs.core.nth.call(null,inst_45861__$1,(1),null);var inst_45867 = cljs.core._EQ_.call(null,onTick,inst_45863__$1);var state_45899__$1 = (function (){var statearr_45905 = state_45899;(statearr_45905[(8)] = inst_45861__$1);
(statearr_45905[(9)] = inst_45863__$1);
(statearr_45905[(10)] = inst_45862);
return statearr_45905;
})();if(inst_45867)
{var statearr_45906_45949 = state_45899__$1;(statearr_45906_45949[(1)] = (5));
} else
{var statearr_45907_45950 = state_45899__$1;(statearr_45907_45950[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45900 === (6)))
{var inst_45863 = (state_45899[(9)]);var inst_45885 = cljs.core._EQ_.call(null,onView,inst_45863);var state_45899__$1 = state_45899;if(inst_45885)
{var statearr_45908_45951 = state_45899__$1;(statearr_45908_45951[(1)] = (8));
} else
{var statearr_45909_45952 = state_45899__$1;(statearr_45909_45952[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45900 === (3)))
{var inst_45897 = (state_45899[(2)]);var state_45899__$1 = state_45899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45899__$1,inst_45897);
} else
{if((state_val_45900 === (2)))
{var inst_45858 = [onView,onTick];var inst_45859 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45858,null));var state_45899__$1 = state_45899;return cljs.core.async.ioc_alts_BANG_.call(null,state_45899__$1,(4),inst_45859);
} else
{if((state_val_45900 === (9)))
{var inst_45855 = (state_45899[(7)]);var state_45899__$1 = state_45899;var statearr_45910_45953 = state_45899__$1;(statearr_45910_45953[(2)] = inst_45855);
(statearr_45910_45953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45900 === (5)))
{var inst_45855 = (state_45899[(7)]);var inst_45861 = (state_45899[(8)]);var inst_45863 = (state_45899[(9)]);var inst_45862 = (state_45899[(10)]);var inst_45876 = cljs.core.async.chan.call(null,(1));var inst_45877 = (function (){var c__6202__auto____$1 = inst_45876;var expr__45865 = inst_45863;var pred__45864 = cljs.core._EQ_;var ch = inst_45863;var v = inst_45862;var vec__45857 = inst_45861;var ctx = inst_45855;return ((function (c__6202__auto____$1,expr__45865,pred__45864,ch,v,vec__45857,ctx,inst_45855,inst_45861,inst_45863,inst_45862,inst_45876,state_val_45900,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__45865,pred__45864,ch,v,vec__45857,ctx,inst_45855,inst_45861,inst_45863,inst_45862,inst_45876,state_val_45900,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_45874){var state_val_45875 = (state_45874[(1)]);if((state_val_45875 === (2)))
{var inst_45872 = (state_45874[(2)]);var state_45874__$1 = state_45874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45874__$1,inst_45872);
} else
{if((state_val_45875 === (1)))
{var inst_45869 = ["tick",v];var inst_45870 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45869,null));var state_45874__$1 = state_45874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45874__$1,(2),onModelEvent,inst_45870);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__45865,pred__45864,ch,v,vec__45857,ctx,inst_45855,inst_45861,inst_45863,inst_45862,inst_45876,state_val_45900,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__45865,pred__45864,ch,v,vec__45857,ctx,inst_45855,inst_45861,inst_45863,inst_45862,inst_45876,state_val_45900,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45914 = [null,null,null,null,null,null,null];(statearr_45914[(0)] = state_machine__6188__auto__);
(statearr_45914[(1)] = (1));
return statearr_45914;
});
var state_machine__6188__auto____1 = (function (state_45874){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45915){if((e45915 instanceof Object))
{var ex__6191__auto__ = e45915;var statearr_45916_45954 = state_45874;(statearr_45916_45954[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45955 = state_45874;
state_45874 = G__45955;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45874){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__45865,pred__45864,ch,v,vec__45857,ctx,inst_45855,inst_45861,inst_45863,inst_45862,inst_45876,state_val_45900,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45917 = f__6203__auto__.call(null);(statearr_45917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_45917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__45865,pred__45864,ch,v,vec__45857,ctx,inst_45855,inst_45861,inst_45863,inst_45862,inst_45876,state_val_45900,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_45878 = cljs.core.async.impl.dispatch.run.call(null,inst_45877);var inst_45879 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_45880 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45879,null));var inst_45881 = cljs.core.partial.call(null,tool.particle.update,inst_45862);var inst_45882 = cljs.core.update_in.call(null,inst_45855,inst_45880,inst_45881);var inst_45883 = draw.call(null,inst_45882);var state_45899__$1 = (function (){var statearr_45918 = state_45899;(statearr_45918[(11)] = inst_45878);
return statearr_45918;
})();var statearr_45919_45956 = state_45899__$1;(statearr_45919_45956[(2)] = inst_45883);
(statearr_45919_45956[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45900 === (10)))
{var inst_45892 = (state_45899[(2)]);var state_45899__$1 = state_45899;var statearr_45920_45957 = state_45899__$1;(statearr_45920_45957[(2)] = inst_45892);
(statearr_45920_45957[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45900 === (8)))
{var inst_45855 = (state_45899[(7)]);var inst_45862 = (state_45899[(10)]);var inst_45887 = (inst_45862[(0)]);var inst_45888 = (inst_45862[(1)]);var inst_45889 = app.particle.abstract$.onViewCommand.call(null,inst_45887,inst_45888,inst_45855);var state_45899__$1 = state_45899;var statearr_45921_45958 = state_45899__$1;(statearr_45921_45958[(2)] = inst_45889);
(statearr_45921_45958[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45925 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45925[(0)] = state_machine__6188__auto__);
(statearr_45925[(1)] = (1));
return statearr_45925;
});
var state_machine__6188__auto____1 = (function (state_45899){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45926){if((e45926 instanceof Object))
{var ex__6191__auto__ = e45926;var statearr_45927_45959 = state_45899;(statearr_45927_45959[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45899);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45960 = state_45899;
state_45899 = G__45960;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45899){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_45928 = f__6203__auto__.call(null);(statearr_45928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45946);
return statearr_45928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45946,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
