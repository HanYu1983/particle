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
return (function (state_140441){var state_val_140442 = (state_140441[(1)]);if((state_val_140442 === (5)))
{var inst_140439 = (state_140441[(2)]);var state_140441__$1 = state_140441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140441__$1,inst_140439);
} else
{if((state_val_140442 === (4)))
{var inst_140409 = (state_140441[(2)]);var inst_140416 = [(0),(0),(0)];var inst_140417 = [(1),(0),(1),(1)];var inst_140418 = [(10),(20)];var inst_140419 = [(0),(0),(0)];var inst_140420 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];var inst_140421 = ["x","randStartAdd",(200),(0),(0),(0),(0)];var inst_140422 = ["y","randStartAdd",(200),(0),(0),(0),(0)];var inst_140423 = [inst_140420,inst_140421,inst_140422];var inst_140424 = {"position":inst_140416,"color":inst_140417,"size":inst_140418,"vel":inst_140419,"tex":"img_map","formulaList":inst_140423};var inst_140425 = [inst_140424];var inst_140426 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_140425};var inst_140427 = [(0),(0),(1),(1)];var inst_140428 = [(30),(10)];var inst_140429 = [(10),(10),(0)];var inst_140430 = [(0),(0),(0)];var inst_140431 = ["vx","linear",(300),(-300),(0),(0),(0)];var inst_140432 = ["vy","linear",(300),(-300),(0),(0),(0)];var inst_140433 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];var inst_140434 = ["emit-force","linear",(100),(2000),(0),(0),(0)];var inst_140435 = [inst_140431,inst_140432,inst_140433,inst_140434];var inst_140436 = {"id":"x1","emit":inst_140426,"color":inst_140427,"size":inst_140428,"pos":inst_140429,"vel":inst_140430,"tex":"img_face","formulaList":inst_140435};var inst_140437 = ["edit-particle",inst_140436];var state_140441__$1 = (function (){var statearr_140443 = state_140441;(statearr_140443[(7)] = inst_140409);
return statearr_140443;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140441__$1,(5),onView,inst_140437);
} else
{if((state_val_140442 === (3)))
{var inst_140406 = (state_140441[(2)]);var inst_140407 = cljs.core.async.timeout.call(null,(1100));var state_140441__$1 = (function (){var statearr_140444 = state_140441;(statearr_140444[(8)] = inst_140406);
return statearr_140444;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140441__$1,(4),inst_140407);
} else
{if((state_val_140442 === (2)))
{var inst_140399 = (state_140441[(2)]);var inst_140402 = [(10),(10),(0)];var inst_140403 = {"id":"x1","pos":inst_140402};var inst_140404 = ["edit-particle",inst_140403];var state_140441__$1 = (function (){var statearr_140445 = state_140441;(statearr_140445[(9)] = inst_140399);
return statearr_140445;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140441__$1,(3),onView,inst_140404);
} else
{if((state_val_140442 === (1)))
{var inst_140397 = cljs.core.async.timeout.call(null,(1000));var state_140441__$1 = state_140441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140441__$1,(2),inst_140397);
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
var state_machine__6188__auto____0 = (function (){var statearr_140449 = [null,null,null,null,null,null,null,null,null,null];(statearr_140449[(0)] = state_machine__6188__auto__);
(statearr_140449[(1)] = (1));
return statearr_140449;
});
var state_machine__6188__auto____1 = (function (state_140441){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140450){if((e140450 instanceof Object))
{var ex__6191__auto__ = e140450;var statearr_140451_140453 = state_140441;(statearr_140451_140453[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140454 = state_140441;
state_140441 = G__140454;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140441){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_140452 = f__6203__auto__.call(null);(statearr_140452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_140452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onModelEvent = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (((1000) / (60)) | (0));var canvas = $("#webgl");var gl__$1 = gl.util.getContext.call(null,(canvas[(0)]),(function (){var obj140635 = {};return obj140635;
})());var draw = app.particle.draw.draw3D.call(null,canvas,gl__$1);common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140639){var state_val_140640 = (state_140639[(1)]);if((state_val_140640 === (2)))
{var inst_140637 = (state_140639[(2)]);var state_140639__$1 = state_140639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140639__$1,inst_140637);
} else
{if((state_val_140640 === (1)))
{var state_140639__$1 = state_140639;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140639__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140644 = [null,null,null,null,null,null,null];(statearr_140644[(0)] = state_machine__6188__auto__);
(statearr_140644[(1)] = (1));
return statearr_140644;
});
var state_machine__6188__auto____1 = (function (state_140639){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140639);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140645){if((e140645 instanceof Object))
{var ex__6191__auto__ = e140645;var statearr_140646_140813 = state_140639;(statearr_140646_140813[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140639);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140814 = state_140639;
state_140639 = G__140814;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140639){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140647 = f__6203__auto__.call(null);(statearr_140647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_140647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return c__6202__auto__;
});})(onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140815 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140815,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140815,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140661){var state_val_140662 = (state_140661[(1)]);if((state_val_140662 === (4)))
{var inst_140651 = (state_140661[(2)]);var inst_140652 = cljs.core.nth.call(null,inst_140651,(0),null);var inst_140653 = cljs.core.nth.call(null,inst_140651,(1),null);var inst_140654 = cljs.core.nth.call(null,inst_140651,(2),null);var inst_140655 = [inst_140652,inst_140653,inst_140654];var inst_140656 = common.onModel.onNext(inst_140655);var state_140661__$1 = (function (){var statearr_140663 = state_140661;(statearr_140663[(7)] = inst_140656);
return statearr_140663;
})();var statearr_140664_140816 = state_140661__$1;(statearr_140664_140816[(2)] = null);
(statearr_140664_140816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140662 === (3)))
{var inst_140659 = (state_140661[(2)]);var state_140661__$1 = state_140661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140661__$1,inst_140659);
} else
{if((state_val_140662 === (2)))
{var state_140661__$1 = state_140661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140661__$1,(4),onModel);
} else
{if((state_val_140662 === (1)))
{var state_140661__$1 = state_140661;var statearr_140665_140817 = state_140661__$1;(statearr_140665_140817[(2)] = null);
(statearr_140665_140817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___140815,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140815,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140669 = [null,null,null,null,null,null,null,null];(statearr_140669[(0)] = state_machine__6188__auto__);
(statearr_140669[(1)] = (1));
return statearr_140669;
});
var state_machine__6188__auto____1 = (function (state_140661){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140661);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140670){if((e140670 instanceof Object))
{var ex__6191__auto__ = e140670;var statearr_140671_140818 = state_140661;(statearr_140671_140818[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140819 = state_140661;
state_140661 = G__140819;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140661){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140815,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140672 = f__6203__auto__.call(null);(statearr_140672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140815);
return statearr_140672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140815,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140820 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140820,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140820,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140685){var state_val_140686 = (state_140685[(1)]);if((state_val_140686 === (4)))
{var inst_140676 = (state_140685[(2)]);var inst_140677 = cljs.core.nth.call(null,inst_140676,(0),null);var inst_140678 = cljs.core.nth.call(null,inst_140676,(1),null);var inst_140679 = [inst_140677,inst_140678];var inst_140680 = common.onModelEvent.onNext(inst_140679);var state_140685__$1 = (function (){var statearr_140687 = state_140685;(statearr_140687[(7)] = inst_140680);
return statearr_140687;
})();var statearr_140688_140821 = state_140685__$1;(statearr_140688_140821[(2)] = null);
(statearr_140688_140821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140686 === (3)))
{var inst_140683 = (state_140685[(2)]);var state_140685__$1 = state_140685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140685__$1,inst_140683);
} else
{if((state_val_140686 === (2)))
{var state_140685__$1 = state_140685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140685__$1,(4),onModelEvent);
} else
{if((state_val_140686 === (1)))
{var state_140685__$1 = state_140685;var statearr_140689_140822 = state_140685__$1;(statearr_140689_140822[(2)] = null);
(statearr_140689_140822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___140820,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140820,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140693 = [null,null,null,null,null,null,null,null];(statearr_140693[(0)] = state_machine__6188__auto__);
(statearr_140693[(1)] = (1));
return statearr_140693;
});
var state_machine__6188__auto____1 = (function (state_140685){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140685);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140694){if((e140694 instanceof Object))
{var ex__6191__auto__ = e140694;var statearr_140695_140823 = state_140685;(statearr_140695_140823[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140824 = state_140685;
state_140685 = G__140824;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140685){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140820,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140696 = f__6203__auto__.call(null);(statearr_140696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140820);
return statearr_140696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140820,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140825 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140825,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140825,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140715){var state_val_140716 = (state_140715[(1)]);if((state_val_140716 === (5)))
{var inst_140699 = (state_140715[(7)]);var inst_140706 = (state_140715[(8)]);var inst_140710 = (state_140715[(2)]);var tmp140717 = inst_140699;var inst_140699__$1 = tmp140717;var inst_140700 = inst_140706;var state_140715__$1 = (function (){var statearr_140718 = state_140715;(statearr_140718[(7)] = inst_140699__$1);
(statearr_140718[(9)] = inst_140710);
(statearr_140718[(10)] = inst_140700);
return statearr_140718;
})();var statearr_140719_140826 = state_140715__$1;(statearr_140719_140826[(2)] = null);
(statearr_140719_140826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140716 === (4)))
{var inst_140706 = (state_140715[(8)]);var inst_140700 = (state_140715[(10)]);var inst_140704 = (state_140715[(2)]);var inst_140705 = (new Date());var inst_140706__$1 = inst_140705.getTime();var inst_140707 = (inst_140706__$1 - inst_140700);var inst_140708 = (inst_140707 / (1000));var state_140715__$1 = (function (){var statearr_140720 = state_140715;(statearr_140720[(11)] = inst_140704);
(statearr_140720[(8)] = inst_140706__$1);
return statearr_140720;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140715__$1,(5),onTick,inst_140708);
} else
{if((state_val_140716 === (3)))
{var inst_140713 = (state_140715[(2)]);var state_140715__$1 = state_140715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140715__$1,inst_140713);
} else
{if((state_val_140716 === (2)))
{var inst_140699 = (state_140715[(7)]);var inst_140702 = cljs.core.async.timeout.call(null,inst_140699);var state_140715__$1 = state_140715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_140715__$1,(4),inst_140702);
} else
{if((state_val_140716 === (1)))
{var inst_140697 = (new Date());var inst_140698 = inst_140697.getTime();var inst_140699 = mspf;var inst_140700 = inst_140698;var state_140715__$1 = (function (){var statearr_140721 = state_140715;(statearr_140721[(7)] = inst_140699);
(statearr_140721[(10)] = inst_140700);
return statearr_140721;
})();var statearr_140722_140827 = state_140715__$1;(statearr_140722_140827[(2)] = null);
(statearr_140722_140827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___140825,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140825,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140726 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_140726[(0)] = state_machine__6188__auto__);
(statearr_140726[(1)] = (1));
return statearr_140726;
});
var state_machine__6188__auto____1 = (function (state_140715){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140715);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140727){if((e140727 instanceof Object))
{var ex__6191__auto__ = e140727;var statearr_140728_140828 = state_140715;(statearr_140728_140828[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140829 = state_140715;
state_140715 = G__140829;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140715){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140825,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140729 = f__6203__auto__.call(null);(statearr_140729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140825);
return statearr_140729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140825,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
var c__6202__auto___140830 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140783){var state_val_140784 = (state_140783[(1)]);if((state_val_140784 === (7)))
{var inst_140778 = (state_140783[(2)]);var inst_140739 = inst_140778;var state_140783__$1 = (function (){var statearr_140785 = state_140783;(statearr_140785[(7)] = inst_140739);
return statearr_140785;
})();var statearr_140786_140831 = state_140783__$1;(statearr_140786_140831[(2)] = null);
(statearr_140786_140831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140784 === (1)))
{var inst_140730 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"gl","gl",-246422634)];var inst_140731 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];var inst_140732 = cljs.core.List.EMPTY;var inst_140733 = [inst_140732,(200)];var inst_140734 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_140731,inst_140733);var inst_140735 = [(0),(0)];var inst_140736 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140735,null));var inst_140737 = [(0),inst_140734,inst_140736,onModel,gl__$1];var inst_140738 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_140730,inst_140737);var inst_140739 = inst_140738;var state_140783__$1 = (function (){var statearr_140787 = state_140783;(statearr_140787[(7)] = inst_140739);
return statearr_140787;
})();var statearr_140788_140832 = state_140783__$1;(statearr_140788_140832[(2)] = null);
(statearr_140788_140832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140784 === (4)))
{var inst_140747 = (state_140783[(8)]);var inst_140745 = (state_140783[(9)]);var inst_140745__$1 = (state_140783[(2)]);var inst_140746 = cljs.core.nth.call(null,inst_140745__$1,(0),null);var inst_140747__$1 = cljs.core.nth.call(null,inst_140745__$1,(1),null);var inst_140751 = cljs.core._EQ_.call(null,onTick,inst_140747__$1);var state_140783__$1 = (function (){var statearr_140789 = state_140783;(statearr_140789[(8)] = inst_140747__$1);
(statearr_140789[(9)] = inst_140745__$1);
(statearr_140789[(10)] = inst_140746);
return statearr_140789;
})();if(inst_140751)
{var statearr_140790_140833 = state_140783__$1;(statearr_140790_140833[(1)] = (5));
} else
{var statearr_140791_140834 = state_140783__$1;(statearr_140791_140834[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140784 === (6)))
{var inst_140747 = (state_140783[(8)]);var inst_140769 = cljs.core._EQ_.call(null,onView,inst_140747);var state_140783__$1 = state_140783;if(inst_140769)
{var statearr_140792_140835 = state_140783__$1;(statearr_140792_140835[(1)] = (8));
} else
{var statearr_140793_140836 = state_140783__$1;(statearr_140793_140836[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140784 === (3)))
{var inst_140781 = (state_140783[(2)]);var state_140783__$1 = state_140783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140783__$1,inst_140781);
} else
{if((state_val_140784 === (2)))
{var inst_140742 = [onView,onTick];var inst_140743 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140742,null));var state_140783__$1 = state_140783;return cljs.core.async.ioc_alts_BANG_.call(null,state_140783__$1,(4),inst_140743);
} else
{if((state_val_140784 === (9)))
{var inst_140739 = (state_140783[(7)]);var state_140783__$1 = state_140783;var statearr_140794_140837 = state_140783__$1;(statearr_140794_140837[(2)] = inst_140739);
(statearr_140794_140837[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140784 === (5)))
{var inst_140739 = (state_140783[(7)]);var inst_140747 = (state_140783[(8)]);var inst_140745 = (state_140783[(9)]);var inst_140746 = (state_140783[(10)]);var inst_140760 = cljs.core.async.chan.call(null,(1));var inst_140761 = (function (){var c__6202__auto____$1 = inst_140760;var expr__140749 = inst_140747;var pred__140748 = cljs.core._EQ_;var ch = inst_140747;var v = inst_140746;var vec__140741 = inst_140745;var ctx = inst_140739;return ((function (c__6202__auto____$1,expr__140749,pred__140748,ch,v,vec__140741,ctx,inst_140739,inst_140747,inst_140745,inst_140746,inst_140760,state_val_140784,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto____$1,expr__140749,pred__140748,ch,v,vec__140741,ctx,inst_140739,inst_140747,inst_140745,inst_140746,inst_140760,state_val_140784,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function (state_140758){var state_val_140759 = (state_140758[(1)]);if((state_val_140759 === (2)))
{var inst_140756 = (state_140758[(2)]);var state_140758__$1 = state_140758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_140758__$1,inst_140756);
} else
{if((state_val_140759 === (1)))
{var inst_140753 = ["tick",v];var inst_140754 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140753,null));var state_140758__$1 = state_140758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_140758__$1,(2),onModelEvent,inst_140754);
} else
{return null;
}
}
});})(c__6202__auto____$1,expr__140749,pred__140748,ch,v,vec__140741,ctx,inst_140739,inst_140747,inst_140745,inst_140746,inst_140760,state_val_140784,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto____$1,expr__140749,pred__140748,ch,v,vec__140741,ctx,inst_140739,inst_140747,inst_140745,inst_140746,inst_140760,state_val_140784,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140798 = [null,null,null,null,null,null,null];(statearr_140798[(0)] = state_machine__6188__auto__);
(statearr_140798[(1)] = (1));
return statearr_140798;
});
var state_machine__6188__auto____1 = (function (state_140758){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140758);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140799){if((e140799 instanceof Object))
{var ex__6191__auto__ = e140799;var statearr_140800_140838 = state_140758;(statearr_140800_140838[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140839 = state_140758;
state_140758 = G__140839;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140758){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto____$1,expr__140749,pred__140748,ch,v,vec__140741,ctx,inst_140739,inst_140747,inst_140745,inst_140746,inst_140760,state_val_140784,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140801 = f__6203__auto__.call(null);(statearr_140801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_140801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(c__6202__auto____$1,expr__140749,pred__140748,ch,v,vec__140741,ctx,inst_140739,inst_140747,inst_140745,inst_140746,inst_140760,state_val_140784,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var inst_140762 = cljs.core.async.impl.dispatch.run.call(null,inst_140761);var inst_140763 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_140764 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_140763,null));var inst_140765 = cljs.core.partial.call(null,tool.particle.update,inst_140746);var inst_140766 = cljs.core.update_in.call(null,inst_140739,inst_140764,inst_140765);var inst_140767 = draw.call(null,inst_140766);var state_140783__$1 = (function (){var statearr_140802 = state_140783;(statearr_140802[(11)] = inst_140762);
return statearr_140802;
})();var statearr_140803_140840 = state_140783__$1;(statearr_140803_140840[(2)] = inst_140767);
(statearr_140803_140840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140784 === (10)))
{var inst_140776 = (state_140783[(2)]);var state_140783__$1 = state_140783;var statearr_140804_140841 = state_140783__$1;(statearr_140804_140841[(2)] = inst_140776);
(statearr_140804_140841[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_140784 === (8)))
{var inst_140739 = (state_140783[(7)]);var inst_140746 = (state_140783[(10)]);var inst_140771 = (inst_140746[(0)]);var inst_140772 = (inst_140746[(1)]);var inst_140773 = app.particle.abstract$.onViewCommand.call(null,inst_140771,inst_140772,inst_140739);var state_140783__$1 = state_140783;var statearr_140805_140842 = state_140783__$1;(statearr_140805_140842[(2)] = inst_140773);
(statearr_140805_140842[(1)] = (10));
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
});})(c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
;return ((function (switch__6187__auto__,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_140809 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_140809[(0)] = state_machine__6188__auto__);
(statearr_140809[(1)] = (1));
return statearr_140809;
});
var state_machine__6188__auto____1 = (function (state_140783){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_140783);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e140810){if((e140810 instanceof Object))
{var ex__6191__auto__ = e140810;var statearr_140811_140843 = state_140783;(statearr_140811_140843[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_140783);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e140810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__140844 = state_140783;
state_140783 = G__140844;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_140783){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_140783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
})();var state__6204__auto__ = (function (){var statearr_140812 = f__6203__auto__.call(null);(statearr_140812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___140830);
return statearr_140812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___140830,onView,onModel,onModelEvent,onTick,mspf,canvas,gl__$1,draw))
);
return null;
});
app.particle.main.main.call(null);
