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
return (function (state_77534){var state_val_77535 = (state_77534[(1)]);if((state_val_77535 === (5)))
{var inst_77532 = (state_77534[(2)]);var state_77534__$1 = state_77534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77534__$1,inst_77532);
} else
{if((state_val_77535 === (4)))
{var inst_77502 = (state_77534[(2)]);var inst_77509 = [(0),(0),(0)];var inst_77510 = [(1),(0),(1),(1)];var inst_77511 = [(10),(20)];var inst_77512 = [(0),(0),(0)];var inst_77513 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_77514 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_77515 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_77516 = [inst_77513,inst_77514,inst_77515];var inst_77517 = {"position":inst_77509,"color":inst_77510,"size":inst_77511,"vel":inst_77512,"tex":"img_face","formulaList":inst_77516};var inst_77518 = [inst_77517];var inst_77519 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_77518};var inst_77520 = [(0),(0),(1),(1)];var inst_77521 = [(100),(100)];var inst_77522 = [(10),(10),(0)];var inst_77523 = [(0),(0),(0)];var inst_77524 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_77525 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_77526 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_77527 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_77528 = [inst_77524,inst_77525,inst_77526,inst_77527];var inst_77529 = {"id":"x1","emit":inst_77519,"color":inst_77520,"size":inst_77521,"pos":inst_77522,"vel":inst_77523,"tex":"img_face","formulaList":inst_77528};var inst_77530 = ["edit-particle",inst_77529];var state_77534__$1 = (function (){var statearr_77536 = state_77534;(statearr_77536[(7)] = inst_77502);
return statearr_77536;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77534__$1,(5),onView,inst_77530);
} else
{if((state_val_77535 === (3)))
{var inst_77499 = (state_77534[(2)]);var inst_77500 = cljs.core.async.timeout.call(null,(1100));var state_77534__$1 = (function (){var statearr_77537 = state_77534;(statearr_77537[(8)] = inst_77499);
return statearr_77537;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77534__$1,(4),inst_77500);
} else
{if((state_val_77535 === (2)))
{var inst_77492 = (state_77534[(2)]);var inst_77495 = [(10),(10),(0)];var inst_77496 = {"id":"x1","pos":inst_77495};var inst_77497 = ["edit-particle",inst_77496];var state_77534__$1 = (function (){var statearr_77538 = state_77534;(statearr_77538[(9)] = inst_77492);
return statearr_77538;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77534__$1,(3),onView,inst_77497);
} else
{if((state_val_77535 === (1)))
{var inst_77490 = cljs.core.async.timeout.call(null,(1000));var state_77534__$1 = state_77534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77534__$1,(2),inst_77490);
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
var state_machine__6188__auto____0 = (function (){var statearr_77542 = [null,null,null,null,null,null,null,null,null,null];(statearr_77542[(0)] = state_machine__6188__auto__);
(statearr_77542[(1)] = (1));
return statearr_77542;
});
var state_machine__6188__auto____1 = (function (state_77534){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77543){if((e77543 instanceof Object))
{var ex__6191__auto__ = e77543;var statearr_77544_77546 = state_77534;(statearr_77544_77546[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77547 = state_77534;
state_77534 = G__77547;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77534){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_77545 = f__6203__auto__.call(null);(statearr_77545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77545;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var fps = (30);var mspf = (((1000) / fps) | (0));common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77740){var state_val_77741 = (state_77740[(1)]);if((state_val_77741 === (2)))
{var inst_77738 = (state_77740[(2)]);var state_77740__$1 = state_77740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77740__$1,inst_77738);
} else
{if((state_val_77741 === (1)))
{var state_77740__$1 = state_77740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77740__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77745 = [null,null,null,null,null,null,null];(statearr_77745[(0)] = state_machine__6188__auto__);
(statearr_77745[(1)] = (1));
return statearr_77745;
});
var state_machine__6188__auto____1 = (function (state_77740){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77740);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77746){if((e77746 instanceof Object))
{var ex__6191__auto__ = e77746;var statearr_77747_77926 = state_77740;(statearr_77747_77926[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77740);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77927 = state_77740;
state_77740 = G__77927;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77740){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77748 = f__6203__auto__.call(null);(statearr_77748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77748;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77928 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77928,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77928,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77762){var state_val_77763 = (state_77762[(1)]);if((state_val_77763 === (4)))
{var inst_77752 = (state_77762[(2)]);var inst_77753 = cljs.core.nth.call(null,inst_77752,(0),null);var inst_77754 = cljs.core.nth.call(null,inst_77752,(1),null);var inst_77755 = cljs.core.nth.call(null,inst_77752,(2),null);var inst_77756 = [inst_77753,inst_77754,inst_77755];var inst_77757 = common.onModel.onNext(inst_77756);var state_77762__$1 = (function (){var statearr_77764 = state_77762;(statearr_77764[(7)] = inst_77757);
return statearr_77764;
})();var statearr_77765_77929 = state_77762__$1;(statearr_77765_77929[(2)] = null);
(statearr_77765_77929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77763 === (3)))
{var inst_77760 = (state_77762[(2)]);var state_77762__$1 = state_77762;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77762__$1,inst_77760);
} else
{if((state_val_77763 === (2)))
{var state_77762__$1 = state_77762;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77762__$1,(4),onModel);
} else
{if((state_val_77763 === (1)))
{var state_77762__$1 = state_77762;var statearr_77766_77930 = state_77762__$1;(statearr_77766_77930[(2)] = null);
(statearr_77766_77930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___77928,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77928,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77770 = [null,null,null,null,null,null,null,null];(statearr_77770[(0)] = state_machine__6188__auto__);
(statearr_77770[(1)] = (1));
return statearr_77770;
});
var state_machine__6188__auto____1 = (function (state_77762){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77762);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77771){if((e77771 instanceof Object))
{var ex__6191__auto__ = e77771;var statearr_77772_77931 = state_77762;(statearr_77772_77931[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77762);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77932 = state_77762;
state_77762 = G__77932;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77762){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77928,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77773 = f__6203__auto__.call(null);(statearr_77773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77928);
return statearr_77773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77928,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77933 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77933,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77933,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77786){var state_val_77787 = (state_77786[(1)]);if((state_val_77787 === (4)))
{var inst_77777 = (state_77786[(2)]);var inst_77778 = cljs.core.nth.call(null,inst_77777,(0),null);var inst_77779 = cljs.core.nth.call(null,inst_77777,(1),null);var inst_77780 = [inst_77778,inst_77779];var inst_77781 = common.onModelEvent.onNext(inst_77780);var state_77786__$1 = (function (){var statearr_77788 = state_77786;(statearr_77788[(7)] = inst_77781);
return statearr_77788;
})();var statearr_77789_77934 = state_77786__$1;(statearr_77789_77934[(2)] = null);
(statearr_77789_77934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77787 === (3)))
{var inst_77784 = (state_77786[(2)]);var state_77786__$1 = state_77786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77786__$1,inst_77784);
} else
{if((state_val_77787 === (2)))
{var state_77786__$1 = state_77786;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77786__$1,(4),onModelEvent);
} else
{if((state_val_77787 === (1)))
{var state_77786__$1 = state_77786;var statearr_77790_77935 = state_77786__$1;(statearr_77790_77935[(2)] = null);
(statearr_77790_77935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___77933,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77933,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77794 = [null,null,null,null,null,null,null,null];(statearr_77794[(0)] = state_machine__6188__auto__);
(statearr_77794[(1)] = (1));
return statearr_77794;
});
var state_machine__6188__auto____1 = (function (state_77786){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77786);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77795){if((e77795 instanceof Object))
{var ex__6191__auto__ = e77795;var statearr_77796_77936 = state_77786;(statearr_77796_77936[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77937 = state_77786;
state_77786 = G__77937;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77786){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77933,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77797 = f__6203__auto__.call(null);(statearr_77797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77933);
return statearr_77797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77933,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77938 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77938,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77938,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77816){var state_val_77817 = (state_77816[(1)]);if((state_val_77817 === (5)))
{var inst_77807 = (state_77816[(7)]);var inst_77800 = (state_77816[(8)]);var inst_77811 = (state_77816[(2)]);var tmp77818 = inst_77800;var inst_77800__$1 = tmp77818;var inst_77801 = inst_77807;var state_77816__$1 = (function (){var statearr_77819 = state_77816;(statearr_77819[(9)] = inst_77811);
(statearr_77819[(10)] = inst_77801);
(statearr_77819[(8)] = inst_77800__$1);
return statearr_77819;
})();var statearr_77820_77939 = state_77816__$1;(statearr_77820_77939[(2)] = null);
(statearr_77820_77939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77817 === (4)))
{var inst_77807 = (state_77816[(7)]);var inst_77801 = (state_77816[(10)]);var inst_77805 = (state_77816[(2)]);var inst_77806 = (new Date());var inst_77807__$1 = inst_77806.getTime();var inst_77808 = (inst_77807__$1 - inst_77801);var inst_77809 = (inst_77808 / (1000));var state_77816__$1 = (function (){var statearr_77821 = state_77816;(statearr_77821[(7)] = inst_77807__$1);
(statearr_77821[(11)] = inst_77805);
return statearr_77821;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77816__$1,(5),onTick,inst_77809);
} else
{if((state_val_77817 === (3)))
{var inst_77814 = (state_77816[(2)]);var state_77816__$1 = state_77816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77816__$1,inst_77814);
} else
{if((state_val_77817 === (2)))
{var inst_77800 = (state_77816[(8)]);var inst_77803 = cljs.core.async.timeout.call(null,inst_77800);var state_77816__$1 = state_77816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77816__$1,(4),inst_77803);
} else
{if((state_val_77817 === (1)))
{var inst_77798 = (new Date());var inst_77799 = inst_77798.getTime();var inst_77800 = mspf;var inst_77801 = inst_77799;var state_77816__$1 = (function (){var statearr_77822 = state_77816;(statearr_77822[(10)] = inst_77801);
(statearr_77822[(8)] = inst_77800);
return statearr_77822;
})();var statearr_77823_77940 = state_77816__$1;(statearr_77823_77940[(2)] = null);
(statearr_77823_77940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___77938,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77938,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77827 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_77827[(0)] = state_machine__6188__auto__);
(statearr_77827[(1)] = (1));
return statearr_77827;
});
var state_machine__6188__auto____1 = (function (state_77816){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77816);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77828){if((e77828 instanceof Object))
{var ex__6191__auto__ = e77828;var statearr_77829_77941 = state_77816;(statearr_77829_77941[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77942 = state_77816;
state_77816 = G__77942;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77816){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77938,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77830 = f__6203__auto__.call(null);(statearr_77830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77938);
return statearr_77830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77938,onView,onModel,onModelEvent,onTick,fps,mspf))
);
var c__6202__auto___77943 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77891){var state_val_77892 = (state_77891[(1)]);if((state_val_77892 === (7)))
{var inst_77886 = (state_77891[(2)]);var inst_77842 = inst_77886;var state_77891__$1 = (function (){var statearr_77893 = state_77891;(statearr_77893[(7)] = inst_77842);
return statearr_77893;
})();var statearr_77894_77944 = state_77891__$1;(statearr_77894_77944[(2)] = null);
(statearr_77894_77944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (1)))
{var inst_77831 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_77832 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_77833 = cljs.core.List.EMPTY;var inst_77834 = [inst_77833,(200)];var inst_77835 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77832,inst_77834);var inst_77836 = [(0),(0),(0)];var inst_77837 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77836,null));var inst_77838 = [(0),(0)];var inst_77839 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77838,null));var inst_77840 = [inst_77835,inst_77837,inst_77839,onModel];var inst_77841 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_77831,inst_77840);var inst_77842 = inst_77841;var state_77891__$1 = (function (){var statearr_77895 = state_77891;(statearr_77895[(7)] = inst_77842);
return statearr_77895;
})();var statearr_77896_77945 = state_77891__$1;(statearr_77896_77945[(2)] = null);
(statearr_77896_77945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (4)))
{var inst_77850 = (state_77891[(8)]);var inst_77848 = (state_77891[(9)]);var inst_77848__$1 = (state_77891[(2)]);var inst_77849 = cljs.core.nth.call(null,inst_77848__$1,(0),null);var inst_77850__$1 = cljs.core.nth.call(null,inst_77848__$1,(1),null);var inst_77854 = cljs.core._EQ_.call(null,onTick,inst_77850__$1);var state_77891__$1 = (function (){var statearr_77897 = state_77891;(statearr_77897[(8)] = inst_77850__$1);
(statearr_77897[(9)] = inst_77848__$1);
(statearr_77897[(10)] = inst_77849);
return statearr_77897;
})();if(inst_77854)
{var statearr_77898_77946 = state_77891__$1;(statearr_77898_77946[(1)] = (5));
} else
{var statearr_77899_77947 = state_77891__$1;(statearr_77899_77947[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (13)))
{var inst_77884 = (state_77891[(2)]);var state_77891__$1 = state_77891;var statearr_77900_77948 = state_77891__$1;(statearr_77900_77948[(2)] = inst_77884);
(statearr_77900_77948[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (6)))
{var inst_77850 = (state_77891[(8)]);var inst_77877 = cljs.core._EQ_.call(null,onView,inst_77850);var state_77891__$1 = state_77891;if(inst_77877)
{var statearr_77901_77949 = state_77891__$1;(statearr_77901_77949[(1)] = (11));
} else
{var statearr_77902_77950 = state_77891__$1;(statearr_77902_77950[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (3)))
{var inst_77889 = (state_77891[(2)]);var state_77891__$1 = state_77891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77891__$1,inst_77889);
} else
{if((state_val_77892 === (12)))
{var inst_77842 = (state_77891[(7)]);var state_77891__$1 = state_77891;var statearr_77903_77951 = state_77891__$1;(statearr_77903_77951[(2)] = inst_77842);
(statearr_77903_77951[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (2)))
{var inst_77845 = [onView,onTick];var inst_77846 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77845,null));var state_77891__$1 = state_77891;return cljs.core.async.ioc_alts_BANG_.call(null,state_77891__$1,(4),inst_77846);
} else
{if((state_val_77892 === (11)))
{var inst_77849 = (state_77891[(10)]);var inst_77842 = (state_77891[(7)]);var inst_77879 = (inst_77849[(0)]);var inst_77880 = (inst_77849[(1)]);var inst_77881 = app.particle.abstract$.onViewCommand.call(null,inst_77879,inst_77880,inst_77842);var state_77891__$1 = state_77891;var statearr_77904_77952 = state_77891__$1;(statearr_77904_77952[(2)] = inst_77881);
(statearr_77904_77952[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (9)))
{var state_77891__$1 = state_77891;var statearr_77905_77953 = state_77891__$1;(statearr_77905_77953[(2)] = cljs.core.identity);
(statearr_77905_77953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (5)))
{var inst_77856 = (state_77891[(11)]);var inst_77842 = (state_77891[(7)]);var inst_77856__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(inst_77842);var state_77891__$1 = (function (){var statearr_77906 = state_77891;(statearr_77906[(11)] = inst_77856__$1);
return statearr_77906;
})();if(cljs.core.truth_(inst_77856__$1))
{var statearr_77907_77954 = state_77891__$1;(statearr_77907_77954[(1)] = (8));
} else
{var statearr_77908_77955 = state_77891__$1;(statearr_77908_77955[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (10)))
{var inst_77850 = (state_77891[(8)]);var inst_77848 = (state_77891[(9)]);var inst_77849 = (state_77891[(10)]);var inst_77842 = (state_77891[(7)]);var inst_77860 = (state_77891[(2)]);var inst_77868 = cljs.core.async.chan.call(null,(1));var inst_77869 = (function (){var c__6202__auto____$1 = inst_77868;var draw = inst_77860;var expr__77852 = inst_77850;var pred__77851 = cljs.core._EQ_;var ch = inst_77850;var v = inst_77849;var vec__77844 = inst_77848;var ctx = inst_77842;return ((function (c__6202__auto____$1,draw,expr__77852,pred__77851,ch,v,vec__77844,ctx,inst_77850,inst_77848,inst_77849,inst_77842,inst_77860,inst_77868,state_val_77892,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,draw,expr__77852,pred__77851,ch,v,vec__77844,ctx,inst_77850,inst_77848,inst_77849,inst_77842,inst_77860,inst_77868,state_val_77892,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_77866){var state_val_77867 = (state_77866[(1)]);if((state_val_77867 === (2)))
{var inst_77864 = (state_77866[(2)]);var state_77866__$1 = state_77866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77866__$1,inst_77864);
} else
{if((state_val_77867 === (1)))
{var inst_77861 = ["tick",v];var inst_77862 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77861,null));var state_77866__$1 = state_77866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77866__$1,(2),onModelEvent,inst_77862);
} else
{return null;
}
}
});})(c__6202__auto____$1,draw,expr__77852,pred__77851,ch,v,vec__77844,ctx,inst_77850,inst_77848,inst_77849,inst_77842,inst_77860,inst_77868,state_val_77892,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto____$1,draw,expr__77852,pred__77851,ch,v,vec__77844,ctx,inst_77850,inst_77848,inst_77849,inst_77842,inst_77860,inst_77868,state_val_77892,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77912 = [null,null,null,null,null,null,null];(statearr_77912[(0)] = state_machine__6188__auto__);
(statearr_77912[(1)] = (1));
return statearr_77912;
});
var state_machine__6188__auto____1 = (function (state_77866){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77866);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77913){if((e77913 instanceof Object))
{var ex__6191__auto__ = e77913;var statearr_77914_77956 = state_77866;(statearr_77914_77956[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77957 = state_77866;
state_77866 = G__77957;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77866){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,draw,expr__77852,pred__77851,ch,v,vec__77844,ctx,inst_77850,inst_77848,inst_77849,inst_77842,inst_77860,inst_77868,state_val_77892,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77915 = f__6203__auto__.call(null);(statearr_77915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_77915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,draw,expr__77852,pred__77851,ch,v,vec__77844,ctx,inst_77850,inst_77848,inst_77849,inst_77842,inst_77860,inst_77868,state_val_77892,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var inst_77870 = cljs.core.async.impl.dispatch.run.call(null,inst_77869);var inst_77871 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_77872 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77871,null));var inst_77873 = cljs.core.partial.call(null,tool.particle.update,inst_77849);var inst_77874 = cljs.core.update_in.call(null,inst_77842,inst_77872,inst_77873);var inst_77875 = inst_77860.call(null,inst_77874);var state_77891__$1 = (function (){var statearr_77916 = state_77891;(statearr_77916[(12)] = inst_77870);
return statearr_77916;
})();var statearr_77917_77958 = state_77891__$1;(statearr_77917_77958[(2)] = inst_77875);
(statearr_77917_77958[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77892 === (8)))
{var inst_77856 = (state_77891[(11)]);var state_77891__$1 = state_77891;var statearr_77918_77959 = state_77891__$1;(statearr_77918_77959[(2)] = inst_77856);
(statearr_77918_77959[(1)] = (10));
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
}
}
}
});})(c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77922 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_77922[(0)] = state_machine__6188__auto__);
(statearr_77922[(1)] = (1));
return statearr_77922;
});
var state_machine__6188__auto____1 = (function (state_77891){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77891);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77923){if((e77923 instanceof Object))
{var ex__6191__auto__ = e77923;var statearr_77924_77960 = state_77891;(statearr_77924_77960[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77961 = state_77891;
state_77891 = G__77961;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77891){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf))
})();var state__6204__auto__ = (function (){var statearr_77925 = f__6203__auto__.call(null);(statearr_77925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___77943);
return statearr_77925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___77943,onView,onModel,onModelEvent,onTick,fps,mspf))
);
return null;
});
app.particle.main.main.call(null);
