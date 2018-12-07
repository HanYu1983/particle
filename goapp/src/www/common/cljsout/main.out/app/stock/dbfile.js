// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.stock.dbfile.saveToUser = (function app$stock$dbfile$saveToUser(fbid,accessToken,data){
var ret = cljs.core.async.chan.call(null);
var filename = db2path.sf(db2path.stockInfoJson,[fbid]);
db2.writefile(filename,(function (){var obj6947 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};
return obj6947;
})(),((function (ret,filename){
return (function (err,data__$1){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,ret,filename){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,ret,filename){
return (function (state_6955){
var state_val_6956 = (state_6955[(1)]);
if((state_val_6956 === (1))){
var inst_6948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6949 = [err,data__$1];
var inst_6950 = (new cljs.core.PersistentVector(null,2,(5),inst_6948,inst_6949,null));
var state_6955__$1 = state_6955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6955__$1,(2),ret,inst_6950);
} else {
if((state_val_6956 === (2))){
var inst_6952 = (state_6955[(2)]);
var inst_6953 = cljs.core.async.close_BANG_.call(null,ret);
var state_6955__$1 = (function (){var statearr_6957 = state_6955;
(statearr_6957[(7)] = inst_6952);

return statearr_6957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6955__$1,inst_6953);
} else {
return null;
}
}
});})(c__2882__auto__,ret,filename))
;
return ((function (switch__2792__auto__,c__2882__auto__,ret,filename){
return (function() {
var app$stock$dbfile$saveToUser_$_state_machine__2793__auto__ = null;
var app$stock$dbfile$saveToUser_$_state_machine__2793__auto____0 = (function (){
var statearr_6958 = [null,null,null,null,null,null,null,null];
(statearr_6958[(0)] = app$stock$dbfile$saveToUser_$_state_machine__2793__auto__);

(statearr_6958[(1)] = (1));

return statearr_6958;
});
var app$stock$dbfile$saveToUser_$_state_machine__2793__auto____1 = (function (state_6955){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6959){if((e6959 instanceof Object)){
var ex__2796__auto__ = e6959;
var statearr_6960_6962 = state_6955;
(statearr_6960_6962[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6963 = state_6955;
state_6955 = G__6963;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$dbfile$saveToUser_$_state_machine__2793__auto__ = function(state_6955){
switch(arguments.length){
case 0:
return app$stock$dbfile$saveToUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$dbfile$saveToUser_$_state_machine__2793__auto____1.call(this,state_6955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$saveToUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$saveToUser_$_state_machine__2793__auto____0;
app$stock$dbfile$saveToUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$saveToUser_$_state_machine__2793__auto____1;
return app$stock$dbfile$saveToUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret,filename))
})();
var state__2884__auto__ = (function (){var statearr_6961 = f__2883__auto__.call(null);
(statearr_6961[(6)] = c__2882__auto__);

return statearr_6961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,ret,filename))
);

return c__2882__auto__;
});})(ret,filename))
);

return ret;
});
app.stock.dbfile.loadFromUser = (function app$stock$dbfile$loadFromUser(fbid,accessToken){
var ret = cljs.core.async.chan.call(null);
var filename = db2path.sf(db2path.stockInfoJson,[fbid]);
db2.file(filename,(function (){var obj6965 = {"FBID":fbid,"AccessToken":accessToken};
return obj6965;
})(),"json",((function (ret,filename){
return (function (err,data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,ret,filename){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,ret,filename){
return (function (state_6983){
var state_val_6984 = (state_6983[(1)]);
if((state_val_6984 === (1))){
var inst_6966 = cljs.core._EQ_.call(null,err,"file not found");
var state_6983__$1 = state_6983;
if(inst_6966){
var statearr_6985_6994 = state_6983__$1;
(statearr_6985_6994[(1)] = (2));

} else {
var statearr_6986_6995 = state_6983__$1;
(statearr_6986_6995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (2))){
var inst_6968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6969 = [null,null];
var inst_6970 = (new cljs.core.PersistentVector(null,2,(5),inst_6968,inst_6969,null));
var state_6983__$1 = state_6983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6983__$1,(5),ret,inst_6970);
} else {
if((state_val_6984 === (3))){
var inst_6974 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6975 = [err,data];
var inst_6976 = (new cljs.core.PersistentVector(null,2,(5),inst_6974,inst_6975,null));
var state_6983__$1 = state_6983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6983__$1,(6),ret,inst_6976);
} else {
if((state_val_6984 === (4))){
var inst_6980 = (state_6983[(2)]);
var inst_6981 = cljs.core.async.close_BANG_.call(null,ret);
var state_6983__$1 = (function (){var statearr_6987 = state_6983;
(statearr_6987[(7)] = inst_6980);

return statearr_6987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6983__$1,inst_6981);
} else {
if((state_val_6984 === (5))){
var inst_6972 = (state_6983[(2)]);
var state_6983__$1 = state_6983;
var statearr_6988_6996 = state_6983__$1;
(statearr_6988_6996[(2)] = inst_6972);

(statearr_6988_6996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6984 === (6))){
var inst_6978 = (state_6983[(2)]);
var state_6983__$1 = state_6983;
var statearr_6989_6997 = state_6983__$1;
(statearr_6989_6997[(2)] = inst_6978);

(statearr_6989_6997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__2882__auto__,ret,filename))
;
return ((function (switch__2792__auto__,c__2882__auto__,ret,filename){
return (function() {
var app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__ = null;
var app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____0 = (function (){
var statearr_6990 = [null,null,null,null,null,null,null,null];
(statearr_6990[(0)] = app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__);

(statearr_6990[(1)] = (1));

return statearr_6990;
});
var app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____1 = (function (state_6983){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6991){if((e6991 instanceof Object)){
var ex__2796__auto__ = e6991;
var statearr_6992_6998 = state_6983;
(statearr_6992_6998[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6999 = state_6983;
state_6983 = G__6999;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__ = function(state_6983){
switch(arguments.length){
case 0:
return app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____1.call(this,state_6983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____0;
app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____1;
return app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret,filename))
})();
var state__2884__auto__ = (function (){var statearr_6993 = f__2883__auto__.call(null);
(statearr_6993[(6)] = c__2882__auto__);

return statearr_6993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,ret,filename))
);

return c__2882__auto__;
});})(ret,filename))
);

return ret;
});

//# sourceMappingURL=dbfile.js.map
