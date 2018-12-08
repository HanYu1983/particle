// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('cljs.core.async');
goog.require('app.stock.dbfile');
goog.require('app.stock.abstract$');
goog.require('app.stock.impl');
app.stock.main.main = (function app$stock$main$main(){
var onView_10929 = cljs.core.async.chan.call(null);
var onModel_10930 = cljs.core.async.chan.call(null);
var onSys_10931 = cljs.core.async.chan.call(null);
common.onView.subscribe(((function (onView_10929,onModel_10930,onSys_10931){
return (function (data){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,onView_10929,onModel_10930,onSys_10931){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,onView_10929,onModel_10930,onSys_10931){
return (function (state_10844){
var state_val_10845 = (state_10844[(1)]);
if((state_val_10845 === (1))){
var state_10844__$1 = state_10844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10844__$1,(2),onView_10929,data);
} else {
if((state_val_10845 === (2))){
var inst_10842 = (state_10844[(2)]);
var state_10844__$1 = state_10844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10844__$1,inst_10842);
} else {
return null;
}
}
});})(c__3261__auto__,onView_10929,onModel_10930,onSys_10931))
;
return ((function (switch__3171__auto__,c__3261__auto__,onView_10929,onModel_10930,onSys_10931){
return (function() {
var app$stock$main$main_$_state_machine__3172__auto__ = null;
var app$stock$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_10846 = [null,null,null,null,null,null,null];
(statearr_10846[(0)] = app$stock$main$main_$_state_machine__3172__auto__);

(statearr_10846[(1)] = (1));

return statearr_10846;
});
var app$stock$main$main_$_state_machine__3172__auto____1 = (function (state_10844){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10847){if((e10847 instanceof Object)){
var ex__3175__auto__ = e10847;
var statearr_10848_10932 = state_10844;
(statearr_10848_10932[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10933 = state_10844;
state_10844 = G__10933;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__3172__auto__ = function(state_10844){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__3172__auto____1.call(this,state_10844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__3172__auto____0;
app$stock$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__3172__auto____1;
return app$stock$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,onView_10929,onModel_10930,onSys_10931))
})();
var state__3263__auto__ = (function (){var statearr_10849 = f__3262__auto__.call(null);
(statearr_10849[(6)] = c__3261__auto__);

return statearr_10849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,onView_10929,onModel_10930,onSys_10931))
);

return c__3261__auto__;
});})(onView_10929,onModel_10930,onSys_10931))
);

var c__3261__auto___10934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___10934,onView_10929,onModel_10930,onSys_10931){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___10934,onView_10929,onModel_10930,onSys_10931){
return (function (state_10858){
var state_val_10859 = (state_10858[(1)]);
if((state_val_10859 === (1))){
var state_10858__$1 = state_10858;
var statearr_10860_10935 = state_10858__$1;
(statearr_10860_10935[(2)] = null);

(statearr_10860_10935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10859 === (2))){
var state_10858__$1 = state_10858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10858__$1,(4),onModel_10930);
} else {
if((state_val_10859 === (3))){
var inst_10856 = (state_10858[(2)]);
var state_10858__$1 = state_10858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10858__$1,inst_10856);
} else {
if((state_val_10859 === (4))){
var inst_10852 = (state_10858[(2)]);
var inst_10853 = common.onModel.onNext(inst_10852);
var state_10858__$1 = (function (){var statearr_10861 = state_10858;
(statearr_10861[(7)] = inst_10853);

return statearr_10861;
})();
var statearr_10862_10936 = state_10858__$1;
(statearr_10862_10936[(2)] = null);

(statearr_10862_10936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__3261__auto___10934,onView_10929,onModel_10930,onSys_10931))
;
return ((function (switch__3171__auto__,c__3261__auto___10934,onView_10929,onModel_10930,onSys_10931){
return (function() {
var app$stock$main$main_$_state_machine__3172__auto__ = null;
var app$stock$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_10863 = [null,null,null,null,null,null,null,null];
(statearr_10863[(0)] = app$stock$main$main_$_state_machine__3172__auto__);

(statearr_10863[(1)] = (1));

return statearr_10863;
});
var app$stock$main$main_$_state_machine__3172__auto____1 = (function (state_10858){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10864){if((e10864 instanceof Object)){
var ex__3175__auto__ = e10864;
var statearr_10865_10937 = state_10858;
(statearr_10865_10937[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10938 = state_10858;
state_10858 = G__10938;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__3172__auto__ = function(state_10858){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__3172__auto____1.call(this,state_10858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__3172__auto____0;
app$stock$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__3172__auto____1;
return app$stock$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___10934,onView_10929,onModel_10930,onSys_10931))
})();
var state__3263__auto__ = (function (){var statearr_10866 = f__3262__auto__.call(null);
(statearr_10866[(6)] = c__3261__auto___10934);

return statearr_10866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___10934,onView_10929,onModel_10930,onSys_10931))
);


var c__3261__auto___10939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___10939,onView_10929,onModel_10930,onSys_10931){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___10939,onView_10929,onModel_10930,onSys_10931){
return (function (state_10910){
var state_val_10911 = (state_10910[(1)]);
if((state_val_10911 === (7))){
var inst_10905 = (state_10910[(2)]);
var inst_10872 = inst_10905;
var state_10910__$1 = (function (){var statearr_10912 = state_10910;
(statearr_10912[(7)] = inst_10872);

return statearr_10912;
})();
var statearr_10913_10940 = state_10910__$1;
(statearr_10913_10940[(2)] = null);

(statearr_10913_10940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10911 === (1))){
var inst_10867 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];
var inst_10868 = cljs.core.PersistentHashMap.EMPTY;
var inst_10869 = cljs.core.PersistentHashMap.EMPTY;
var inst_10870 = [onView_10929,onModel_10930,onSys_10931,inst_10868,inst_10869];
var inst_10871 = cljs.core.PersistentHashMap.fromArrays(inst_10867,inst_10870);
var inst_10872 = inst_10871;
var state_10910__$1 = (function (){var statearr_10914 = state_10910;
(statearr_10914[(7)] = inst_10872);

return statearr_10914;
})();
var statearr_10915_10941 = state_10910__$1;
(statearr_10915_10941[(2)] = null);

(statearr_10915_10941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10911 === (4))){
var inst_10883 = (state_10910[(8)]);
var inst_10881 = (state_10910[(2)]);
var inst_10882 = cljs.core.nth.call(null,inst_10881,(0),null);
var inst_10883__$1 = cljs.core.nth.call(null,inst_10881,(1),null);
var inst_10887 = cljs.core._EQ_.call(null,onSys_10931,inst_10883__$1);
var state_10910__$1 = (function (){var statearr_10916 = state_10910;
(statearr_10916[(9)] = inst_10882);

(statearr_10916[(8)] = inst_10883__$1);

return statearr_10916;
})();
if(inst_10887){
var statearr_10917_10942 = state_10910__$1;
(statearr_10917_10942[(1)] = (5));

} else {
var statearr_10918_10943 = state_10910__$1;
(statearr_10918_10943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10911 === (6))){
var inst_10883 = (state_10910[(8)]);
var inst_10896 = cljs.core._EQ_.call(null,onView_10929,inst_10883);
var state_10910__$1 = state_10910;
if(inst_10896){
var statearr_10919_10944 = state_10910__$1;
(statearr_10919_10944[(1)] = (8));

} else {
var statearr_10920_10945 = state_10910__$1;
(statearr_10920_10945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10911 === (3))){
var inst_10908 = (state_10910[(2)]);
var state_10910__$1 = state_10910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10910__$1,inst_10908);
} else {
if((state_val_10911 === (2))){
var inst_10877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10878 = [onView_10929,onSys_10931];
var inst_10879 = (new cljs.core.PersistentVector(null,2,(5),inst_10877,inst_10878,null));
var state_10910__$1 = state_10910;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10910__$1,(4),inst_10879);
} else {
if((state_val_10911 === (9))){
var inst_10872 = (state_10910[(7)]);
var state_10910__$1 = state_10910;
var statearr_10921_10946 = state_10910__$1;
(statearr_10921_10946[(2)] = inst_10872);

(statearr_10921_10946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10911 === (5))){
var inst_10882 = (state_10910[(9)]);
var inst_10872 = (state_10910[(7)]);
var inst_10892 = cljs.core.nth.call(null,inst_10882,(0),null);
var inst_10893 = cljs.core.nth.call(null,inst_10882,(1),null);
var inst_10894 = app.stock.abstract$.onSystem.call(null,inst_10892,inst_10893,inst_10872);
var state_10910__$1 = state_10910;
var statearr_10922_10947 = state_10910__$1;
(statearr_10922_10947[(2)] = inst_10894);

(statearr_10922_10947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10911 === (10))){
var inst_10903 = (state_10910[(2)]);
var state_10910__$1 = state_10910;
var statearr_10923_10948 = state_10910__$1;
(statearr_10923_10948[(2)] = inst_10903);

(statearr_10923_10948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10911 === (8))){
var inst_10882 = (state_10910[(9)]);
var inst_10872 = (state_10910[(7)]);
var inst_10898 = (inst_10882[(0)]);
var inst_10899 = (inst_10882[(1)]);
var inst_10900 = app.stock.abstract$.onViewCommand.call(null,inst_10898,inst_10899,inst_10872);
var state_10910__$1 = state_10910;
var statearr_10924_10949 = state_10910__$1;
(statearr_10924_10949[(2)] = inst_10900);

(statearr_10924_10949[(1)] = (10));


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
});})(c__3261__auto___10939,onView_10929,onModel_10930,onSys_10931))
;
return ((function (switch__3171__auto__,c__3261__auto___10939,onView_10929,onModel_10930,onSys_10931){
return (function() {
var app$stock$main$main_$_state_machine__3172__auto__ = null;
var app$stock$main$main_$_state_machine__3172__auto____0 = (function (){
var statearr_10925 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10925[(0)] = app$stock$main$main_$_state_machine__3172__auto__);

(statearr_10925[(1)] = (1));

return statearr_10925;
});
var app$stock$main$main_$_state_machine__3172__auto____1 = (function (state_10910){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10926){if((e10926 instanceof Object)){
var ex__3175__auto__ = e10926;
var statearr_10927_10950 = state_10910;
(statearr_10927_10950[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10951 = state_10910;
state_10910 = G__10951;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__3172__auto__ = function(state_10910){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__3172__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__3172__auto____1.call(this,state_10910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__3172__auto____0;
app$stock$main$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__3172__auto____1;
return app$stock$main$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___10939,onView_10929,onModel_10930,onSys_10931))
})();
var state__3263__auto__ = (function (){var statearr_10928 = f__3262__auto__.call(null);
(statearr_10928[(6)] = c__3261__auto___10939);

return statearr_10928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___10939,onView_10929,onModel_10930,onSys_10931))
);



return null;
});
app.stock.main.main.call(null);

//# sourceMappingURL=main.js.map
