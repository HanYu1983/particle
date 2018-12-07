// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('cljs.core.async');
goog.require('app.stock.dbfile');
goog.require('app.stock.abstract$');
goog.require('app.stock.impl');
app.stock.main.main = (function app$stock$main$main(){
var onView_56292 = cljs.core.async.chan.call(null);
var onModel_56293 = cljs.core.async.chan.call(null);
var onSys_56294 = cljs.core.async.chan.call(null);
common.onView.subscribe(((function (onView_56292,onModel_56293,onSys_56294){
return (function (data){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,onView_56292,onModel_56293,onSys_56294){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,onView_56292,onModel_56293,onSys_56294){
return (function (state_56207){
var state_val_56208 = (state_56207[(1)]);
if((state_val_56208 === (1))){
var state_56207__$1 = state_56207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56207__$1,(2),onView_56292,data);
} else {
if((state_val_56208 === (2))){
var inst_56205 = (state_56207[(2)]);
var state_56207__$1 = state_56207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56207__$1,inst_56205);
} else {
return null;
}
}
});})(c__2884__auto__,onView_56292,onModel_56293,onSys_56294))
;
return ((function (switch__2794__auto__,c__2884__auto__,onView_56292,onModel_56293,onSys_56294){
return (function() {
var app$stock$main$main_$_state_machine__2795__auto__ = null;
var app$stock$main$main_$_state_machine__2795__auto____0 = (function (){
var statearr_56209 = [null,null,null,null,null,null,null];
(statearr_56209[(0)] = app$stock$main$main_$_state_machine__2795__auto__);

(statearr_56209[(1)] = (1));

return statearr_56209;
});
var app$stock$main$main_$_state_machine__2795__auto____1 = (function (state_56207){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_56207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e56210){if((e56210 instanceof Object)){
var ex__2798__auto__ = e56210;
var statearr_56211_56295 = state_56207;
(statearr_56211_56295[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56296 = state_56207;
state_56207 = G__56296;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2795__auto__ = function(state_56207){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2795__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2795__auto____1.call(this,state_56207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2795__auto____0;
app$stock$main$main_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2795__auto____1;
return app$stock$main$main_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,onView_56292,onModel_56293,onSys_56294))
})();
var state__2886__auto__ = (function (){var statearr_56212 = f__2885__auto__.call(null);
(statearr_56212[(6)] = c__2884__auto__);

return statearr_56212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,onView_56292,onModel_56293,onSys_56294))
);

return c__2884__auto__;
});})(onView_56292,onModel_56293,onSys_56294))
);

var c__2884__auto___56297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___56297,onView_56292,onModel_56293,onSys_56294){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___56297,onView_56292,onModel_56293,onSys_56294){
return (function (state_56221){
var state_val_56222 = (state_56221[(1)]);
if((state_val_56222 === (1))){
var state_56221__$1 = state_56221;
var statearr_56223_56298 = state_56221__$1;
(statearr_56223_56298[(2)] = null);

(statearr_56223_56298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56222 === (2))){
var state_56221__$1 = state_56221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56221__$1,(4),onModel_56293);
} else {
if((state_val_56222 === (3))){
var inst_56219 = (state_56221[(2)]);
var state_56221__$1 = state_56221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56221__$1,inst_56219);
} else {
if((state_val_56222 === (4))){
var inst_56215 = (state_56221[(2)]);
var inst_56216 = common.onModel.onNext(inst_56215);
var state_56221__$1 = (function (){var statearr_56224 = state_56221;
(statearr_56224[(7)] = inst_56216);

return statearr_56224;
})();
var statearr_56225_56299 = state_56221__$1;
(statearr_56225_56299[(2)] = null);

(statearr_56225_56299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2884__auto___56297,onView_56292,onModel_56293,onSys_56294))
;
return ((function (switch__2794__auto__,c__2884__auto___56297,onView_56292,onModel_56293,onSys_56294){
return (function() {
var app$stock$main$main_$_state_machine__2795__auto__ = null;
var app$stock$main$main_$_state_machine__2795__auto____0 = (function (){
var statearr_56226 = [null,null,null,null,null,null,null,null];
(statearr_56226[(0)] = app$stock$main$main_$_state_machine__2795__auto__);

(statearr_56226[(1)] = (1));

return statearr_56226;
});
var app$stock$main$main_$_state_machine__2795__auto____1 = (function (state_56221){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_56221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e56227){if((e56227 instanceof Object)){
var ex__2798__auto__ = e56227;
var statearr_56228_56300 = state_56221;
(statearr_56228_56300[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56301 = state_56221;
state_56221 = G__56301;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2795__auto__ = function(state_56221){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2795__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2795__auto____1.call(this,state_56221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2795__auto____0;
app$stock$main$main_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2795__auto____1;
return app$stock$main$main_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___56297,onView_56292,onModel_56293,onSys_56294))
})();
var state__2886__auto__ = (function (){var statearr_56229 = f__2885__auto__.call(null);
(statearr_56229[(6)] = c__2884__auto___56297);

return statearr_56229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___56297,onView_56292,onModel_56293,onSys_56294))
);


var c__2884__auto___56302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___56302,onView_56292,onModel_56293,onSys_56294){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___56302,onView_56292,onModel_56293,onSys_56294){
return (function (state_56273){
var state_val_56274 = (state_56273[(1)]);
if((state_val_56274 === (7))){
var inst_56268 = (state_56273[(2)]);
var inst_56235 = inst_56268;
var state_56273__$1 = (function (){var statearr_56275 = state_56273;
(statearr_56275[(7)] = inst_56235);

return statearr_56275;
})();
var statearr_56276_56303 = state_56273__$1;
(statearr_56276_56303[(2)] = null);

(statearr_56276_56303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (1))){
var inst_56230 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];
var inst_56231 = cljs.core.PersistentHashMap.EMPTY;
var inst_56232 = cljs.core.PersistentHashMap.EMPTY;
var inst_56233 = [onView_56292,onModel_56293,onSys_56294,inst_56231,inst_56232];
var inst_56234 = cljs.core.PersistentHashMap.fromArrays(inst_56230,inst_56233);
var inst_56235 = inst_56234;
var state_56273__$1 = (function (){var statearr_56277 = state_56273;
(statearr_56277[(7)] = inst_56235);

return statearr_56277;
})();
var statearr_56278_56304 = state_56273__$1;
(statearr_56278_56304[(2)] = null);

(statearr_56278_56304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (4))){
var inst_56246 = (state_56273[(8)]);
var inst_56244 = (state_56273[(2)]);
var inst_56245 = cljs.core.nth.call(null,inst_56244,(0),null);
var inst_56246__$1 = cljs.core.nth.call(null,inst_56244,(1),null);
var inst_56250 = cljs.core._EQ_.call(null,onSys_56294,inst_56246__$1);
var state_56273__$1 = (function (){var statearr_56279 = state_56273;
(statearr_56279[(9)] = inst_56245);

(statearr_56279[(8)] = inst_56246__$1);

return statearr_56279;
})();
if(inst_56250){
var statearr_56280_56305 = state_56273__$1;
(statearr_56280_56305[(1)] = (5));

} else {
var statearr_56281_56306 = state_56273__$1;
(statearr_56281_56306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (6))){
var inst_56246 = (state_56273[(8)]);
var inst_56259 = cljs.core._EQ_.call(null,onView_56292,inst_56246);
var state_56273__$1 = state_56273;
if(inst_56259){
var statearr_56282_56307 = state_56273__$1;
(statearr_56282_56307[(1)] = (8));

} else {
var statearr_56283_56308 = state_56273__$1;
(statearr_56283_56308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (3))){
var inst_56271 = (state_56273[(2)]);
var state_56273__$1 = state_56273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56273__$1,inst_56271);
} else {
if((state_val_56274 === (2))){
var inst_56240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56241 = [onView_56292,onSys_56294];
var inst_56242 = (new cljs.core.PersistentVector(null,2,(5),inst_56240,inst_56241,null));
var state_56273__$1 = state_56273;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56273__$1,(4),inst_56242);
} else {
if((state_val_56274 === (9))){
var inst_56235 = (state_56273[(7)]);
var state_56273__$1 = state_56273;
var statearr_56284_56309 = state_56273__$1;
(statearr_56284_56309[(2)] = inst_56235);

(statearr_56284_56309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (5))){
var inst_56245 = (state_56273[(9)]);
var inst_56235 = (state_56273[(7)]);
var inst_56255 = cljs.core.nth.call(null,inst_56245,(0),null);
var inst_56256 = cljs.core.nth.call(null,inst_56245,(1),null);
var inst_56257 = app.stock.abstract$.onSystem.call(null,inst_56255,inst_56256,inst_56235);
var state_56273__$1 = state_56273;
var statearr_56285_56310 = state_56273__$1;
(statearr_56285_56310[(2)] = inst_56257);

(statearr_56285_56310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (10))){
var inst_56266 = (state_56273[(2)]);
var state_56273__$1 = state_56273;
var statearr_56286_56311 = state_56273__$1;
(statearr_56286_56311[(2)] = inst_56266);

(statearr_56286_56311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56274 === (8))){
var inst_56245 = (state_56273[(9)]);
var inst_56235 = (state_56273[(7)]);
var inst_56261 = (inst_56245[(0)]);
var inst_56262 = (inst_56245[(1)]);
var inst_56263 = app.stock.abstract$.onViewCommand.call(null,inst_56261,inst_56262,inst_56235);
var state_56273__$1 = state_56273;
var statearr_56287_56312 = state_56273__$1;
(statearr_56287_56312[(2)] = inst_56263);

(statearr_56287_56312[(1)] = (10));


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
});})(c__2884__auto___56302,onView_56292,onModel_56293,onSys_56294))
;
return ((function (switch__2794__auto__,c__2884__auto___56302,onView_56292,onModel_56293,onSys_56294){
return (function() {
var app$stock$main$main_$_state_machine__2795__auto__ = null;
var app$stock$main$main_$_state_machine__2795__auto____0 = (function (){
var statearr_56288 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56288[(0)] = app$stock$main$main_$_state_machine__2795__auto__);

(statearr_56288[(1)] = (1));

return statearr_56288;
});
var app$stock$main$main_$_state_machine__2795__auto____1 = (function (state_56273){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_56273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e56289){if((e56289 instanceof Object)){
var ex__2798__auto__ = e56289;
var statearr_56290_56313 = state_56273;
(statearr_56290_56313[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56314 = state_56273;
state_56273 = G__56314;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2795__auto__ = function(state_56273){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2795__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2795__auto____1.call(this,state_56273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2795__auto____0;
app$stock$main$main_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2795__auto____1;
return app$stock$main$main_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___56302,onView_56292,onModel_56293,onSys_56294))
})();
var state__2886__auto__ = (function (){var statearr_56291 = f__2885__auto__.call(null);
(statearr_56291[(6)] = c__2884__auto___56302);

return statearr_56291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___56302,onView_56292,onModel_56293,onSys_56294))
);



return null;
});
app.stock.main.main.call(null);

//# sourceMappingURL=main.js.map
