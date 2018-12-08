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
var G__10605 = arguments.length;
switch (G__10605) {
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
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_10619){
var state_val_10620 = (state_10619[(1)]);
if((state_val_10620 === (1))){
var inst_10606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10608 = cljs.core.first.call(null,result);
var inst_10609 = cljs.core.second.call(null,result);
var inst_10610 = cljs.core.nth.call(null,result,(2));
var inst_10611 = cljs.core.nth.call(null,result,(3));
var inst_10612 = [inst_10608,inst_10609,inst_10610,inst_10611,request];
var inst_10613 = (new cljs.core.PersistentVector(null,5,(5),inst_10607,inst_10612,null));
var inst_10614 = ["loadStock",inst_10613];
var inst_10615 = (new cljs.core.PersistentVector(null,2,(5),inst_10606,inst_10614,null));
var state_10619__$1 = state_10619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10619__$1,(2),ch,inst_10615);
} else {
if((state_val_10620 === (2))){
var inst_10617 = (state_10619[(2)]);
var state_10619__$1 = state_10619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10619__$1,inst_10617);
} else {
return null;
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var app$stock$cmd$state_machine__3172__auto__ = null;
var app$stock$cmd$state_machine__3172__auto____0 = (function (){
var statearr_10621 = [null,null,null,null,null,null,null];
(statearr_10621[(0)] = app$stock$cmd$state_machine__3172__auto__);

(statearr_10621[(1)] = (1));

return statearr_10621;
});
var app$stock$cmd$state_machine__3172__auto____1 = (function (state_10619){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10622){if((e10622 instanceof Object)){
var ex__3175__auto__ = e10622;
var statearr_10623_10649 = state_10619;
(statearr_10623_10649[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10650 = state_10619;
state_10619 = G__10650;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$cmd$state_machine__3172__auto__ = function(state_10619){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__3172__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__3172__auto____1.call(this,state_10619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__3172__auto____0;
app$stock$cmd$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__3172__auto____1;
return app$stock$cmd$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_10624 = f__3262__auto__.call(null);
(statearr_10624[(6)] = c__3261__auto__);

return statearr_10624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});

app.stock.cmd.loadStock.cljs$core$IFn$_invoke$arity$4 = (function (ch,id,date,request){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_10642){
var state_val_10643 = (state_10642[(1)]);
if((state_val_10643 === (1))){
var inst_10628 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10642__$1,(2),inst_10628);
} else {
if((state_val_10643 === (2))){
var inst_10630 = (state_10642[(2)]);
var inst_10631 = cljs.core.nth.call(null,inst_10630,(0),null);
var inst_10632 = cljs.core.nth.call(null,inst_10630,(1),null);
var inst_10633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10635 = [inst_10631,inst_10632,id,date,request];
var inst_10636 = (new cljs.core.PersistentVector(null,5,(5),inst_10634,inst_10635,null));
var inst_10637 = ["loadStock",inst_10636];
var inst_10638 = (new cljs.core.PersistentVector(null,2,(5),inst_10633,inst_10637,null));
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10642__$1,(3),ch,inst_10638);
} else {
if((state_val_10643 === (3))){
var inst_10640 = (state_10642[(2)]);
var state_10642__$1 = state_10642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10642__$1,inst_10640);
} else {
return null;
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var app$stock$cmd$state_machine__3172__auto__ = null;
var app$stock$cmd$state_machine__3172__auto____0 = (function (){
var statearr_10644 = [null,null,null,null,null,null,null];
(statearr_10644[(0)] = app$stock$cmd$state_machine__3172__auto__);

(statearr_10644[(1)] = (1));

return statearr_10644;
});
var app$stock$cmd$state_machine__3172__auto____1 = (function (state_10642){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10645){if((e10645 instanceof Object)){
var ex__3175__auto__ = e10645;
var statearr_10646_10651 = state_10642;
(statearr_10646_10651[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10652 = state_10642;
state_10642 = G__10652;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$cmd$state_machine__3172__auto__ = function(state_10642){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__3172__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__3172__auto____1.call(this,state_10642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__3172__auto____0;
app$stock$cmd$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__3172__auto____1;
return app$stock$cmd$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_10647 = f__3262__auto__.call(null);
(statearr_10647[(6)] = c__3261__auto__);

return statearr_10647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});

app.stock.cmd.loadStock.cljs$lang$maxFixedArity = 5;

app.stock.cmd.loadUser = (function app$stock$cmd$loadUser(ch,fbid,accessToken,request){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_10670){
var state_val_10671 = (state_10670[(1)]);
if((state_val_10671 === (1))){
var inst_10656 = app.stock.dbfile.loadFromUser.call(null,fbid,accessToken);
var state_10670__$1 = state_10670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10670__$1,(2),inst_10656);
} else {
if((state_val_10671 === (2))){
var inst_10658 = (state_10670[(2)]);
var inst_10659 = cljs.core.nth.call(null,inst_10658,(0),null);
var inst_10660 = cljs.core.nth.call(null,inst_10658,(1),null);
var inst_10661 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10663 = [inst_10659,inst_10660,request];
var inst_10664 = (new cljs.core.PersistentVector(null,3,(5),inst_10662,inst_10663,null));
var inst_10665 = ["view",inst_10664];
var inst_10666 = (new cljs.core.PersistentVector(null,2,(5),inst_10661,inst_10665,null));
var state_10670__$1 = state_10670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10670__$1,(3),ch,inst_10666);
} else {
if((state_val_10671 === (3))){
var inst_10668 = (state_10670[(2)]);
var state_10670__$1 = state_10670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10670__$1,inst_10668);
} else {
return null;
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var app$stock$cmd$loadUser_$_state_machine__3172__auto__ = null;
var app$stock$cmd$loadUser_$_state_machine__3172__auto____0 = (function (){
var statearr_10672 = [null,null,null,null,null,null,null];
(statearr_10672[(0)] = app$stock$cmd$loadUser_$_state_machine__3172__auto__);

(statearr_10672[(1)] = (1));

return statearr_10672;
});
var app$stock$cmd$loadUser_$_state_machine__3172__auto____1 = (function (state_10670){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10673){if((e10673 instanceof Object)){
var ex__3175__auto__ = e10673;
var statearr_10674_10676 = state_10670;
(statearr_10674_10676[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10677 = state_10670;
state_10670 = G__10677;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$cmd$loadUser_$_state_machine__3172__auto__ = function(state_10670){
switch(arguments.length){
case 0:
return app$stock$cmd$loadUser_$_state_machine__3172__auto____0.call(this);
case 1:
return app$stock$cmd$loadUser_$_state_machine__3172__auto____1.call(this,state_10670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$loadUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$loadUser_$_state_machine__3172__auto____0;
app$stock$cmd$loadUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$loadUser_$_state_machine__3172__auto____1;
return app$stock$cmd$loadUser_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_10675 = f__3262__auto__.call(null);
(statearr_10675[(6)] = c__3261__auto__);

return statearr_10675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
app.stock.cmd.saveUser = (function app$stock$cmd$saveUser(ch,fbid,accessToken,data,request){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_10696){
var state_val_10697 = (state_10696[(1)]);
if((state_val_10697 === (1))){
var inst_10681 = JSON.stringify(data);
var inst_10682 = app.stock.dbfile.saveToUser.call(null,fbid,accessToken,inst_10681);
var state_10696__$1 = state_10696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10696__$1,(2),inst_10682);
} else {
if((state_val_10697 === (2))){
var inst_10684 = (state_10696[(2)]);
var inst_10685 = cljs.core.nth.call(null,inst_10684,(0),null);
var inst_10686 = cljs.core.nth.call(null,inst_10684,(1),null);
var inst_10687 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10688 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10689 = [inst_10685,inst_10686,request];
var inst_10690 = (new cljs.core.PersistentVector(null,3,(5),inst_10688,inst_10689,null));
var inst_10691 = ["view",inst_10690];
var inst_10692 = (new cljs.core.PersistentVector(null,2,(5),inst_10687,inst_10691,null));
var state_10696__$1 = state_10696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10696__$1,(3),ch,inst_10692);
} else {
if((state_val_10697 === (3))){
var inst_10694 = (state_10696[(2)]);
var state_10696__$1 = state_10696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10696__$1,inst_10694);
} else {
return null;
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var app$stock$cmd$saveUser_$_state_machine__3172__auto__ = null;
var app$stock$cmd$saveUser_$_state_machine__3172__auto____0 = (function (){
var statearr_10698 = [null,null,null,null,null,null,null];
(statearr_10698[(0)] = app$stock$cmd$saveUser_$_state_machine__3172__auto__);

(statearr_10698[(1)] = (1));

return statearr_10698;
});
var app$stock$cmd$saveUser_$_state_machine__3172__auto____1 = (function (state_10696){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10699){if((e10699 instanceof Object)){
var ex__3175__auto__ = e10699;
var statearr_10700_10702 = state_10696;
(statearr_10700_10702[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10703 = state_10696;
state_10696 = G__10703;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$cmd$saveUser_$_state_machine__3172__auto__ = function(state_10696){
switch(arguments.length){
case 0:
return app$stock$cmd$saveUser_$_state_machine__3172__auto____0.call(this);
case 1:
return app$stock$cmd$saveUser_$_state_machine__3172__auto____1.call(this,state_10696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$saveUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$saveUser_$_state_machine__3172__auto____0;
app$stock$cmd$saveUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$saveUser_$_state_machine__3172__auto____1;
return app$stock$cmd$saveUser_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_10701 = f__3262__auto__.call(null);
(statearr_10701[(6)] = c__3261__auto__);

return statearr_10701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});

//# sourceMappingURL=cmd.js.map
