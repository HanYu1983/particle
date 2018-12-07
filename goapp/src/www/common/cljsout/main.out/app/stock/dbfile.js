// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.stock.dbfile.saveToUser = (function app$stock$dbfile$saveToUser(fbid,accessToken,data){
var ret = cljs.core.async.chan.call(null);
var filename = db2path.sf(db2path.stockInfoJson,[fbid]);
db2.writefile(filename,(function (){var obj7748 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};
return obj7748;
})(),((function (ret,filename){
return (function (err,data__$1){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,ret,filename){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,ret,filename){
return (function (state_7756){
var state_val_7757 = (state_7756[(1)]);
if((state_val_7757 === (1))){
var inst_7749 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7750 = [err,data__$1];
var inst_7751 = (new cljs.core.PersistentVector(null,2,(5),inst_7749,inst_7750,null));
var state_7756__$1 = state_7756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7756__$1,(2),ret,inst_7751);
} else {
if((state_val_7757 === (2))){
var inst_7753 = (state_7756[(2)]);
var inst_7754 = cljs.core.async.close_BANG_.call(null,ret);
var state_7756__$1 = (function (){var statearr_7758 = state_7756;
(statearr_7758[(7)] = inst_7753);

return statearr_7758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7756__$1,inst_7754);
} else {
return null;
}
}
});})(c__2884__auto__,ret,filename))
;
return ((function (switch__2794__auto__,c__2884__auto__,ret,filename){
return (function() {
var app$stock$dbfile$saveToUser_$_state_machine__2795__auto__ = null;
var app$stock$dbfile$saveToUser_$_state_machine__2795__auto____0 = (function (){
var statearr_7759 = [null,null,null,null,null,null,null,null];
(statearr_7759[(0)] = app$stock$dbfile$saveToUser_$_state_machine__2795__auto__);

(statearr_7759[(1)] = (1));

return statearr_7759;
});
var app$stock$dbfile$saveToUser_$_state_machine__2795__auto____1 = (function (state_7756){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_7756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e7760){if((e7760 instanceof Object)){
var ex__2798__auto__ = e7760;
var statearr_7761_7763 = state_7756;
(statearr_7761_7763[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7764 = state_7756;
state_7756 = G__7764;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$dbfile$saveToUser_$_state_machine__2795__auto__ = function(state_7756){
switch(arguments.length){
case 0:
return app$stock$dbfile$saveToUser_$_state_machine__2795__auto____0.call(this);
case 1:
return app$stock$dbfile$saveToUser_$_state_machine__2795__auto____1.call(this,state_7756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$saveToUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$saveToUser_$_state_machine__2795__auto____0;
app$stock$dbfile$saveToUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$saveToUser_$_state_machine__2795__auto____1;
return app$stock$dbfile$saveToUser_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,ret,filename))
})();
var state__2886__auto__ = (function (){var statearr_7762 = f__2885__auto__.call(null);
(statearr_7762[(6)] = c__2884__auto__);

return statearr_7762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,ret,filename))
);

return c__2884__auto__;
});})(ret,filename))
);

return ret;
});
app.stock.dbfile.loadFromUser = (function app$stock$dbfile$loadFromUser(fbid,accessToken){
var ret = cljs.core.async.chan.call(null);
var filename = db2path.sf(db2path.stockInfoJson,[fbid]);
db2.file(filename,(function (){var obj7766 = {"FBID":fbid,"AccessToken":accessToken};
return obj7766;
})(),"json",((function (ret,filename){
return (function (err,data){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,ret,filename){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,ret,filename){
return (function (state_7784){
var state_val_7785 = (state_7784[(1)]);
if((state_val_7785 === (1))){
var inst_7767 = cljs.core._EQ_.call(null,err,"file not found");
var state_7784__$1 = state_7784;
if(inst_7767){
var statearr_7786_7795 = state_7784__$1;
(statearr_7786_7795[(1)] = (2));

} else {
var statearr_7787_7796 = state_7784__$1;
(statearr_7787_7796[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7785 === (2))){
var inst_7769 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7770 = [null,null];
var inst_7771 = (new cljs.core.PersistentVector(null,2,(5),inst_7769,inst_7770,null));
var state_7784__$1 = state_7784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7784__$1,(5),ret,inst_7771);
} else {
if((state_val_7785 === (3))){
var inst_7775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7776 = [err,data];
var inst_7777 = (new cljs.core.PersistentVector(null,2,(5),inst_7775,inst_7776,null));
var state_7784__$1 = state_7784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7784__$1,(6),ret,inst_7777);
} else {
if((state_val_7785 === (4))){
var inst_7781 = (state_7784[(2)]);
var inst_7782 = cljs.core.async.close_BANG_.call(null,ret);
var state_7784__$1 = (function (){var statearr_7788 = state_7784;
(statearr_7788[(7)] = inst_7781);

return statearr_7788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7784__$1,inst_7782);
} else {
if((state_val_7785 === (5))){
var inst_7773 = (state_7784[(2)]);
var state_7784__$1 = state_7784;
var statearr_7789_7797 = state_7784__$1;
(statearr_7789_7797[(2)] = inst_7773);

(statearr_7789_7797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7785 === (6))){
var inst_7779 = (state_7784[(2)]);
var state_7784__$1 = state_7784;
var statearr_7790_7798 = state_7784__$1;
(statearr_7790_7798[(2)] = inst_7779);

(statearr_7790_7798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__2884__auto__,ret,filename))
;
return ((function (switch__2794__auto__,c__2884__auto__,ret,filename){
return (function() {
var app$stock$dbfile$loadFromUser_$_state_machine__2795__auto__ = null;
var app$stock$dbfile$loadFromUser_$_state_machine__2795__auto____0 = (function (){
var statearr_7791 = [null,null,null,null,null,null,null,null];
(statearr_7791[(0)] = app$stock$dbfile$loadFromUser_$_state_machine__2795__auto__);

(statearr_7791[(1)] = (1));

return statearr_7791;
});
var app$stock$dbfile$loadFromUser_$_state_machine__2795__auto____1 = (function (state_7784){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_7784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e7792){if((e7792 instanceof Object)){
var ex__2798__auto__ = e7792;
var statearr_7793_7799 = state_7784;
(statearr_7793_7799[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7800 = state_7784;
state_7784 = G__7800;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$dbfile$loadFromUser_$_state_machine__2795__auto__ = function(state_7784){
switch(arguments.length){
case 0:
return app$stock$dbfile$loadFromUser_$_state_machine__2795__auto____0.call(this);
case 1:
return app$stock$dbfile$loadFromUser_$_state_machine__2795__auto____1.call(this,state_7784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$loadFromUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$loadFromUser_$_state_machine__2795__auto____0;
app$stock$dbfile$loadFromUser_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$loadFromUser_$_state_machine__2795__auto____1;
return app$stock$dbfile$loadFromUser_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,ret,filename))
})();
var state__2886__auto__ = (function (){var statearr_7794 = f__2885__auto__.call(null);
(statearr_7794[(6)] = c__2884__auto__);

return statearr_7794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,ret,filename))
);

return c__2884__auto__;
});})(ret,filename))
);

return ret;
});

//# sourceMappingURL=dbfile.js.map
