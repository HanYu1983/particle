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
return (function (state_85549){var state_val_85550 = (state_85549[(1)]);if((state_val_85550 === (5)))
{var inst_85547 = (state_85549[(2)]);var state_85549__$1 = state_85549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85549__$1,inst_85547);
} else
{if((state_val_85550 === (4)))
{var inst_85517 = (state_85549[(2)]);var inst_85524 = [(0),(0),(0)];var inst_85525 = [(1),(0),(1),(1)];var inst_85526 = [(10),(20)];var inst_85527 = [(0),(0),(0)];var inst_85528 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_85529 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_85530 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_85531 = [inst_85528,inst_85529,inst_85530];var inst_85532 = {"position":inst_85524,"color":inst_85525,"size":inst_85526,"vel":inst_85527,"tex":"img_map","formulaList":inst_85531};var inst_85533 = [inst_85532];var inst_85534 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_85533};var inst_85535 = [(0),(0),(1),(1)];var inst_85536 = [(30),(10)];var inst_85537 = [(10),(10),(0)];var inst_85538 = [(0),(0),(0)];var inst_85539 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_85540 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_85541 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_85542 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_85543 = [inst_85539,inst_85540,inst_85541,inst_85542];var inst_85544 = {"id":"x1","emit":inst_85534,"color":inst_85535,"size":inst_85536,"pos":inst_85537,"vel":inst_85538,"tex":"img_face","formulaList":inst_85543};var inst_85545 = ["edit-particle",inst_85544];var state_85549__$1 = (function (){var statearr_85551 = state_85549;(statearr_85551[(7)] = inst_85517);
return statearr_85551;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85549__$1,(5),onView,inst_85545);
} else
{if((state_val_85550 === (3)))
{var inst_85514 = (state_85549[(2)]);var inst_85515 = cljs.core.async.timeout.call(null,(1100));var state_85549__$1 = (function (){var statearr_85552 = state_85549;(statearr_85552[(8)] = inst_85514);
return statearr_85552;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85549__$1,(4),inst_85515);
} else
{if((state_val_85550 === (2)))
{var inst_85507 = (state_85549[(2)]);var inst_85510 = [(10),(10),(0)];var inst_85511 = {"id":"x1","pos":inst_85510};var inst_85512 = ["edit-particle",inst_85511];var state_85549__$1 = (function (){var statearr_85553 = state_85549;(statearr_85553[(9)] = inst_85507);
return statearr_85553;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85549__$1,(3),onView,inst_85512);
} else
{if((state_val_85550 === (1)))
{var inst_85505 = cljs.core.async.timeout.call(null,(1000));var state_85549__$1 = state_85549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85549__$1,(2),inst_85505);
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
var state_machine__6188__auto____0 = (function (){var statearr_85557 = [null,null,null,null,null,null,null,null,null,null];(statearr_85557[(0)] = state_machine__6188__auto__);
(statearr_85557[(1)] = (1));
return statearr_85557;
});
var state_machine__6188__auto____1 = (function (state_85549){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85558){if((e85558 instanceof Object))
{var ex__6191__auto__ = e85558;var statearr_85559_85561 = state_85549;(statearr_85559_85561[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85562 = state_85549;
state_85549 = G__85562;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85549){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_85560 = f__6203__auto__.call(null);(statearr_85560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj85743 = {};return obj85743;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85747){var state_val_85748 = (state_85747[(1)]);if((state_val_85748 === (2)))
{var inst_85745 = (state_85747[(2)]);var state_85747__$1 = state_85747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85747__$1,inst_85745);
} else
{if((state_val_85748 === (1)))
{var state_85747__$1 = state_85747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85747__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85752 = [null,null,null,null,null,null,null];(statearr_85752[(0)] = state_machine__6188__auto__);
(statearr_85752[(1)] = (1));
return statearr_85752;
});
var state_machine__6188__auto____1 = (function (state_85747){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85753){if((e85753 instanceof Object))
{var ex__6191__auto__ = e85753;var statearr_85754_85921 = state_85747;(statearr_85754_85921[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85922 = state_85747;
state_85747 = G__85922;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85747){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85755 = f__6203__auto__.call(null);(statearr_85755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_85755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85923 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85769){var state_val_85770 = (state_85769[(1)]);if((state_val_85770 === (4)))
{var inst_85759 = (state_85769[(2)]);var inst_85760 = cljs.core.nth.call(null,inst_85759,(0),null);var inst_85761 = cljs.core.nth.call(null,inst_85759,(1),null);var inst_85762 = cljs.core.nth.call(null,inst_85759,(2),null);var inst_85763 = [inst_85760,inst_85761,inst_85762];var inst_85764 = common.onModel.onNext(inst_85763);var state_85769__$1 = (function (){var statearr_85771 = state_85769;(statearr_85771[(7)] = inst_85764);
return statearr_85771;
})();var statearr_85772_85924 = state_85769__$1;(statearr_85772_85924[(2)] = null);
(statearr_85772_85924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85770 === (3)))
{var inst_85767 = (state_85769[(2)]);var state_85769__$1 = state_85769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85769__$1,inst_85767);
} else
{if((state_val_85770 === (2)))
{var state_85769__$1 = state_85769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85769__$1,(4),onModel);
} else
{if((state_val_85770 === (1)))
{var state_85769__$1 = state_85769;var statearr_85773_85925 = state_85769__$1;(statearr_85773_85925[(2)] = null);
(statearr_85773_85925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___85923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85777 = [null,null,null,null,null,null,null,null];(statearr_85777[(0)] = state_machine__6188__auto__);
(statearr_85777[(1)] = (1));
return statearr_85777;
});
var state_machine__6188__auto____1 = (function (state_85769){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85769);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85778){if((e85778 instanceof Object))
{var ex__6191__auto__ = e85778;var statearr_85779_85926 = state_85769;(statearr_85779_85926[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85927 = state_85769;
state_85769 = G__85927;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85769){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85780 = f__6203__auto__.call(null);(statearr_85780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85923);
return statearr_85780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85923,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85928 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85793){var state_val_85794 = (state_85793[(1)]);if((state_val_85794 === (4)))
{var inst_85784 = (state_85793[(2)]);var inst_85785 = cljs.core.nth.call(null,inst_85784,(0),null);var inst_85786 = cljs.core.nth.call(null,inst_85784,(1),null);var inst_85787 = [inst_85785,inst_85786];var inst_85788 = common.onModelEvent.onNext(inst_85787);var state_85793__$1 = (function (){var statearr_85795 = state_85793;(statearr_85795[(7)] = inst_85788);
return statearr_85795;
})();var statearr_85796_85929 = state_85793__$1;(statearr_85796_85929[(2)] = null);
(statearr_85796_85929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85794 === (3)))
{var inst_85791 = (state_85793[(2)]);var state_85793__$1 = state_85793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85793__$1,inst_85791);
} else
{if((state_val_85794 === (2)))
{var state_85793__$1 = state_85793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85793__$1,(4),onModelEvent);
} else
{if((state_val_85794 === (1)))
{var state_85793__$1 = state_85793;var statearr_85797_85930 = state_85793__$1;(statearr_85797_85930[(2)] = null);
(statearr_85797_85930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___85928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85801 = [null,null,null,null,null,null,null,null];(statearr_85801[(0)] = state_machine__6188__auto__);
(statearr_85801[(1)] = (1));
return statearr_85801;
});
var state_machine__6188__auto____1 = (function (state_85793){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85793);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85802){if((e85802 instanceof Object))
{var ex__6191__auto__ = e85802;var statearr_85803_85931 = state_85793;(statearr_85803_85931[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85932 = state_85793;
state_85793 = G__85932;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85793){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85804 = f__6203__auto__.call(null);(statearr_85804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85928);
return statearr_85804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85928,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85933 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85933,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85933,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85823){var state_val_85824 = (state_85823[(1)]);if((state_val_85824 === (5)))
{var inst_85807 = (state_85823[(7)]);var inst_85814 = (state_85823[(8)]);var inst_85818 = (state_85823[(2)]);var tmp85825 = inst_85807;var inst_85807__$1 = tmp85825;var inst_85808 = inst_85814;var state_85823__$1 = (function (){var statearr_85826 = state_85823;(statearr_85826[(7)] = inst_85807__$1);
(statearr_85826[(9)] = inst_85818);
(statearr_85826[(10)] = inst_85808);
return statearr_85826;
})();var statearr_85827_85934 = state_85823__$1;(statearr_85827_85934[(2)] = null);
(statearr_85827_85934[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85824 === (4)))
{var inst_85814 = (state_85823[(8)]);var inst_85808 = (state_85823[(10)]);var inst_85812 = (state_85823[(2)]);var inst_85813 = (new Date());var inst_85814__$1 = inst_85813.getTime();var inst_85815 = (inst_85814__$1 - inst_85808);var inst_85816 = (inst_85815 / (1000));var state_85823__$1 = (function (){var statearr_85828 = state_85823;(statearr_85828[(11)] = inst_85812);
(statearr_85828[(8)] = inst_85814__$1);
return statearr_85828;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85823__$1,(5),onTick,inst_85816);
} else
{if((state_val_85824 === (3)))
{var inst_85821 = (state_85823[(2)]);var state_85823__$1 = state_85823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85823__$1,inst_85821);
} else
{if((state_val_85824 === (2)))
{var inst_85807 = (state_85823[(7)]);var inst_85810 = cljs.core.async.timeout.call(null,inst_85807);var state_85823__$1 = state_85823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85823__$1,(4),inst_85810);
} else
{if((state_val_85824 === (1)))
{var inst_85805 = (new Date());var inst_85806 = inst_85805.getTime();var inst_85807 = mspf;var inst_85808 = inst_85806;var state_85823__$1 = (function (){var statearr_85829 = state_85823;(statearr_85829[(7)] = inst_85807);
(statearr_85829[(10)] = inst_85808);
return statearr_85829;
})();var statearr_85830_85935 = state_85823__$1;(statearr_85830_85935[(2)] = null);
(statearr_85830_85935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___85933,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85933,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85834 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_85834[(0)] = state_machine__6188__auto__);
(statearr_85834[(1)] = (1));
return statearr_85834;
});
var state_machine__6188__auto____1 = (function (state_85823){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85823);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85835){if((e85835 instanceof Object))
{var ex__6191__auto__ = e85835;var statearr_85836_85936 = state_85823;(statearr_85836_85936[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85823);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85937 = state_85823;
state_85823 = G__85937;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85823){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85933,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85837 = f__6203__auto__.call(null);(statearr_85837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85933);
return statearr_85837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85933,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___85938 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85891){var state_val_85892 = (state_85891[(1)]);if((state_val_85892 === (7)))
{var inst_85886 = (state_85891[(2)]);var inst_85847 = inst_85886;var state_85891__$1 = (function (){var statearr_85893 = state_85891;(statearr_85893[(7)] = inst_85847);
return statearr_85893;
})();var statearr_85894_85939 = state_85891__$1;(statearr_85894_85939[(2)] = null);
(statearr_85894_85939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85892 === (1)))
{var inst_85838 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_85839 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_85840 = cljs.core.List.EMPTY;var inst_85841 = [inst_85840];var inst_85842 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_85839,inst_85841);var inst_85843 = [(0),(0)];var inst_85844 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85843,null));var inst_85845 = [(0),inst_85842,inst_85844,onModel,gl__$1];var inst_85846 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_85838,inst_85845);var inst_85847 = inst_85846;var state_85891__$1 = (function (){var statearr_85895 = state_85891;(statearr_85895[(7)] = inst_85847);
return statearr_85895;
})();var statearr_85896_85940 = state_85891__$1;(statearr_85896_85940[(2)] = null);
(statearr_85896_85940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85892 === (4)))
{var inst_85855 = (state_85891[(8)]);var inst_85853 = (state_85891[(9)]);var inst_85853__$1 = (state_85891[(2)]);var inst_85854 = cljs.core.nth.call(null,inst_85853__$1,(0),null);var inst_85855__$1 = cljs.core.nth.call(null,inst_85853__$1,(1),null);var inst_85859 = cljs.core._EQ_.call(null,onTick,inst_85855__$1);var state_85891__$1 = (function (){var statearr_85897 = state_85891;(statearr_85897[(8)] = inst_85855__$1);
(statearr_85897[(10)] = inst_85854);
(statearr_85897[(9)] = inst_85853__$1);
return statearr_85897;
})();if(inst_85859)
{var statearr_85898_85941 = state_85891__$1;(statearr_85898_85941[(1)] = (5));
} else
{var statearr_85899_85942 = state_85891__$1;(statearr_85899_85942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85892 === (6)))
{var inst_85855 = (state_85891[(8)]);var inst_85877 = cljs.core._EQ_.call(null,onView,inst_85855);var state_85891__$1 = state_85891;if(inst_85877)
{var statearr_85900_85943 = state_85891__$1;(statearr_85900_85943[(1)] = (8));
} else
{var statearr_85901_85944 = state_85891__$1;(statearr_85901_85944[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85892 === (3)))
{var inst_85889 = (state_85891[(2)]);var state_85891__$1 = state_85891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85891__$1,inst_85889);
} else
{if((state_val_85892 === (2)))
{var inst_85850 = [onView,onTick];var inst_85851 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85850,null));var state_85891__$1 = state_85891;return cljs.core.async.ioc_alts_BANG_.call(null,state_85891__$1,(4),inst_85851);
} else
{if((state_val_85892 === (9)))
{var inst_85847 = (state_85891[(7)]);var state_85891__$1 = state_85891;var statearr_85902_85945 = state_85891__$1;(statearr_85902_85945[(2)] = inst_85847);
(statearr_85902_85945[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85892 === (5)))
{var inst_85855 = (state_85891[(8)]);var inst_85854 = (state_85891[(10)]);var inst_85853 = (state_85891[(9)]);var inst_85847 = (state_85891[(7)]);var inst_85868 = cljs.core.async.chan.call(null,(1));var inst_85869 = (function (){var c__6202__auto____$1 = inst_85868;var expr__85857 = inst_85855;var pred__85856 = cljs.core._EQ_;var ch = inst_85855;var v = inst_85854;var vec__85849 = inst_85853;var ctx = inst_85847;return ((function (c__6202__auto____$1,expr__85857,pred__85856,ch,v,vec__85849,ctx,inst_85855,inst_85854,inst_85853,inst_85847,inst_85868,state_val_85892,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__85857,pred__85856,ch,v,vec__85849,ctx,inst_85855,inst_85854,inst_85853,inst_85847,inst_85868,state_val_85892,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_85866){var state_val_85867 = (state_85866[(1)]);if((state_val_85867 === (2)))
{var inst_85864 = (state_85866[(2)]);var state_85866__$1 = state_85866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85866__$1,inst_85864);
} else
{if((state_val_85867 === (1)))
{var inst_85861 = ["tick",v];var inst_85862 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85861,null));var state_85866__$1 = state_85866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85866__$1,(2),onModelEvent,inst_85862);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__85857,pred__85856,ch,v,vec__85849,ctx,inst_85855,inst_85854,inst_85853,inst_85847,inst_85868,state_val_85892,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__85857,pred__85856,ch,v,vec__85849,ctx,inst_85855,inst_85854,inst_85853,inst_85847,inst_85868,state_val_85892,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85906 = [null,null,null,null,null,null,null];(statearr_85906[(0)] = state_machine__6188__auto__);
(statearr_85906[(1)] = (1));
return statearr_85906;
});
var state_machine__6188__auto____1 = (function (state_85866){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85866);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85907){if((e85907 instanceof Object))
{var ex__6191__auto__ = e85907;var statearr_85908_85946 = state_85866;(statearr_85908_85946[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85866);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85947 = state_85866;
state_85866 = G__85947;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85866){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__85857,pred__85856,ch,v,vec__85849,ctx,inst_85855,inst_85854,inst_85853,inst_85847,inst_85868,state_val_85892,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85909 = f__6203__auto__.call(null);(statearr_85909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_85909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__85857,pred__85856,ch,v,vec__85849,ctx,inst_85855,inst_85854,inst_85853,inst_85847,inst_85868,state_val_85892,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_85870 = cljs.core.async.impl.dispatch.run.call(null,inst_85869);var inst_85871 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_85872 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_85871,null));var inst_85873 = cljs.core.partial.call(null,tool.particle.update,inst_85854);var inst_85874 = cljs.core.update_in.call(null,inst_85847,inst_85872,inst_85873);var inst_85875 = draw.call(null,inst_85874);var state_85891__$1 = (function (){var statearr_85910 = state_85891;(statearr_85910[(11)] = inst_85870);
return statearr_85910;
})();var statearr_85911_85948 = state_85891__$1;(statearr_85911_85948[(2)] = inst_85875);
(statearr_85911_85948[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85892 === (10)))
{var inst_85884 = (state_85891[(2)]);var state_85891__$1 = state_85891;var statearr_85912_85949 = state_85891__$1;(statearr_85912_85949[(2)] = inst_85884);
(statearr_85912_85949[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_85892 === (8)))
{var inst_85854 = (state_85891[(10)]);var inst_85847 = (state_85891[(7)]);var inst_85879 = (inst_85854[(0)]);var inst_85880 = (inst_85854[(1)]);var inst_85881 = app.particle.abstract$.onViewCommand.call(null,inst_85879,inst_85880,inst_85847);var state_85891__$1 = state_85891;var statearr_85913_85950 = state_85891__$1;(statearr_85913_85950[(2)] = inst_85881);
(statearr_85913_85950[(1)] = (10));
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
});})(c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_85917 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_85917[(0)] = state_machine__6188__auto__);
(statearr_85917[(1)] = (1));
return statearr_85917;
});
var state_machine__6188__auto____1 = (function (state_85891){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_85891);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e85918){if((e85918 instanceof Object))
{var ex__6191__auto__ = e85918;var statearr_85919_85951 = state_85891;(statearr_85919_85951[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e85918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__85952 = state_85891;
state_85891 = G__85952;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_85891){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_85891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_85920 = f__6203__auto__.call(null);(statearr_85920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___85938);
return statearr_85920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___85938,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
