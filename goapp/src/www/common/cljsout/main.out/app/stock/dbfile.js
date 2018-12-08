// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
app.stock.dbfile.saveToUser = (function app$stock$dbfile$saveToUser(fbid,accessToken,data){
var ret = cljs.core.async.chan.call(null);
var filename = db2path.sf(db2path.stockInfoJson,[fbid]);
db2.writefile(filename,(function (){var obj7117 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};
return obj7117;
})(),((function (ret,filename){
return (function (err,data__$1){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,ret,filename){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,ret,filename){
return (function (state_7125){
var state_val_7126 = (state_7125[(1)]);
if((state_val_7126 === (1))){
var inst_7118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7119 = [err,data__$1];
var inst_7120 = (new cljs.core.PersistentVector(null,2,(5),inst_7118,inst_7119,null));
var state_7125__$1 = state_7125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7125__$1,(2),ret,inst_7120);
} else {
if((state_val_7126 === (2))){
var inst_7122 = (state_7125[(2)]);
var inst_7123 = cljs.core.async.close_BANG_.call(null,ret);
var state_7125__$1 = (function (){var statearr_7127 = state_7125;
(statearr_7127[(7)] = inst_7122);

return statearr_7127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7125__$1,inst_7123);
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
var statearr_7128 = [null,null,null,null,null,null,null,null];
(statearr_7128[(0)] = app$stock$dbfile$saveToUser_$_state_machine__2793__auto__);

(statearr_7128[(1)] = (1));

return statearr_7128;
});
var app$stock$dbfile$saveToUser_$_state_machine__2793__auto____1 = (function (state_7125){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7129){if((e7129 instanceof Object)){
var ex__2796__auto__ = e7129;
var statearr_7130_7132 = state_7125;
(statearr_7130_7132[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7133 = state_7125;
state_7125 = G__7133;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$dbfile$saveToUser_$_state_machine__2793__auto__ = function(state_7125){
switch(arguments.length){
case 0:
return app$stock$dbfile$saveToUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$dbfile$saveToUser_$_state_machine__2793__auto____1.call(this,state_7125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$saveToUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$saveToUser_$_state_machine__2793__auto____0;
app$stock$dbfile$saveToUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$saveToUser_$_state_machine__2793__auto____1;
return app$stock$dbfile$saveToUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret,filename))
})();
var state__2884__auto__ = (function (){var statearr_7131 = f__2883__auto__.call(null);
(statearr_7131[(6)] = c__2882__auto__);

return statearr_7131;
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
db2.file(filename,(function (){var obj7135 = {"FBID":fbid,"AccessToken":accessToken};
return obj7135;
})(),"json",((function (ret,filename){
return (function (err,data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,ret,filename){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,ret,filename){
return (function (state_7153){
var state_val_7154 = (state_7153[(1)]);
if((state_val_7154 === (1))){
var inst_7136 = cljs.core._EQ_.call(null,err,"file not found");
var state_7153__$1 = state_7153;
if(inst_7136){
var statearr_7155_7164 = state_7153__$1;
(statearr_7155_7164[(1)] = (2));

} else {
var statearr_7156_7165 = state_7153__$1;
(statearr_7156_7165[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7154 === (2))){
var inst_7138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7139 = [null,null];
var inst_7140 = (new cljs.core.PersistentVector(null,2,(5),inst_7138,inst_7139,null));
var state_7153__$1 = state_7153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7153__$1,(5),ret,inst_7140);
} else {
if((state_val_7154 === (3))){
var inst_7144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7145 = [err,data];
var inst_7146 = (new cljs.core.PersistentVector(null,2,(5),inst_7144,inst_7145,null));
var state_7153__$1 = state_7153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7153__$1,(6),ret,inst_7146);
} else {
if((state_val_7154 === (4))){
var inst_7150 = (state_7153[(2)]);
var inst_7151 = cljs.core.async.close_BANG_.call(null,ret);
var state_7153__$1 = (function (){var statearr_7157 = state_7153;
(statearr_7157[(7)] = inst_7150);

return statearr_7157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7153__$1,inst_7151);
} else {
if((state_val_7154 === (5))){
var inst_7142 = (state_7153[(2)]);
var state_7153__$1 = state_7153;
var statearr_7158_7166 = state_7153__$1;
(statearr_7158_7166[(2)] = inst_7142);

(statearr_7158_7166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7154 === (6))){
var inst_7148 = (state_7153[(2)]);
var state_7153__$1 = state_7153;
var statearr_7159_7167 = state_7153__$1;
(statearr_7159_7167[(2)] = inst_7148);

(statearr_7159_7167[(1)] = (4));


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
var statearr_7160 = [null,null,null,null,null,null,null,null];
(statearr_7160[(0)] = app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__);

(statearr_7160[(1)] = (1));

return statearr_7160;
});
var app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____1 = (function (state_7153){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7161){if((e7161 instanceof Object)){
var ex__2796__auto__ = e7161;
var statearr_7162_7168 = state_7153;
(statearr_7162_7168[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7169 = state_7153;
state_7153 = G__7169;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__ = function(state_7153){
switch(arguments.length){
case 0:
return app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____1.call(this,state_7153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____0;
app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$dbfile$loadFromUser_$_state_machine__2793__auto____1;
return app$stock$dbfile$loadFromUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret,filename))
})();
var state__2884__auto__ = (function (){var statearr_7163 = f__2883__auto__.call(null);
(statearr_7163[(6)] = c__2882__auto__);

return statearr_7163;
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
