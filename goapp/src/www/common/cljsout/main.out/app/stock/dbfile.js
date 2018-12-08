// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.stock.dbfile.saveToUser = (function app$stock$dbfile$saveToUser(fbid,accessToken,data){
var ret = cljs.core.async.chan.call(null);
var filename = db2path.sf(db2path.stockInfoJson,[fbid]);
db2.writefile(filename,(function (){var obj10549 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};
return obj10549;
})(),((function (ret,filename){
return (function (err,data__$1){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,ret,filename){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,ret,filename){
return (function (state_10557){
var state_val_10558 = (state_10557[(1)]);
if((state_val_10558 === (1))){
var inst_10550 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10551 = [err,data__$1];
var inst_10552 = (new cljs.core.PersistentVector(null,2,(5),inst_10550,inst_10551,null));
var state_10557__$1 = state_10557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10557__$1,(2),ret,inst_10552);
} else {
if((state_val_10558 === (2))){
var inst_10554 = (state_10557[(2)]);
var inst_10555 = cljs.core.async.close_BANG_.call(null,ret);
var state_10557__$1 = (function (){var statearr_10559 = state_10557;
(statearr_10559[(7)] = inst_10554);

return statearr_10559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10557__$1,inst_10555);
} else {
return null;
}
}
});})(c__3261__auto__,ret,filename))
;
return ((function (switch__3171__auto__,c__3261__auto__,ret,filename){
return (function() {
var app$stock$dbfile$saveToUser_$_state_machine__3172__auto__ = null;
var app$stock$dbfile$saveToUser_$_state_machine__3172__auto____0 = (function (){
var statearr_10560 = [null,null,null,null,null,null,null,null];
(statearr_10560[(0)] = app$stock$dbfile$saveToUser_$_state_machine__3172__auto__);

(statearr_10560[(1)] = (1));

return statearr_10560;
});
var app$stock$dbfile$saveToUser_$_state_machine__3172__auto____1 = (function (state_10557){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10561){if((e10561 instanceof Object)){
var ex__3175__auto__ = e10561;
var statearr_10562_10564 = state_10557;
(statearr_10562_10564[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10565 = state_10557;
state_10557 = G__10565;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$dbfile$saveToUser_$_state_machine__3172__auto__ = function(state_10557){
switch(arguments.length){
case 0:
return app$stock$dbfile$saveToUser_$_state_machine__3172__auto____0.call(this);
case 1:
return app$stock$dbfile$saveToUser_$_state_machine__3172__auto____1.call(this,state_10557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$saveToUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$saveToUser_$_state_machine__3172__auto____0;
app$stock$dbfile$saveToUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$saveToUser_$_state_machine__3172__auto____1;
return app$stock$dbfile$saveToUser_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,ret,filename))
})();
var state__3263__auto__ = (function (){var statearr_10563 = f__3262__auto__.call(null);
(statearr_10563[(6)] = c__3261__auto__);

return statearr_10563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,ret,filename))
);

return c__3261__auto__;
});})(ret,filename))
);

return ret;
});
app.stock.dbfile.loadFromUser = (function app$stock$dbfile$loadFromUser(fbid,accessToken){
var ret = cljs.core.async.chan.call(null);
var filename = db2path.sf(db2path.stockInfoJson,[fbid]);
db2.file(filename,(function (){var obj10567 = {"FBID":fbid,"AccessToken":accessToken};
return obj10567;
})(),"json",((function (ret,filename){
return (function (err,data){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,ret,filename){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,ret,filename){
return (function (state_10585){
var state_val_10586 = (state_10585[(1)]);
if((state_val_10586 === (1))){
var inst_10568 = cljs.core._EQ_.call(null,err,"file not found");
var state_10585__$1 = state_10585;
if(inst_10568){
var statearr_10587_10596 = state_10585__$1;
(statearr_10587_10596[(1)] = (2));

} else {
var statearr_10588_10597 = state_10585__$1;
(statearr_10588_10597[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10586 === (2))){
var inst_10570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10571 = [null,null];
var inst_10572 = (new cljs.core.PersistentVector(null,2,(5),inst_10570,inst_10571,null));
var state_10585__$1 = state_10585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10585__$1,(5),ret,inst_10572);
} else {
if((state_val_10586 === (3))){
var inst_10576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10577 = [err,data];
var inst_10578 = (new cljs.core.PersistentVector(null,2,(5),inst_10576,inst_10577,null));
var state_10585__$1 = state_10585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10585__$1,(6),ret,inst_10578);
} else {
if((state_val_10586 === (4))){
var inst_10582 = (state_10585[(2)]);
var inst_10583 = cljs.core.async.close_BANG_.call(null,ret);
var state_10585__$1 = (function (){var statearr_10589 = state_10585;
(statearr_10589[(7)] = inst_10582);

return statearr_10589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10585__$1,inst_10583);
} else {
if((state_val_10586 === (5))){
var inst_10574 = (state_10585[(2)]);
var state_10585__$1 = state_10585;
var statearr_10590_10598 = state_10585__$1;
(statearr_10590_10598[(2)] = inst_10574);

(statearr_10590_10598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10586 === (6))){
var inst_10580 = (state_10585[(2)]);
var state_10585__$1 = state_10585;
var statearr_10591_10599 = state_10585__$1;
(statearr_10591_10599[(2)] = inst_10580);

(statearr_10591_10599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__3261__auto__,ret,filename))
;
return ((function (switch__3171__auto__,c__3261__auto__,ret,filename){
return (function() {
var app$stock$dbfile$loadFromUser_$_state_machine__3172__auto__ = null;
var app$stock$dbfile$loadFromUser_$_state_machine__3172__auto____0 = (function (){
var statearr_10592 = [null,null,null,null,null,null,null,null];
(statearr_10592[(0)] = app$stock$dbfile$loadFromUser_$_state_machine__3172__auto__);

(statearr_10592[(1)] = (1));

return statearr_10592;
});
var app$stock$dbfile$loadFromUser_$_state_machine__3172__auto____1 = (function (state_10585){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10593){if((e10593 instanceof Object)){
var ex__3175__auto__ = e10593;
var statearr_10594_10600 = state_10585;
(statearr_10594_10600[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10601 = state_10585;
state_10585 = G__10601;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$dbfile$loadFromUser_$_state_machine__3172__auto__ = function(state_10585){
switch(arguments.length){
case 0:
return app$stock$dbfile$loadFromUser_$_state_machine__3172__auto____0.call(this);
case 1:
return app$stock$dbfile$loadFromUser_$_state_machine__3172__auto____1.call(this,state_10585);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$loadFromUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$loadFromUser_$_state_machine__3172__auto____0;
app$stock$dbfile$loadFromUser_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$loadFromUser_$_state_machine__3172__auto____1;
return app$stock$dbfile$loadFromUser_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,ret,filename))
})();
var state__3263__auto__ = (function (){var statearr_10595 = f__3262__auto__.call(null);
(statearr_10595[(6)] = c__3261__auto__);

return statearr_10595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,ret,filename))
);

return c__3261__auto__;
});})(ret,filename))
);

return ret;
});

//# sourceMappingURL=dbfile.js.map
