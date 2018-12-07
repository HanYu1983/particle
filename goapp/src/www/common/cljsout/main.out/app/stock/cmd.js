// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('app.stock.dbfile');
goog.require('stock.tool');
goog.require('cljs.core.async');
/**
 * request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
 */
app.stock.cmd.loadStock = (function app$stock$cmd$loadStock(var_args){
var G__54403 = arguments.length;
switch (G__54403) {
case 5:
return app.stock.cmd.loadStock.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return app.stock.cmd.loadStock.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.stock.cmd.loadStock.cljs$core$IFn$_invoke$arity$5 = (function (ch,id,date,request,result){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_54417){
var state_val_54418 = (state_54417[(1)]);
if((state_val_54418 === (1))){
var inst_54404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54406 = cljs.core.first.call(null,result);
var inst_54407 = cljs.core.second.call(null,result);
var inst_54408 = cljs.core.nth.call(null,result,(2));
var inst_54409 = cljs.core.nth.call(null,result,(3));
var inst_54410 = [inst_54406,inst_54407,inst_54408,inst_54409,request];
var inst_54411 = (new cljs.core.PersistentVector(null,5,(5),inst_54405,inst_54410,null));
var inst_54412 = ["loadStock",inst_54411];
var inst_54413 = (new cljs.core.PersistentVector(null,2,(5),inst_54404,inst_54412,null));
var state_54417__$1 = state_54417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54417__$1,(2),ch,inst_54413);
} else {
if((state_val_54418 === (2))){
var inst_54415 = (state_54417[(2)]);
var state_54417__$1 = state_54417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54417__$1,inst_54415);
} else {
return null;
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var app$stock$cmd$state_machine__2795__auto__ = null;
var app$stock$cmd$state_machine__2795__auto____0 = (function (){
var statearr_54419 = [null,null,null,null,null,null,null];
(statearr_54419[(0)] = app$stock$cmd$state_machine__2795__auto__);

(statearr_54419[(1)] = (1));

return statearr_54419;
});
var app$stock$cmd$state_machine__2795__auto____1 = (function (state_54417){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_54417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e54420){if((e54420 instanceof Object)){
var ex__2798__auto__ = e54420;
var statearr_54421_54447 = state_54417;
(statearr_54421_54447[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54448 = state_54417;
state_54417 = G__54448;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$cmd$state_machine__2795__auto__ = function(state_54417){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__2795__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__2795__auto____1.call(this,state_54417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__2795__auto____0;
app$stock$cmd$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__2795__auto____1;
return app$stock$cmd$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_54422 = f__2885__auto__.call(null);
(statearr_54422[(6)] = c__2884__auto__);

return statearr_54422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});

app.stock.cmd.loadStock.cljs$core$IFn$_invoke$arity$4 = (function (ch,id,date,request){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_54440){
var state_val_54441 = (state_54440[(1)]);
if((state_val_54441 === (1))){
var inst_54426 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");
var state_54440__$1 = state_54440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54440__$1,(2),inst_54426);
} else {
if((state_val_54441 === (2))){
var inst_54428 = (state_54440[(2)]);
var inst_54429 = cljs.core.nth.call(null,inst_54428,(0),null);
var inst_54430 = cljs.core.nth.call(null,inst_54428,(1),null);
var inst_54431 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54433 = [inst_54429,inst_54430,id,date,request];
var inst_54434 = (new cljs.core.PersistentVector(null,5,(5),inst_54432,inst_54433,null));
var inst_54435 = ["loadStock",inst_54434];
var inst_54436 = (new cljs.core.PersistentVector(null,2,(5),inst_54431,inst_54435,null));
var state_54440__$1 = state_54440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54440__$1,(3),ch,inst_54436);
} else {
if((state_val_54441 === (3))){
var inst_54438 = (state_54440[(2)]);
var state_54440__$1 = state_54440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54440__$1,inst_54438);
} else {
return null;
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var app$stock$cmd$state_machine__2795__auto__ = null;
var app$stock$cmd$state_machine__2795__auto____0 = (function (){
var statearr_54442 = [null,null,null,null,null,null,null];
(statearr_54442[(0)] = app$stock$cmd$state_machine__2795__auto__);

(statearr_54442[(1)] = (1));

return statearr_54442;
});
var app$stock$cmd$state_machine__2795__auto____1 = (function (state_54440){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_54440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e54443){if((e54443 instanceof Object)){
var ex__2798__auto__ = e54443;
var statearr_54444_54449 = state_54440;
(statearr_54444_54449[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54450 = state_54440;
state_54440 = G__54450;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$cmd$state_machine__2795__auto__ = function(state_54440){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__2795__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__2795__auto____1.call(this,state_54440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__2795__auto____0;
app$stock$cmd$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__2795__auto____1;
return app$stock$cmd$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_54445 = f__2885__auto__.call(null);
(statearr_54445[(6)] = c__2884__auto__);

return statearr_54445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});

app.stock.cmd.loadStock.cljs$lang$maxFixedArity = 5;

app.stock.cmd.loadUser = (function app$stock$cmd$loadUser(ch,fbid,accessToken,request){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_54468){
var state_val_54469 = (state_54468[(1)]);
if((state_val_54469 === (1))){
var inst_54454 = app.stock.dbfile.loadFromUser.call(null,fbid,accessToken);
var state_54468__$1 = state_54468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54468__$1,(2),inst_54454);
} else {
if((state_val_54469 === (2))){
var inst_54456 = (state_54468[(2)]);
var inst_54457 = cljs.core.nth.call(null,inst_54456,(0),null);
var inst_54458 = cljs.core.nth.call(null,inst_54456,(1),null);
var inst_54459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54460 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54461 = [inst_54457,inst_54458,request];
var inst_54462 = (new cljs.core.PersistentVector(null,3,(5),inst_54460,inst_54461,null));
var inst_54463 = ["view",inst_54462];
var inst_54464 = (new cljs.core.PersistentVector(null,2,(5),inst_54459,inst_54463,null));
var state_54468__$1 = state_54468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54468__$1,(3),ch,inst_54464);
} else {
if((state_val_54469 === (3))){
var inst_54466 = (state_54468[(2)]);
var state_54468__$1 = state_54468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54468__$1,inst_54466);
} else {
return null;
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var app$stock$cmd$loadUser_$_state_machine__2795__auto__ = null;
var app$stock$cmd$loadUser_$_state_machine__2795__auto____0 = (function (){
var statearr_54470 = [null,null,null,null,null,null,null];
(statearr_54470[(0)] = app$stock$cmd$loadUser_$_state_machine__2795__auto__);

(statearr_54470[(1)] = (1));

return statearr_54470;
});
var app$stock$cmd$loadUser_$_state_machine__2795__auto____1 = (function (state_54468){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_54468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e54471){if((e54471 instanceof Object)){
var ex__2798__auto__ = e54471;
var statearr_54472_54474 = state_54468;
(statearr_54472_54474[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54475 = state_54468;
state_54468 = G__54475;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$cmd$loadUser_$_state_machine__2795__auto__ = function(state_54468){
switch(arguments.length){
case 0:
return app$stock$cmd$loadUser_$_state_machine__2795__auto____0.call(this);
case 1:
return app$stock$cmd$loadUser_$_state_machine__2795__auto____1.call(this,state_54468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$loadUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$loadUser_$_state_machine__2795__auto____0;
app$stock$cmd$loadUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$loadUser_$_state_machine__2795__auto____1;
return app$stock$cmd$loadUser_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_54473 = f__2885__auto__.call(null);
(statearr_54473[(6)] = c__2884__auto__);

return statearr_54473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
app.stock.cmd.saveUser = (function app$stock$cmd$saveUser(ch,fbid,accessToken,data,request){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_54494){
var state_val_54495 = (state_54494[(1)]);
if((state_val_54495 === (1))){
var inst_54479 = JSON.stringify(data);
var inst_54480 = app.stock.dbfile.saveToUser.call(null,fbid,accessToken,inst_54479);
var state_54494__$1 = state_54494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54494__$1,(2),inst_54480);
} else {
if((state_val_54495 === (2))){
var inst_54482 = (state_54494[(2)]);
var inst_54483 = cljs.core.nth.call(null,inst_54482,(0),null);
var inst_54484 = cljs.core.nth.call(null,inst_54482,(1),null);
var inst_54485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54487 = [inst_54483,inst_54484,request];
var inst_54488 = (new cljs.core.PersistentVector(null,3,(5),inst_54486,inst_54487,null));
var inst_54489 = ["view",inst_54488];
var inst_54490 = (new cljs.core.PersistentVector(null,2,(5),inst_54485,inst_54489,null));
var state_54494__$1 = state_54494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54494__$1,(3),ch,inst_54490);
} else {
if((state_val_54495 === (3))){
var inst_54492 = (state_54494[(2)]);
var state_54494__$1 = state_54494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54494__$1,inst_54492);
} else {
return null;
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var app$stock$cmd$saveUser_$_state_machine__2795__auto__ = null;
var app$stock$cmd$saveUser_$_state_machine__2795__auto____0 = (function (){
var statearr_54496 = [null,null,null,null,null,null,null];
(statearr_54496[(0)] = app$stock$cmd$saveUser_$_state_machine__2795__auto__);

(statearr_54496[(1)] = (1));

return statearr_54496;
});
var app$stock$cmd$saveUser_$_state_machine__2795__auto____1 = (function (state_54494){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_54494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e54497){if((e54497 instanceof Object)){
var ex__2798__auto__ = e54497;
var statearr_54498_54500 = state_54494;
(statearr_54498_54500[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54501 = state_54494;
state_54494 = G__54501;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$cmd$saveUser_$_state_machine__2795__auto__ = function(state_54494){
switch(arguments.length){
case 0:
return app$stock$cmd$saveUser_$_state_machine__2795__auto____0.call(this);
case 1:
return app$stock$cmd$saveUser_$_state_machine__2795__auto____1.call(this,state_54494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$saveUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$saveUser_$_state_machine__2795__auto____0;
app$stock$cmd$saveUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$saveUser_$_state_machine__2795__auto____1;
return app$stock$cmd$saveUser_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_54499 = f__2885__auto__.call(null);
(statearr_54499[(6)] = c__2884__auto__);

return statearr_54499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});

//# sourceMappingURL=cmd.js.map
