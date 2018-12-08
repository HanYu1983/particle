// Compiled by ClojureScript 1.10.238 {}
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
test.dialog.view = (function test$dialog$view(elem,ctx){
var show_6191 = tool.dialog.showstr.call(null,ctx);
var G__6190_6192 = elem;
G__6190_6192.empty();

G__6190_6192.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_6191)));


return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function test$dialog$main(){
var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));
var onTick = cljs.core.async.chan.call(null);
var onClick = cljs.core.async.chan.call(null);
var c__2882__auto___6281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___6281,test_str,onTick,onClick){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___6281,test_str,onTick,onClick){
return (function (state_6229){
var state_val_6230 = (state_6229[(1)]);
if((state_val_6230 === (7))){
var inst_6224 = (state_6229[(2)]);
var inst_6197 = inst_6224;
var state_6229__$1 = (function (){var statearr_6231 = state_6229;
(statearr_6231[(7)] = inst_6197);

return statearr_6231;
})();
var statearr_6232_6282 = state_6229__$1;
(statearr_6232_6282[(2)] = null);

(statearr_6232_6282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6230 === (1))){
var inst_6193 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_6194 = [(4),test_str];
var inst_6195 = cljs.core.PersistentHashMap.fromArrays(inst_6193,inst_6194);
var inst_6196 = tool.dialog.dialog.call(null,inst_6195);
var inst_6197 = inst_6196;
var state_6229__$1 = (function (){var statearr_6233 = state_6229;
(statearr_6233[(7)] = inst_6197);

return statearr_6233;
})();
var statearr_6234_6283 = state_6229__$1;
(statearr_6234_6283[(2)] = null);

(statearr_6234_6283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6230 === (4))){
var inst_6208 = (state_6229[(8)]);
var inst_6206 = (state_6229[(2)]);
var inst_6207 = cljs.core.nth.call(null,inst_6206,(0),null);
var inst_6208__$1 = cljs.core.nth.call(null,inst_6206,(1),null);
var inst_6212 = cljs.core._EQ_.call(null,onTick,inst_6208__$1);
var state_6229__$1 = (function (){var statearr_6235 = state_6229;
(statearr_6235[(9)] = inst_6207);

(statearr_6235[(8)] = inst_6208__$1);

return statearr_6235;
})();
if(inst_6212){
var statearr_6236_6284 = state_6229__$1;
(statearr_6236_6284[(1)] = (5));

} else {
var statearr_6237_6285 = state_6229__$1;
(statearr_6237_6285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6230 === (6))){
var inst_6208 = (state_6229[(8)]);
var inst_6217 = cljs.core._EQ_.call(null,onClick,inst_6208);
var state_6229__$1 = state_6229;
if(inst_6217){
var statearr_6238_6286 = state_6229__$1;
(statearr_6238_6286[(1)] = (8));

} else {
var statearr_6239_6287 = state_6229__$1;
(statearr_6239_6287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6230 === (3))){
var inst_6227 = (state_6229[(2)]);
var state_6229__$1 = state_6229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6229__$1,inst_6227);
} else {
if((state_val_6230 === (2))){
var inst_6202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6203 = [onTick,onClick];
var inst_6204 = (new cljs.core.PersistentVector(null,2,(5),inst_6202,inst_6203,null));
var state_6229__$1 = state_6229;
return cljs.core.async.ioc_alts_BANG_.call(null,state_6229__$1,(4),inst_6204);
} else {
if((state_val_6230 === (9))){
var inst_6197 = (state_6229[(7)]);
var state_6229__$1 = state_6229;
var statearr_6240_6288 = state_6229__$1;
(statearr_6240_6288[(2)] = inst_6197);

(statearr_6240_6288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6230 === (5))){
var inst_6197 = (state_6229[(7)]);
var inst_6214 = tool.dialog.step.call(null,inst_6197);
var inst_6215 = test.dialog.view.call(null,inst_6214);
var state_6229__$1 = state_6229;
var statearr_6241_6289 = state_6229__$1;
(statearr_6241_6289[(2)] = inst_6215);

(statearr_6241_6289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6230 === (10))){
var inst_6222 = (state_6229[(2)]);
var state_6229__$1 = state_6229;
var statearr_6242_6290 = state_6229__$1;
(statearr_6242_6290[(2)] = inst_6222);

(statearr_6242_6290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6230 === (8))){
var inst_6197 = (state_6229[(7)]);
var inst_6219 = tool.dialog.requestNext.call(null,inst_6197);
var state_6229__$1 = state_6229;
var statearr_6243_6291 = state_6229__$1;
(statearr_6243_6291[(2)] = inst_6219);

(statearr_6243_6291[(1)] = (10));


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
});})(c__2882__auto___6281,test_str,onTick,onClick))
;
return ((function (switch__2792__auto__,c__2882__auto___6281,test_str,onTick,onClick){
return (function() {
var test$dialog$main_$_state_machine__2793__auto__ = null;
var test$dialog$main_$_state_machine__2793__auto____0 = (function (){
var statearr_6244 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6244[(0)] = test$dialog$main_$_state_machine__2793__auto__);

(statearr_6244[(1)] = (1));

return statearr_6244;
});
var test$dialog$main_$_state_machine__2793__auto____1 = (function (state_6229){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6245){if((e6245 instanceof Object)){
var ex__2796__auto__ = e6245;
var statearr_6246_6292 = state_6229;
(statearr_6246_6292[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6293 = state_6229;
state_6229 = G__6293;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$dialog$main_$_state_machine__2793__auto__ = function(state_6229){
switch(arguments.length){
case 0:
return test$dialog$main_$_state_machine__2793__auto____0.call(this);
case 1:
return test$dialog$main_$_state_machine__2793__auto____1.call(this,state_6229);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialog$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialog$main_$_state_machine__2793__auto____0;
test$dialog$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialog$main_$_state_machine__2793__auto____1;
return test$dialog$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___6281,test_str,onTick,onClick))
})();
var state__2884__auto__ = (function (){var statearr_6247 = f__2883__auto__.call(null);
(statearr_6247[(6)] = c__2882__auto___6281);

return statearr_6247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___6281,test_str,onTick,onClick))
);


var c__2882__auto___6294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___6294,test_str,onTick,onClick){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___6294,test_str,onTick,onClick){
return (function (state_6259){
var state_val_6260 = (state_6259[(1)]);
if((state_val_6260 === (1))){
var inst_6248 = (33);
var state_6259__$1 = (function (){var statearr_6261 = state_6259;
(statearr_6261[(7)] = inst_6248);

return statearr_6261;
})();
var statearr_6262_6295 = state_6259__$1;
(statearr_6262_6295[(2)] = null);

(statearr_6262_6295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6260 === (2))){
var inst_6248 = (state_6259[(7)]);
var inst_6250 = cljs.core.async.timeout.call(null,inst_6248);
var state_6259__$1 = state_6259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6259__$1,(4),inst_6250);
} else {
if((state_val_6260 === (3))){
var inst_6257 = (state_6259[(2)]);
var state_6259__$1 = state_6259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6259__$1,inst_6257);
} else {
if((state_val_6260 === (4))){
var inst_6248 = (state_6259[(7)]);
var inst_6252 = (state_6259[(2)]);
var state_6259__$1 = (function (){var statearr_6264 = state_6259;
(statearr_6264[(8)] = inst_6252);

return statearr_6264;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6259__$1,(5),onTick,inst_6248);
} else {
if((state_val_6260 === (5))){
var inst_6248 = (state_6259[(7)]);
var inst_6254 = (state_6259[(2)]);
var tmp6263 = inst_6248;
var inst_6248__$1 = tmp6263;
var state_6259__$1 = (function (){var statearr_6265 = state_6259;
(statearr_6265[(9)] = inst_6254);

(statearr_6265[(7)] = inst_6248__$1);

return statearr_6265;
})();
var statearr_6266_6296 = state_6259__$1;
(statearr_6266_6296[(2)] = null);

(statearr_6266_6296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__2882__auto___6294,test_str,onTick,onClick))
;
return ((function (switch__2792__auto__,c__2882__auto___6294,test_str,onTick,onClick){
return (function() {
var test$dialog$main_$_state_machine__2793__auto__ = null;
var test$dialog$main_$_state_machine__2793__auto____0 = (function (){
var statearr_6267 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6267[(0)] = test$dialog$main_$_state_machine__2793__auto__);

(statearr_6267[(1)] = (1));

return statearr_6267;
});
var test$dialog$main_$_state_machine__2793__auto____1 = (function (state_6259){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6268){if((e6268 instanceof Object)){
var ex__2796__auto__ = e6268;
var statearr_6269_6297 = state_6259;
(statearr_6269_6297[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6298 = state_6259;
state_6259 = G__6298;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$dialog$main_$_state_machine__2793__auto__ = function(state_6259){
switch(arguments.length){
case 0:
return test$dialog$main_$_state_machine__2793__auto____0.call(this);
case 1:
return test$dialog$main_$_state_machine__2793__auto____1.call(this,state_6259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialog$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialog$main_$_state_machine__2793__auto____0;
test$dialog$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialog$main_$_state_machine__2793__auto____1;
return test$dialog$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___6294,test_str,onTick,onClick))
})();
var state__2884__auto__ = (function (){var statearr_6270 = f__2883__auto__.call(null);
(statearr_6270[(6)] = c__2882__auto___6294);

return statearr_6270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___6294,test_str,onTick,onClick))
);


var G__6271_6299 = $("body");
G__6271_6299.on("click",((function (G__6271_6299,test_str,onTick,onClick){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,G__6271_6299,test_str,onTick,onClick){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,G__6271_6299,test_str,onTick,onClick){
return (function (state_6275){
var state_val_6276 = (state_6275[(1)]);
if((state_val_6276 === (1))){
var state_6275__$1 = state_6275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6275__$1,(2),onClick,(0));
} else {
if((state_val_6276 === (2))){
var inst_6273 = (state_6275[(2)]);
var state_6275__$1 = state_6275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6275__$1,inst_6273);
} else {
return null;
}
}
});})(c__2882__auto__,G__6271_6299,test_str,onTick,onClick))
;
return ((function (switch__2792__auto__,c__2882__auto__,G__6271_6299,test_str,onTick,onClick){
return (function() {
var test$dialog$main_$_state_machine__2793__auto__ = null;
var test$dialog$main_$_state_machine__2793__auto____0 = (function (){
var statearr_6277 = [null,null,null,null,null,null,null];
(statearr_6277[(0)] = test$dialog$main_$_state_machine__2793__auto__);

(statearr_6277[(1)] = (1));

return statearr_6277;
});
var test$dialog$main_$_state_machine__2793__auto____1 = (function (state_6275){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6278){if((e6278 instanceof Object)){
var ex__2796__auto__ = e6278;
var statearr_6279_6300 = state_6275;
(statearr_6279_6300[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6301 = state_6275;
state_6275 = G__6301;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$dialog$main_$_state_machine__2793__auto__ = function(state_6275){
switch(arguments.length){
case 0:
return test$dialog$main_$_state_machine__2793__auto____0.call(this);
case 1:
return test$dialog$main_$_state_machine__2793__auto____1.call(this,state_6275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialog$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialog$main_$_state_machine__2793__auto____0;
test$dialog$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialog$main_$_state_machine__2793__auto____1;
return test$dialog$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,G__6271_6299,test_str,onTick,onClick))
})();
var state__2884__auto__ = (function (){var statearr_6280 = f__2883__auto__.call(null);
(statearr_6280[(6)] = c__2882__auto__);

return statearr_6280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,G__6271_6299,test_str,onTick,onClick))
);

return c__2882__auto__;
});})(G__6271_6299,test_str,onTick,onClick))
);


return null;
});
test.dialog.main.call(null);

//# sourceMappingURL=dialog.js.map
