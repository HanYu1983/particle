// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('cljs.core.async');
goog.require('app.stock.dbfile');
goog.require('app.stock.abstract$');
goog.require('app.stock.impl');
app.stock.main.main = (function app$stock$main$main(){
var onView_7497 = cljs.core.async.chan.call(null);
var onModel_7498 = cljs.core.async.chan.call(null);
var onSys_7499 = cljs.core.async.chan.call(null);
common.onView.subscribe(((function (onView_7497,onModel_7498,onSys_7499){
return (function (data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,onView_7497,onModel_7498,onSys_7499){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,onView_7497,onModel_7498,onSys_7499){
return (function (state_7412){
var state_val_7413 = (state_7412[(1)]);
if((state_val_7413 === (1))){
var state_7412__$1 = state_7412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7412__$1,(2),onView_7497,data);
} else {
if((state_val_7413 === (2))){
var inst_7410 = (state_7412[(2)]);
var state_7412__$1 = state_7412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7412__$1,inst_7410);
} else {
return null;
}
}
});})(c__2882__auto__,onView_7497,onModel_7498,onSys_7499))
;
return ((function (switch__2792__auto__,c__2882__auto__,onView_7497,onModel_7498,onSys_7499){
return (function() {
var app$stock$main$main_$_state_machine__2793__auto__ = null;
var app$stock$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_7414 = [null,null,null,null,null,null,null];
(statearr_7414[(0)] = app$stock$main$main_$_state_machine__2793__auto__);

(statearr_7414[(1)] = (1));

return statearr_7414;
});
var app$stock$main$main_$_state_machine__2793__auto____1 = (function (state_7412){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7415){if((e7415 instanceof Object)){
var ex__2796__auto__ = e7415;
var statearr_7416_7500 = state_7412;
(statearr_7416_7500[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7501 = state_7412;
state_7412 = G__7501;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2793__auto__ = function(state_7412){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2793__auto____1.call(this,state_7412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2793__auto____0;
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2793__auto____1;
return app$stock$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,onView_7497,onModel_7498,onSys_7499))
})();
var state__2884__auto__ = (function (){var statearr_7417 = f__2883__auto__.call(null);
(statearr_7417[(6)] = c__2882__auto__);

return statearr_7417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,onView_7497,onModel_7498,onSys_7499))
);

return c__2882__auto__;
});})(onView_7497,onModel_7498,onSys_7499))
);

var c__2882__auto___7502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___7502,onView_7497,onModel_7498,onSys_7499){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___7502,onView_7497,onModel_7498,onSys_7499){
return (function (state_7426){
var state_val_7427 = (state_7426[(1)]);
if((state_val_7427 === (1))){
var state_7426__$1 = state_7426;
var statearr_7428_7503 = state_7426__$1;
(statearr_7428_7503[(2)] = null);

(statearr_7428_7503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7427 === (2))){
var state_7426__$1 = state_7426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7426__$1,(4),onModel_7498);
} else {
if((state_val_7427 === (3))){
var inst_7424 = (state_7426[(2)]);
var state_7426__$1 = state_7426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7426__$1,inst_7424);
} else {
if((state_val_7427 === (4))){
var inst_7420 = (state_7426[(2)]);
var inst_7421 = common.onModel.onNext(inst_7420);
var state_7426__$1 = (function (){var statearr_7429 = state_7426;
(statearr_7429[(7)] = inst_7421);

return statearr_7429;
})();
var statearr_7430_7504 = state_7426__$1;
(statearr_7430_7504[(2)] = null);

(statearr_7430_7504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto___7502,onView_7497,onModel_7498,onSys_7499))
;
return ((function (switch__2792__auto__,c__2882__auto___7502,onView_7497,onModel_7498,onSys_7499){
return (function() {
var app$stock$main$main_$_state_machine__2793__auto__ = null;
var app$stock$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_7431 = [null,null,null,null,null,null,null,null];
(statearr_7431[(0)] = app$stock$main$main_$_state_machine__2793__auto__);

(statearr_7431[(1)] = (1));

return statearr_7431;
});
var app$stock$main$main_$_state_machine__2793__auto____1 = (function (state_7426){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7432){if((e7432 instanceof Object)){
var ex__2796__auto__ = e7432;
var statearr_7433_7505 = state_7426;
(statearr_7433_7505[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7506 = state_7426;
state_7426 = G__7506;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2793__auto__ = function(state_7426){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2793__auto____1.call(this,state_7426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2793__auto____0;
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2793__auto____1;
return app$stock$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___7502,onView_7497,onModel_7498,onSys_7499))
})();
var state__2884__auto__ = (function (){var statearr_7434 = f__2883__auto__.call(null);
(statearr_7434[(6)] = c__2882__auto___7502);

return statearr_7434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___7502,onView_7497,onModel_7498,onSys_7499))
);


var c__2882__auto___7507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___7507,onView_7497,onModel_7498,onSys_7499){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___7507,onView_7497,onModel_7498,onSys_7499){
return (function (state_7478){
var state_val_7479 = (state_7478[(1)]);
if((state_val_7479 === (7))){
var inst_7473 = (state_7478[(2)]);
var inst_7440 = inst_7473;
var state_7478__$1 = (function (){var statearr_7480 = state_7478;
(statearr_7480[(7)] = inst_7440);

return statearr_7480;
})();
var statearr_7481_7508 = state_7478__$1;
(statearr_7481_7508[(2)] = null);

(statearr_7481_7508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7479 === (1))){
var inst_7435 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];
var inst_7436 = cljs.core.PersistentHashMap.EMPTY;
var inst_7437 = cljs.core.PersistentHashMap.EMPTY;
var inst_7438 = [onView_7497,onModel_7498,onSys_7499,inst_7436,inst_7437];
var inst_7439 = cljs.core.PersistentHashMap.fromArrays(inst_7435,inst_7438);
var inst_7440 = inst_7439;
var state_7478__$1 = (function (){var statearr_7482 = state_7478;
(statearr_7482[(7)] = inst_7440);

return statearr_7482;
})();
var statearr_7483_7509 = state_7478__$1;
(statearr_7483_7509[(2)] = null);

(statearr_7483_7509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7479 === (4))){
var inst_7451 = (state_7478[(8)]);
var inst_7449 = (state_7478[(2)]);
var inst_7450 = cljs.core.nth.call(null,inst_7449,(0),null);
var inst_7451__$1 = cljs.core.nth.call(null,inst_7449,(1),null);
var inst_7455 = cljs.core._EQ_.call(null,onSys_7499,inst_7451__$1);
var state_7478__$1 = (function (){var statearr_7484 = state_7478;
(statearr_7484[(9)] = inst_7450);

(statearr_7484[(8)] = inst_7451__$1);

return statearr_7484;
})();
if(inst_7455){
var statearr_7485_7510 = state_7478__$1;
(statearr_7485_7510[(1)] = (5));

} else {
var statearr_7486_7511 = state_7478__$1;
(statearr_7486_7511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7479 === (6))){
var inst_7451 = (state_7478[(8)]);
var inst_7464 = cljs.core._EQ_.call(null,onView_7497,inst_7451);
var state_7478__$1 = state_7478;
if(inst_7464){
var statearr_7487_7512 = state_7478__$1;
(statearr_7487_7512[(1)] = (8));

} else {
var statearr_7488_7513 = state_7478__$1;
(statearr_7488_7513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7479 === (3))){
var inst_7476 = (state_7478[(2)]);
var state_7478__$1 = state_7478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7478__$1,inst_7476);
} else {
if((state_val_7479 === (2))){
var inst_7445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7446 = [onView_7497,onSys_7499];
var inst_7447 = (new cljs.core.PersistentVector(null,2,(5),inst_7445,inst_7446,null));
var state_7478__$1 = state_7478;
return cljs.core.async.ioc_alts_BANG_.call(null,state_7478__$1,(4),inst_7447);
} else {
if((state_val_7479 === (9))){
var inst_7440 = (state_7478[(7)]);
var state_7478__$1 = state_7478;
var statearr_7489_7514 = state_7478__$1;
(statearr_7489_7514[(2)] = inst_7440);

(statearr_7489_7514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7479 === (5))){
var inst_7450 = (state_7478[(9)]);
var inst_7440 = (state_7478[(7)]);
var inst_7460 = cljs.core.nth.call(null,inst_7450,(0),null);
var inst_7461 = cljs.core.nth.call(null,inst_7450,(1),null);
var inst_7462 = app.stock.abstract$.onSystem.call(null,inst_7460,inst_7461,inst_7440);
var state_7478__$1 = state_7478;
var statearr_7490_7515 = state_7478__$1;
(statearr_7490_7515[(2)] = inst_7462);

(statearr_7490_7515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7479 === (10))){
var inst_7471 = (state_7478[(2)]);
var state_7478__$1 = state_7478;
var statearr_7491_7516 = state_7478__$1;
(statearr_7491_7516[(2)] = inst_7471);

(statearr_7491_7516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7479 === (8))){
var inst_7450 = (state_7478[(9)]);
var inst_7440 = (state_7478[(7)]);
var inst_7466 = (inst_7450[(0)]);
var inst_7467 = (inst_7450[(1)]);
var inst_7468 = app.stock.abstract$.onViewCommand.call(null,inst_7466,inst_7467,inst_7440);
var state_7478__$1 = state_7478;
var statearr_7492_7517 = state_7478__$1;
(statearr_7492_7517[(2)] = inst_7468);

(statearr_7492_7517[(1)] = (10));


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
});})(c__2882__auto___7507,onView_7497,onModel_7498,onSys_7499))
;
return ((function (switch__2792__auto__,c__2882__auto___7507,onView_7497,onModel_7498,onSys_7499){
return (function() {
var app$stock$main$main_$_state_machine__2793__auto__ = null;
var app$stock$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_7493 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7493[(0)] = app$stock$main$main_$_state_machine__2793__auto__);

(statearr_7493[(1)] = (1));

return statearr_7493;
});
var app$stock$main$main_$_state_machine__2793__auto____1 = (function (state_7478){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7494){if((e7494 instanceof Object)){
var ex__2796__auto__ = e7494;
var statearr_7495_7518 = state_7478;
(statearr_7495_7518[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7519 = state_7478;
state_7478 = G__7519;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2793__auto__ = function(state_7478){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2793__auto____1.call(this,state_7478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2793__auto____0;
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2793__auto____1;
return app$stock$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___7507,onView_7497,onModel_7498,onSys_7499))
})();
var state__2884__auto__ = (function (){var statearr_7496 = f__2883__auto__.call(null);
(statearr_7496[(6)] = c__2882__auto___7507);

return statearr_7496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___7507,onView_7497,onModel_7498,onSys_7499))
);



return null;
});
app.stock.main.main.call(null);

//# sourceMappingURL=main.js.map
