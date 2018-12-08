// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gl.util');
goog.require('app.particle.abstract$');
goog.require('app.particle.impl');
goog.require('app.particle.draw');
goog.require('tool.particle');
app.particle.main.demo = (function app$particle$main$demo(onView){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_5776){
var state_val_5777 = (state_5776[(1)]);
if((state_val_5777 === (1))){
var inst_5732 = cljs.core.async.timeout.call(null,(1000));
var state_5776__$1 = state_5776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5776__$1,(2),inst_5732);
} else {
if((state_val_5777 === (2))){
var inst_5734 = (state_5776[(2)]);
var inst_5737 = [(10),(10),(0)];
var inst_5738 = {"id":"x1","pos":inst_5737};
var inst_5739 = ["edit-particle",inst_5738];
var state_5776__$1 = (function (){var statearr_5778 = state_5776;
(statearr_5778[(7)] = inst_5734);

return statearr_5778;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5776__$1,(3),onView,inst_5739);
} else {
if((state_val_5777 === (3))){
var inst_5741 = (state_5776[(2)]);
var inst_5742 = cljs.core.async.timeout.call(null,(1100));
var state_5776__$1 = (function (){var statearr_5779 = state_5776;
(statearr_5779[(8)] = inst_5741);

return statearr_5779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5776__$1,(4),inst_5742);
} else {
if((state_val_5777 === (4))){
var inst_5744 = (state_5776[(2)]);
var inst_5751 = [(0),(0),(0)];
var inst_5752 = [(1),(0),(1),(1)];
var inst_5753 = [(10),(20)];
var inst_5754 = [(0),(0),(0)];
var inst_5755 = ["vr","randStartAdd",6.28,(0),(0),(0),(0)];
var inst_5756 = ["x","randStartAdd",(200),(0),(0),(0),(0)];
var inst_5757 = ["y","randStartAdd",(200),(0),(0),(0),(0)];
var inst_5758 = [inst_5755,inst_5756,inst_5757];
var inst_5759 = {"position":inst_5751,"color":inst_5752,"size":inst_5753,"vel":inst_5754,"tex":"img_face","formulaList":inst_5758};
var inst_5760 = [inst_5759];
var inst_5761 = {"duration":0.05,"angle":(0),"force":(10),"range":(0),"prototype":inst_5760};
var inst_5762 = [(0),(0),(1),(1)];
var inst_5763 = [(100),(100)];
var inst_5764 = [(10),(10),(0)];
var inst_5765 = [(0),(0),(0)];
var inst_5766 = ["vx","linear",(300),(-300),(0),(0),(0)];
var inst_5767 = ["vy","linear",(300),(-300),(0),(0),(0)];
var inst_5768 = ["emit-angle","linear",(0),6.28,(0),(0),(0)];
var inst_5769 = ["emit-force","linear",(100),(2000),(0),(0),(0)];
var inst_5770 = [inst_5766,inst_5767,inst_5768,inst_5769];
var inst_5771 = {"id":"x1","emit":inst_5761,"color":inst_5762,"size":inst_5763,"pos":inst_5764,"vel":inst_5765,"tex":"img_face","formulaList":inst_5770};
var inst_5772 = ["edit-particle",inst_5771];
var state_5776__$1 = (function (){var statearr_5780 = state_5776;
(statearr_5780[(9)] = inst_5744);

return statearr_5780;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5776__$1,(5),onView,inst_5772);
} else {
if((state_val_5777 === (5))){
var inst_5774 = (state_5776[(2)]);
var state_5776__$1 = state_5776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5776__$1,inst_5774);
} else {
return null;
}
}
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$particle$main$demo_$_state_machine__2793__auto__ = null;
var app$particle$main$demo_$_state_machine__2793__auto____0 = (function (){
var statearr_5781 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5781[(0)] = app$particle$main$demo_$_state_machine__2793__auto__);

(statearr_5781[(1)] = (1));

return statearr_5781;
});
var app$particle$main$demo_$_state_machine__2793__auto____1 = (function (state_5776){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5782){if((e5782 instanceof Object)){
var ex__2796__auto__ = e5782;
var statearr_5783_5785 = state_5776;
(statearr_5783_5785[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5786 = state_5776;
state_5776 = G__5786;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$main$demo_$_state_machine__2793__auto__ = function(state_5776){
switch(arguments.length){
case 0:
return app$particle$main$demo_$_state_machine__2793__auto____0.call(this);
case 1:
return app$particle$main$demo_$_state_machine__2793__auto____1.call(this,state_5776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$demo_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$demo_$_state_machine__2793__auto____0;
app$particle$main$demo_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$demo_$_state_machine__2793__auto____1;
return app$particle$main$demo_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_5784 = f__2883__auto__.call(null);
(statearr_5784[(6)] = c__2882__auto__);

return statearr_5784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
app.particle.main.main = (function app$particle$main$main(){
var onView = cljs.core.async.chan.call(null);
var onModel = cljs.core.async.chan.call(null);
var onModelEvent = cljs.core.async.chan.call(null);
var onTick = cljs.core.async.chan.call(null);
var fps = (30);
var mspf = (((1000) / fps) | (0));
common.onView.subscribe(((function (onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_5790){
var state_val_5791 = (state_5790[(1)]);
if((state_val_5791 === (1))){
var state_5790__$1 = state_5790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5790__$1,(2),onView,data);
} else {
if((state_val_5791 === (2))){
var inst_5788 = (state_5790[(2)]);
var state_5790__$1 = state_5790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5790__$1,inst_5788);
} else {
return null;
}
}
});})(c__2882__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__2792__auto__,c__2882__auto__,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__2793__auto__ = null;
var app$particle$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5792 = [null,null,null,null,null,null,null];
(statearr_5792[(0)] = app$particle$main$main_$_state_machine__2793__auto__);

(statearr_5792[(1)] = (1));

return statearr_5792;
});
var app$particle$main$main_$_state_machine__2793__auto____1 = (function (state_5790){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5793){if((e5793 instanceof Object)){
var ex__2796__auto__ = e5793;
var statearr_5794_5969 = state_5790;
(statearr_5794_5969[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5970 = state_5790;
state_5790 = G__5970;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__2793__auto__ = function(state_5790){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__2793__auto____1.call(this,state_5790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__2793__auto____0;
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__2793__auto____1;
return app$particle$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__2884__auto__ = (function (){var statearr_5795 = f__2883__auto__.call(null);
(statearr_5795[(6)] = c__2882__auto__);

return statearr_5795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,onView,onModel,onModelEvent,onTick,fps,mspf))
);

return c__2882__auto__;
});})(onView,onModel,onModelEvent,onTick,fps,mspf))
);

var c__2882__auto___5971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5971,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5971,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_5811){
var state_val_5812 = (state_5811[(1)]);
if((state_val_5812 === (1))){
var state_5811__$1 = state_5811;
var statearr_5813_5972 = state_5811__$1;
(statearr_5813_5972[(2)] = null);

(statearr_5813_5972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5812 === (2))){
var state_5811__$1 = state_5811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5811__$1,(4),onModel);
} else {
if((state_val_5812 === (3))){
var inst_5809 = (state_5811[(2)]);
var state_5811__$1 = state_5811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5811__$1,inst_5809);
} else {
if((state_val_5812 === (4))){
var inst_5801 = (state_5811[(2)]);
var inst_5802 = cljs.core.nth.call(null,inst_5801,(0),null);
var inst_5803 = cljs.core.nth.call(null,inst_5801,(1),null);
var inst_5804 = cljs.core.nth.call(null,inst_5801,(2),null);
var inst_5805 = [inst_5802,inst_5803,inst_5804];
var inst_5806 = common.onModel.onNext(inst_5805);
var state_5811__$1 = (function (){var statearr_5814 = state_5811;
(statearr_5814[(7)] = inst_5806);

return statearr_5814;
})();
var statearr_5815_5973 = state_5811__$1;
(statearr_5815_5973[(2)] = null);

(statearr_5815_5973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto___5971,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__2792__auto__,c__2882__auto___5971,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__2793__auto__ = null;
var app$particle$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5816 = [null,null,null,null,null,null,null,null];
(statearr_5816[(0)] = app$particle$main$main_$_state_machine__2793__auto__);

(statearr_5816[(1)] = (1));

return statearr_5816;
});
var app$particle$main$main_$_state_machine__2793__auto____1 = (function (state_5811){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5817){if((e5817 instanceof Object)){
var ex__2796__auto__ = e5817;
var statearr_5818_5974 = state_5811;
(statearr_5818_5974[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5975 = state_5811;
state_5811 = G__5975;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__2793__auto__ = function(state_5811){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__2793__auto____1.call(this,state_5811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__2793__auto____0;
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__2793__auto____1;
return app$particle$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5971,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__2884__auto__ = (function (){var statearr_5819 = f__2883__auto__.call(null);
(statearr_5819[(6)] = c__2882__auto___5971);

return statearr_5819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5971,onView,onModel,onModelEvent,onTick,fps,mspf))
);


var c__2882__auto___5976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5976,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5976,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_5834){
var state_val_5835 = (state_5834[(1)]);
if((state_val_5835 === (1))){
var state_5834__$1 = state_5834;
var statearr_5836_5977 = state_5834__$1;
(statearr_5836_5977[(2)] = null);

(statearr_5836_5977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5835 === (2))){
var state_5834__$1 = state_5834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5834__$1,(4),onModelEvent);
} else {
if((state_val_5835 === (3))){
var inst_5832 = (state_5834[(2)]);
var state_5834__$1 = state_5834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5834__$1,inst_5832);
} else {
if((state_val_5835 === (4))){
var inst_5825 = (state_5834[(2)]);
var inst_5826 = cljs.core.nth.call(null,inst_5825,(0),null);
var inst_5827 = cljs.core.nth.call(null,inst_5825,(1),null);
var inst_5828 = [inst_5826,inst_5827];
var inst_5829 = common.onModelEvent.onNext(inst_5828);
var state_5834__$1 = (function (){var statearr_5837 = state_5834;
(statearr_5837[(7)] = inst_5829);

return statearr_5837;
})();
var statearr_5838_5978 = state_5834__$1;
(statearr_5838_5978[(2)] = null);

(statearr_5838_5978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto___5976,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__2792__auto__,c__2882__auto___5976,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__2793__auto__ = null;
var app$particle$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5839 = [null,null,null,null,null,null,null,null];
(statearr_5839[(0)] = app$particle$main$main_$_state_machine__2793__auto__);

(statearr_5839[(1)] = (1));

return statearr_5839;
});
var app$particle$main$main_$_state_machine__2793__auto____1 = (function (state_5834){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5840){if((e5840 instanceof Object)){
var ex__2796__auto__ = e5840;
var statearr_5841_5979 = state_5834;
(statearr_5841_5979[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5980 = state_5834;
state_5834 = G__5980;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__2793__auto__ = function(state_5834){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__2793__auto____1.call(this,state_5834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__2793__auto____0;
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__2793__auto____1;
return app$particle$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5976,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__2884__auto__ = (function (){var statearr_5842 = f__2883__auto__.call(null);
(statearr_5842[(6)] = c__2882__auto___5976);

return statearr_5842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5976,onView,onModel,onModelEvent,onTick,fps,mspf))
);


var c__2882__auto___5981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5981,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5981,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_5861){
var state_val_5862 = (state_5861[(1)]);
if((state_val_5862 === (1))){
var inst_5843 = (new Date());
var inst_5844 = inst_5843.getTime();
var inst_5845 = mspf;
var inst_5846 = inst_5844;
var state_5861__$1 = (function (){var statearr_5863 = state_5861;
(statearr_5863[(7)] = inst_5846);

(statearr_5863[(8)] = inst_5845);

return statearr_5863;
})();
var statearr_5864_5982 = state_5861__$1;
(statearr_5864_5982[(2)] = null);

(statearr_5864_5982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5862 === (2))){
var inst_5845 = (state_5861[(8)]);
var inst_5848 = cljs.core.async.timeout.call(null,inst_5845);
var state_5861__$1 = state_5861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5861__$1,(4),inst_5848);
} else {
if((state_val_5862 === (3))){
var inst_5859 = (state_5861[(2)]);
var state_5861__$1 = state_5861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5861__$1,inst_5859);
} else {
if((state_val_5862 === (4))){
var inst_5846 = (state_5861[(7)]);
var inst_5852 = (state_5861[(9)]);
var inst_5850 = (state_5861[(2)]);
var inst_5851 = (new Date());
var inst_5852__$1 = inst_5851.getTime();
var inst_5853 = (inst_5852__$1 - inst_5846);
var inst_5854 = (inst_5853 / (1000));
var state_5861__$1 = (function (){var statearr_5866 = state_5861;
(statearr_5866[(10)] = inst_5850);

(statearr_5866[(9)] = inst_5852__$1);

return statearr_5866;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5861__$1,(5),onTick,inst_5854);
} else {
if((state_val_5862 === (5))){
var inst_5852 = (state_5861[(9)]);
var inst_5845 = (state_5861[(8)]);
var inst_5856 = (state_5861[(2)]);
var tmp5865 = inst_5845;
var inst_5845__$1 = tmp5865;
var inst_5846 = inst_5852;
var state_5861__$1 = (function (){var statearr_5867 = state_5861;
(statearr_5867[(7)] = inst_5846);

(statearr_5867[(11)] = inst_5856);

(statearr_5867[(8)] = inst_5845__$1);

return statearr_5867;
})();
var statearr_5868_5983 = state_5861__$1;
(statearr_5868_5983[(2)] = null);

(statearr_5868_5983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__2882__auto___5981,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__2792__auto__,c__2882__auto___5981,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__2793__auto__ = null;
var app$particle$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5869 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5869[(0)] = app$particle$main$main_$_state_machine__2793__auto__);

(statearr_5869[(1)] = (1));

return statearr_5869;
});
var app$particle$main$main_$_state_machine__2793__auto____1 = (function (state_5861){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5870){if((e5870 instanceof Object)){
var ex__2796__auto__ = e5870;
var statearr_5871_5984 = state_5861;
(statearr_5871_5984[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5985 = state_5861;
state_5861 = G__5985;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__2793__auto__ = function(state_5861){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__2793__auto____1.call(this,state_5861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__2793__auto____0;
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__2793__auto____1;
return app$particle$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5981,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__2884__auto__ = (function (){var statearr_5872 = f__2883__auto__.call(null);
(statearr_5872[(6)] = c__2882__auto___5981);

return statearr_5872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5981,onView,onModel,onModelEvent,onTick,fps,mspf))
);


var c__2882__auto___5986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_5940){
var state_val_5941 = (state_5940[(1)]);
if((state_val_5941 === (7))){
var inst_5935 = (state_5940[(2)]);
var inst_5886 = inst_5935;
var state_5940__$1 = (function (){var statearr_5942 = state_5940;
(statearr_5942[(7)] = inst_5886);

return statearr_5942;
})();
var statearr_5943_5987 = state_5940__$1;
(statearr_5943_5987[(2)] = null);

(statearr_5943_5987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (1))){
var inst_5873 = [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];
var inst_5874 = [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.Keyword(null,"limit","limit",-1355822363)];
var inst_5875 = cljs.core.List.EMPTY;
var inst_5876 = [inst_5875,(200)];
var inst_5877 = cljs.core.PersistentHashMap.fromArrays(inst_5874,inst_5876);
var inst_5878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5879 = [(0),(0),(0)];
var inst_5880 = (new cljs.core.PersistentVector(null,3,(5),inst_5878,inst_5879,null));
var inst_5881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5882 = [(0),(0)];
var inst_5883 = (new cljs.core.PersistentVector(null,2,(5),inst_5881,inst_5882,null));
var inst_5884 = [inst_5877,inst_5880,inst_5883,onModel];
var inst_5885 = cljs.core.PersistentHashMap.fromArrays(inst_5873,inst_5884);
var inst_5886 = inst_5885;
var state_5940__$1 = (function (){var statearr_5944 = state_5940;
(statearr_5944[(7)] = inst_5886);

return statearr_5944;
})();
var statearr_5945_5988 = state_5940__$1;
(statearr_5945_5988[(2)] = null);

(statearr_5945_5988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (4))){
var inst_5897 = (state_5940[(8)]);
var inst_5895 = (state_5940[(9)]);
var inst_5895__$1 = (state_5940[(2)]);
var inst_5896 = cljs.core.nth.call(null,inst_5895__$1,(0),null);
var inst_5897__$1 = cljs.core.nth.call(null,inst_5895__$1,(1),null);
var inst_5901 = cljs.core._EQ_.call(null,onTick,inst_5897__$1);
var state_5940__$1 = (function (){var statearr_5946 = state_5940;
(statearr_5946[(8)] = inst_5897__$1);

(statearr_5946[(10)] = inst_5896);

(statearr_5946[(9)] = inst_5895__$1);

return statearr_5946;
})();
if(inst_5901){
var statearr_5947_5989 = state_5940__$1;
(statearr_5947_5989[(1)] = (5));

} else {
var statearr_5948_5990 = state_5940__$1;
(statearr_5948_5990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (13))){
var inst_5933 = (state_5940[(2)]);
var state_5940__$1 = state_5940;
var statearr_5949_5991 = state_5940__$1;
(statearr_5949_5991[(2)] = inst_5933);

(statearr_5949_5991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (6))){
var inst_5897 = (state_5940[(8)]);
var inst_5926 = cljs.core._EQ_.call(null,onView,inst_5897);
var state_5940__$1 = state_5940;
if(inst_5926){
var statearr_5950_5992 = state_5940__$1;
(statearr_5950_5992[(1)] = (11));

} else {
var statearr_5951_5993 = state_5940__$1;
(statearr_5951_5993[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (3))){
var inst_5938 = (state_5940[(2)]);
var state_5940__$1 = state_5940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5940__$1,inst_5938);
} else {
if((state_val_5941 === (12))){
var inst_5886 = (state_5940[(7)]);
var state_5940__$1 = state_5940;
var statearr_5952_5994 = state_5940__$1;
(statearr_5952_5994[(2)] = inst_5886);

(statearr_5952_5994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (2))){
var inst_5891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5892 = [onView,onTick];
var inst_5893 = (new cljs.core.PersistentVector(null,2,(5),inst_5891,inst_5892,null));
var state_5940__$1 = state_5940;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5940__$1,(4),inst_5893);
} else {
if((state_val_5941 === (11))){
var inst_5896 = (state_5940[(10)]);
var inst_5886 = (state_5940[(7)]);
var inst_5928 = (inst_5896[(0)]);
var inst_5929 = (inst_5896[(1)]);
var inst_5930 = app.particle.abstract$.onViewCommand.call(null,inst_5928,inst_5929,inst_5886);
var state_5940__$1 = state_5940;
var statearr_5953_5995 = state_5940__$1;
(statearr_5953_5995[(2)] = inst_5930);

(statearr_5953_5995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (9))){
var state_5940__$1 = state_5940;
var statearr_5954_5996 = state_5940__$1;
(statearr_5954_5996[(2)] = cljs.core.identity);

(statearr_5954_5996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (5))){
var inst_5903 = (state_5940[(11)]);
var inst_5886 = (state_5940[(7)]);
var inst_5903__$1 = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(inst_5886);
var state_5940__$1 = (function (){var statearr_5955 = state_5940;
(statearr_5955[(11)] = inst_5903__$1);

return statearr_5955;
})();
if(cljs.core.truth_(inst_5903__$1)){
var statearr_5956_5997 = state_5940__$1;
(statearr_5956_5997[(1)] = (8));

} else {
var statearr_5957_5998 = state_5940__$1;
(statearr_5957_5998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (10))){
var inst_5897 = (state_5940[(8)]);
var inst_5896 = (state_5940[(10)]);
var inst_5895 = (state_5940[(9)]);
var inst_5886 = (state_5940[(7)]);
var inst_5907 = (state_5940[(2)]);
var inst_5916 = cljs.core.async.chan.call(null,(1));
var inst_5917 = (function (){var ctx = inst_5886;
var vec__5888 = inst_5895;
var v = inst_5896;
var ch = inst_5897;
var pred__5898 = cljs.core._EQ_;
var expr__5899 = inst_5897;
var draw = inst_5907;
var c__2882__auto____$1 = inst_5916;
return ((function (ctx,vec__5888,v,ch,pred__5898,expr__5899,draw,c__2882__auto____$1,inst_5897,inst_5896,inst_5895,inst_5886,inst_5907,inst_5916,state_val_5941,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (ctx,vec__5888,v,ch,pred__5898,expr__5899,draw,c__2882__auto____$1,inst_5897,inst_5896,inst_5895,inst_5886,inst_5907,inst_5916,state_val_5941,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function (state_5914){
var state_val_5915 = (state_5914[(1)]);
if((state_val_5915 === (1))){
var inst_5908 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5909 = ["tick",v];
var inst_5910 = (new cljs.core.PersistentVector(null,2,(5),inst_5908,inst_5909,null));
var state_5914__$1 = state_5914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5914__$1,(2),onModelEvent,inst_5910);
} else {
if((state_val_5915 === (2))){
var inst_5912 = (state_5914[(2)]);
var state_5914__$1 = state_5914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5914__$1,inst_5912);
} else {
return null;
}
}
});})(ctx,vec__5888,v,ch,pred__5898,expr__5899,draw,c__2882__auto____$1,inst_5897,inst_5896,inst_5895,inst_5886,inst_5907,inst_5916,state_val_5941,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__2792__auto__,ctx,vec__5888,v,ch,pred__5898,expr__5899,draw,c__2882__auto____$1,inst_5897,inst_5896,inst_5895,inst_5886,inst_5907,inst_5916,state_val_5941,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__2793__auto__ = null;
var app$particle$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5958 = [null,null,null,null,null,null,null];
(statearr_5958[(0)] = app$particle$main$main_$_state_machine__2793__auto__);

(statearr_5958[(1)] = (1));

return statearr_5958;
});
var app$particle$main$main_$_state_machine__2793__auto____1 = (function (state_5914){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5959){if((e5959 instanceof Object)){
var ex__2796__auto__ = e5959;
var statearr_5960_5999 = state_5914;
(statearr_5960_5999[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6000 = state_5914;
state_5914 = G__6000;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__2793__auto__ = function(state_5914){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__2793__auto____1.call(this,state_5914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__2793__auto____0;
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__2793__auto____1;
return app$particle$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,ctx,vec__5888,v,ch,pred__5898,expr__5899,draw,c__2882__auto____$1,inst_5897,inst_5896,inst_5895,inst_5886,inst_5907,inst_5916,state_val_5941,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__2884__auto__ = (function (){var statearr_5961 = f__2883__auto__.call(null);
(statearr_5961[(6)] = c__2882__auto____$1);

return statearr_5961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});
;})(ctx,vec__5888,v,ch,pred__5898,expr__5899,draw,c__2882__auto____$1,inst_5897,inst_5896,inst_5895,inst_5886,inst_5907,inst_5916,state_val_5941,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var inst_5918 = cljs.core.async.impl.dispatch.run.call(null,inst_5917);
var inst_5919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5920 = [new cljs.core.Keyword(null,"part","part",77757738)];
var inst_5921 = (new cljs.core.PersistentVector(null,1,(5),inst_5919,inst_5920,null));
var inst_5922 = cljs.core.partial.call(null,tool.particle.update,inst_5896);
var inst_5923 = cljs.core.update_in.call(null,inst_5886,inst_5921,inst_5922);
var inst_5924 = inst_5907.call(null,inst_5923);
var state_5940__$1 = (function (){var statearr_5962 = state_5940;
(statearr_5962[(12)] = inst_5918);

return statearr_5962;
})();
var statearr_5963_6001 = state_5940__$1;
(statearr_5963_6001[(2)] = inst_5924);

(statearr_5963_6001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5941 === (8))){
var inst_5903 = (state_5940[(11)]);
var state_5940__$1 = state_5940;
var statearr_5964_6002 = state_5940__$1;
(statearr_5964_6002[(2)] = inst_5903);

(statearr_5964_6002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf))
;
return ((function (switch__2792__auto__,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf){
return (function() {
var app$particle$main$main_$_state_machine__2793__auto__ = null;
var app$particle$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5965 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5965[(0)] = app$particle$main$main_$_state_machine__2793__auto__);

(statearr_5965[(1)] = (1));

return statearr_5965;
});
var app$particle$main$main_$_state_machine__2793__auto____1 = (function (state_5940){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5966){if((e5966 instanceof Object)){
var ex__2796__auto__ = e5966;
var statearr_5967_6003 = state_5940;
(statearr_5967_6003[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6004 = state_5940;
state_5940 = G__6004;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$particle$main$main_$_state_machine__2793__auto__ = function(state_5940){
switch(arguments.length){
case 0:
return app$particle$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$particle$main$main_$_state_machine__2793__auto____1.call(this,state_5940);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$particle$main$main_$_state_machine__2793__auto____0;
app$particle$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$particle$main$main_$_state_machine__2793__auto____1;
return app$particle$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf))
})();
var state__2884__auto__ = (function (){var statearr_5968 = f__2883__auto__.call(null);
(statearr_5968[(6)] = c__2882__auto___5986);

return statearr_5968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5986,onView,onModel,onModelEvent,onTick,fps,mspf))
);


return null;
});
app.particle.main.main.call(null);

//# sourceMappingURL=main.js.map
