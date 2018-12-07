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
var G__7673 = arguments.length;
switch (G__7673) {
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
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_7687){
var state_val_7688 = (state_7687[(1)]);
if((state_val_7688 === (1))){
var inst_7674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7676 = cljs.core.first.call(null,result);
var inst_7677 = cljs.core.second.call(null,result);
var inst_7678 = cljs.core.nth.call(null,result,(2));
var inst_7679 = cljs.core.nth.call(null,result,(3));
var inst_7680 = [inst_7676,inst_7677,inst_7678,inst_7679,request];
var inst_7681 = (new cljs.core.PersistentVector(null,5,(5),inst_7675,inst_7680,null));
var inst_7682 = ["loadStock",inst_7681];
var inst_7683 = (new cljs.core.PersistentVector(null,2,(5),inst_7674,inst_7682,null));
var state_7687__$1 = state_7687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7687__$1,(2),ch,inst_7683);
} else {
if((state_val_7688 === (2))){
var inst_7685 = (state_7687[(2)]);
var state_7687__$1 = state_7687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7687__$1,inst_7685);
} else {
return null;
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$stock$cmd$state_machine__2793__auto__ = null;
var app$stock$cmd$state_machine__2793__auto____0 = (function (){
var statearr_7689 = [null,null,null,null,null,null,null];
(statearr_7689[(0)] = app$stock$cmd$state_machine__2793__auto__);

(statearr_7689[(1)] = (1));

return statearr_7689;
});
var app$stock$cmd$state_machine__2793__auto____1 = (function (state_7687){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7690){if((e7690 instanceof Object)){
var ex__2796__auto__ = e7690;
var statearr_7691_7717 = state_7687;
(statearr_7691_7717[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7718 = state_7687;
state_7687 = G__7718;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$state_machine__2793__auto__ = function(state_7687){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__2793__auto____1.call(this,state_7687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__2793__auto____0;
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__2793__auto____1;
return app$stock$cmd$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7692 = f__2883__auto__.call(null);
(statearr_7692[(6)] = c__2882__auto__);

return statearr_7692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});

app.stock.cmd.loadStock.cljs$core$IFn$_invoke$arity$4 = (function (ch,id,date,request){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_7710){
var state_val_7711 = (state_7710[(1)]);
if((state_val_7711 === (1))){
var inst_7696 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");
var state_7710__$1 = state_7710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7710__$1,(2),inst_7696);
} else {
if((state_val_7711 === (2))){
var inst_7698 = (state_7710[(2)]);
var inst_7699 = cljs.core.nth.call(null,inst_7698,(0),null);
var inst_7700 = cljs.core.nth.call(null,inst_7698,(1),null);
var inst_7701 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7703 = [inst_7699,inst_7700,id,date,request];
var inst_7704 = (new cljs.core.PersistentVector(null,5,(5),inst_7702,inst_7703,null));
var inst_7705 = ["loadStock",inst_7704];
var inst_7706 = (new cljs.core.PersistentVector(null,2,(5),inst_7701,inst_7705,null));
var state_7710__$1 = state_7710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7710__$1,(3),ch,inst_7706);
} else {
if((state_val_7711 === (3))){
var inst_7708 = (state_7710[(2)]);
var state_7710__$1 = state_7710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7710__$1,inst_7708);
} else {
return null;
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$stock$cmd$state_machine__2793__auto__ = null;
var app$stock$cmd$state_machine__2793__auto____0 = (function (){
var statearr_7712 = [null,null,null,null,null,null,null];
(statearr_7712[(0)] = app$stock$cmd$state_machine__2793__auto__);

(statearr_7712[(1)] = (1));

return statearr_7712;
});
var app$stock$cmd$state_machine__2793__auto____1 = (function (state_7710){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7713){if((e7713 instanceof Object)){
var ex__2796__auto__ = e7713;
var statearr_7714_7719 = state_7710;
(statearr_7714_7719[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7720 = state_7710;
state_7710 = G__7720;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$state_machine__2793__auto__ = function(state_7710){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__2793__auto____1.call(this,state_7710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__2793__auto____0;
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__2793__auto____1;
return app$stock$cmd$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7715 = f__2883__auto__.call(null);
(statearr_7715[(6)] = c__2882__auto__);

return statearr_7715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});

app.stock.cmd.loadStock.cljs$lang$maxFixedArity = 5;

app.stock.cmd.loadUser = (function app$stock$cmd$loadUser(ch,fbid,accessToken,request){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_7738){
var state_val_7739 = (state_7738[(1)]);
if((state_val_7739 === (1))){
var inst_7724 = app.stock.dbfile.loadFromUser.call(null,fbid,accessToken);
var state_7738__$1 = state_7738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7738__$1,(2),inst_7724);
} else {
if((state_val_7739 === (2))){
var inst_7726 = (state_7738[(2)]);
var inst_7727 = cljs.core.nth.call(null,inst_7726,(0),null);
var inst_7728 = cljs.core.nth.call(null,inst_7726,(1),null);
var inst_7729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7731 = [inst_7727,inst_7728,request];
var inst_7732 = (new cljs.core.PersistentVector(null,3,(5),inst_7730,inst_7731,null));
var inst_7733 = ["view",inst_7732];
var inst_7734 = (new cljs.core.PersistentVector(null,2,(5),inst_7729,inst_7733,null));
var state_7738__$1 = state_7738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7738__$1,(3),ch,inst_7734);
} else {
if((state_val_7739 === (3))){
var inst_7736 = (state_7738[(2)]);
var state_7738__$1 = state_7738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7738__$1,inst_7736);
} else {
return null;
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$stock$cmd$loadUser_$_state_machine__2793__auto__ = null;
var app$stock$cmd$loadUser_$_state_machine__2793__auto____0 = (function (){
var statearr_7740 = [null,null,null,null,null,null,null];
(statearr_7740[(0)] = app$stock$cmd$loadUser_$_state_machine__2793__auto__);

(statearr_7740[(1)] = (1));

return statearr_7740;
});
var app$stock$cmd$loadUser_$_state_machine__2793__auto____1 = (function (state_7738){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7741){if((e7741 instanceof Object)){
var ex__2796__auto__ = e7741;
var statearr_7742_7744 = state_7738;
(statearr_7742_7744[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7745 = state_7738;
state_7738 = G__7745;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$loadUser_$_state_machine__2793__auto__ = function(state_7738){
switch(arguments.length){
case 0:
return app$stock$cmd$loadUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$loadUser_$_state_machine__2793__auto____1.call(this,state_7738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$loadUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$loadUser_$_state_machine__2793__auto____0;
app$stock$cmd$loadUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$loadUser_$_state_machine__2793__auto____1;
return app$stock$cmd$loadUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7743 = f__2883__auto__.call(null);
(statearr_7743[(6)] = c__2882__auto__);

return statearr_7743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
app.stock.cmd.saveUser = (function app$stock$cmd$saveUser(ch,fbid,accessToken,data,request){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_7764){
var state_val_7765 = (state_7764[(1)]);
if((state_val_7765 === (1))){
var inst_7749 = JSON.stringify(data);
var inst_7750 = app.stock.dbfile.saveToUser.call(null,fbid,accessToken,inst_7749);
var state_7764__$1 = state_7764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7764__$1,(2),inst_7750);
} else {
if((state_val_7765 === (2))){
var inst_7752 = (state_7764[(2)]);
var inst_7753 = cljs.core.nth.call(null,inst_7752,(0),null);
var inst_7754 = cljs.core.nth.call(null,inst_7752,(1),null);
var inst_7755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7757 = [inst_7753,inst_7754,request];
var inst_7758 = (new cljs.core.PersistentVector(null,3,(5),inst_7756,inst_7757,null));
var inst_7759 = ["view",inst_7758];
var inst_7760 = (new cljs.core.PersistentVector(null,2,(5),inst_7755,inst_7759,null));
var state_7764__$1 = state_7764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7764__$1,(3),ch,inst_7760);
} else {
if((state_val_7765 === (3))){
var inst_7762 = (state_7764[(2)]);
var state_7764__$1 = state_7764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7764__$1,inst_7762);
} else {
return null;
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var app$stock$cmd$saveUser_$_state_machine__2793__auto__ = null;
var app$stock$cmd$saveUser_$_state_machine__2793__auto____0 = (function (){
var statearr_7766 = [null,null,null,null,null,null,null];
(statearr_7766[(0)] = app$stock$cmd$saveUser_$_state_machine__2793__auto__);

(statearr_7766[(1)] = (1));

return statearr_7766;
});
var app$stock$cmd$saveUser_$_state_machine__2793__auto____1 = (function (state_7764){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7767){if((e7767 instanceof Object)){
var ex__2796__auto__ = e7767;
var statearr_7768_7770 = state_7764;
(statearr_7768_7770[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7771 = state_7764;
state_7764 = G__7771;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$saveUser_$_state_machine__2793__auto__ = function(state_7764){
switch(arguments.length){
case 0:
return app$stock$cmd$saveUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$saveUser_$_state_machine__2793__auto____1.call(this,state_7764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$saveUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$saveUser_$_state_machine__2793__auto____0;
app$stock$cmd$saveUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$saveUser_$_state_machine__2793__auto____1;
return app$stock$cmd$saveUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7769 = f__2883__auto__.call(null);
(statearr_7769[(6)] = c__2882__auto__);

return statearr_7769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});

//# sourceMappingURL=cmd.js.map
