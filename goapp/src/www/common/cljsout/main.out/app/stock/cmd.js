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
var G__7173 = arguments.length;
switch (G__7173) {
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
return (function (state_7187){
var state_val_7188 = (state_7187[(1)]);
if((state_val_7188 === (1))){
var inst_7174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7176 = cljs.core.first.call(null,result);
var inst_7177 = cljs.core.second.call(null,result);
var inst_7178 = cljs.core.nth.call(null,result,(2));
var inst_7179 = cljs.core.nth.call(null,result,(3));
var inst_7180 = [inst_7176,inst_7177,inst_7178,inst_7179,request];
var inst_7181 = (new cljs.core.PersistentVector(null,5,(5),inst_7175,inst_7180,null));
var inst_7182 = ["loadStock",inst_7181];
var inst_7183 = (new cljs.core.PersistentVector(null,2,(5),inst_7174,inst_7182,null));
var state_7187__$1 = state_7187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7187__$1,(2),ch,inst_7183);
} else {
if((state_val_7188 === (2))){
var inst_7185 = (state_7187[(2)]);
var state_7187__$1 = state_7187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7187__$1,inst_7185);
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
var statearr_7189 = [null,null,null,null,null,null,null];
(statearr_7189[(0)] = app$stock$cmd$state_machine__2793__auto__);

(statearr_7189[(1)] = (1));

return statearr_7189;
});
var app$stock$cmd$state_machine__2793__auto____1 = (function (state_7187){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7190){if((e7190 instanceof Object)){
var ex__2796__auto__ = e7190;
var statearr_7191_7217 = state_7187;
(statearr_7191_7217[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7218 = state_7187;
state_7187 = G__7218;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$state_machine__2793__auto__ = function(state_7187){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__2793__auto____1.call(this,state_7187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__2793__auto____0;
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__2793__auto____1;
return app$stock$cmd$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7192 = f__2883__auto__.call(null);
(statearr_7192[(6)] = c__2882__auto__);

return statearr_7192;
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
return (function (state_7210){
var state_val_7211 = (state_7210[(1)]);
if((state_val_7211 === (1))){
var inst_7196 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");
var state_7210__$1 = state_7210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7210__$1,(2),inst_7196);
} else {
if((state_val_7211 === (2))){
var inst_7198 = (state_7210[(2)]);
var inst_7199 = cljs.core.nth.call(null,inst_7198,(0),null);
var inst_7200 = cljs.core.nth.call(null,inst_7198,(1),null);
var inst_7201 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7203 = [inst_7199,inst_7200,id,date,request];
var inst_7204 = (new cljs.core.PersistentVector(null,5,(5),inst_7202,inst_7203,null));
var inst_7205 = ["loadStock",inst_7204];
var inst_7206 = (new cljs.core.PersistentVector(null,2,(5),inst_7201,inst_7205,null));
var state_7210__$1 = state_7210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7210__$1,(3),ch,inst_7206);
} else {
if((state_val_7211 === (3))){
var inst_7208 = (state_7210[(2)]);
var state_7210__$1 = state_7210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7210__$1,inst_7208);
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
var statearr_7212 = [null,null,null,null,null,null,null];
(statearr_7212[(0)] = app$stock$cmd$state_machine__2793__auto__);

(statearr_7212[(1)] = (1));

return statearr_7212;
});
var app$stock$cmd$state_machine__2793__auto____1 = (function (state_7210){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7213){if((e7213 instanceof Object)){
var ex__2796__auto__ = e7213;
var statearr_7214_7219 = state_7210;
(statearr_7214_7219[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7220 = state_7210;
state_7210 = G__7220;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$state_machine__2793__auto__ = function(state_7210){
switch(arguments.length){
case 0:
return app$stock$cmd$state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$state_machine__2793__auto____1.call(this,state_7210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$state_machine__2793__auto____0;
app$stock$cmd$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$state_machine__2793__auto____1;
return app$stock$cmd$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7215 = f__2883__auto__.call(null);
(statearr_7215[(6)] = c__2882__auto__);

return statearr_7215;
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
return (function (state_7238){
var state_val_7239 = (state_7238[(1)]);
if((state_val_7239 === (1))){
var inst_7224 = app.stock.dbfile.loadFromUser.call(null,fbid,accessToken);
var state_7238__$1 = state_7238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7238__$1,(2),inst_7224);
} else {
if((state_val_7239 === (2))){
var inst_7226 = (state_7238[(2)]);
var inst_7227 = cljs.core.nth.call(null,inst_7226,(0),null);
var inst_7228 = cljs.core.nth.call(null,inst_7226,(1),null);
var inst_7229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7231 = [inst_7227,inst_7228,request];
var inst_7232 = (new cljs.core.PersistentVector(null,3,(5),inst_7230,inst_7231,null));
var inst_7233 = ["view",inst_7232];
var inst_7234 = (new cljs.core.PersistentVector(null,2,(5),inst_7229,inst_7233,null));
var state_7238__$1 = state_7238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7238__$1,(3),ch,inst_7234);
} else {
if((state_val_7239 === (3))){
var inst_7236 = (state_7238[(2)]);
var state_7238__$1 = state_7238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7238__$1,inst_7236);
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
var statearr_7240 = [null,null,null,null,null,null,null];
(statearr_7240[(0)] = app$stock$cmd$loadUser_$_state_machine__2793__auto__);

(statearr_7240[(1)] = (1));

return statearr_7240;
});
var app$stock$cmd$loadUser_$_state_machine__2793__auto____1 = (function (state_7238){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7241){if((e7241 instanceof Object)){
var ex__2796__auto__ = e7241;
var statearr_7242_7244 = state_7238;
(statearr_7242_7244[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7245 = state_7238;
state_7238 = G__7245;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$loadUser_$_state_machine__2793__auto__ = function(state_7238){
switch(arguments.length){
case 0:
return app$stock$cmd$loadUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$loadUser_$_state_machine__2793__auto____1.call(this,state_7238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$loadUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$loadUser_$_state_machine__2793__auto____0;
app$stock$cmd$loadUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$loadUser_$_state_machine__2793__auto____1;
return app$stock$cmd$loadUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7243 = f__2883__auto__.call(null);
(statearr_7243[(6)] = c__2882__auto__);

return statearr_7243;
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
return (function (state_7264){
var state_val_7265 = (state_7264[(1)]);
if((state_val_7265 === (1))){
var inst_7249 = JSON.stringify(data);
var inst_7250 = app.stock.dbfile.saveToUser.call(null,fbid,accessToken,inst_7249);
var state_7264__$1 = state_7264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7264__$1,(2),inst_7250);
} else {
if((state_val_7265 === (2))){
var inst_7252 = (state_7264[(2)]);
var inst_7253 = cljs.core.nth.call(null,inst_7252,(0),null);
var inst_7254 = cljs.core.nth.call(null,inst_7252,(1),null);
var inst_7255 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7257 = [inst_7253,inst_7254,request];
var inst_7258 = (new cljs.core.PersistentVector(null,3,(5),inst_7256,inst_7257,null));
var inst_7259 = ["view",inst_7258];
var inst_7260 = (new cljs.core.PersistentVector(null,2,(5),inst_7255,inst_7259,null));
var state_7264__$1 = state_7264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7264__$1,(3),ch,inst_7260);
} else {
if((state_val_7265 === (3))){
var inst_7262 = (state_7264[(2)]);
var state_7264__$1 = state_7264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7264__$1,inst_7262);
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
var statearr_7266 = [null,null,null,null,null,null,null];
(statearr_7266[(0)] = app$stock$cmd$saveUser_$_state_machine__2793__auto__);

(statearr_7266[(1)] = (1));

return statearr_7266;
});
var app$stock$cmd$saveUser_$_state_machine__2793__auto____1 = (function (state_7264){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7267){if((e7267 instanceof Object)){
var ex__2796__auto__ = e7267;
var statearr_7268_7270 = state_7264;
(statearr_7268_7270[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7271 = state_7264;
state_7264 = G__7271;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$cmd$saveUser_$_state_machine__2793__auto__ = function(state_7264){
switch(arguments.length){
case 0:
return app$stock$cmd$saveUser_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$cmd$saveUser_$_state_machine__2793__auto____1.call(this,state_7264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$cmd$saveUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$cmd$saveUser_$_state_machine__2793__auto____0;
app$stock$cmd$saveUser_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$cmd$saveUser_$_state_machine__2793__auto____1;
return app$stock$cmd$saveUser_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7269 = f__2883__auto__.call(null);
(statearr_7269[(6)] = c__2882__auto__);

return statearr_7269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});

//# sourceMappingURL=cmd.js.map
