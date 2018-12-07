// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('stock.tool');
goog.require('cljs.core.async');
goog.require('app.stock.dbfile');
goog.require('app.stock.abstract$');
goog.require('app.stock.impl');
app.stock.main.main = (function app$stock$main$main(){
var onView_8203 = cljs.core.async.chan.call(null);
var onModel_8204 = cljs.core.async.chan.call(null);
var onSys_8205 = cljs.core.async.chan.call(null);
common.onView.subscribe(((function (onView_8203,onModel_8204,onSys_8205){
return (function (data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,onView_8203,onModel_8204,onSys_8205){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,onView_8203,onModel_8204,onSys_8205){
return (function (state_8118){
var state_val_8119 = (state_8118[(1)]);
if((state_val_8119 === (1))){
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8118__$1,(2),onView_8203,data);
} else {
if((state_val_8119 === (2))){
var inst_8116 = (state_8118[(2)]);
var state_8118__$1 = state_8118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8118__$1,inst_8116);
} else {
return null;
}
}
});})(c__2882__auto__,onView_8203,onModel_8204,onSys_8205))
;
return ((function (switch__2792__auto__,c__2882__auto__,onView_8203,onModel_8204,onSys_8205){
return (function() {
var app$stock$main$main_$_state_machine__2793__auto__ = null;
var app$stock$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8120 = [null,null,null,null,null,null,null];
(statearr_8120[(0)] = app$stock$main$main_$_state_machine__2793__auto__);

(statearr_8120[(1)] = (1));

return statearr_8120;
});
var app$stock$main$main_$_state_machine__2793__auto____1 = (function (state_8118){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8121){if((e8121 instanceof Object)){
var ex__2796__auto__ = e8121;
var statearr_8122_8206 = state_8118;
(statearr_8122_8206[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8207 = state_8118;
state_8118 = G__8207;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2793__auto__ = function(state_8118){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2793__auto____1.call(this,state_8118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2793__auto____0;
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2793__auto____1;
return app$stock$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,onView_8203,onModel_8204,onSys_8205))
})();
var state__2884__auto__ = (function (){var statearr_8123 = f__2883__auto__.call(null);
(statearr_8123[(6)] = c__2882__auto__);

return statearr_8123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,onView_8203,onModel_8204,onSys_8205))
);

return c__2882__auto__;
});})(onView_8203,onModel_8204,onSys_8205))
);

var c__2882__auto___8208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___8208,onView_8203,onModel_8204,onSys_8205){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___8208,onView_8203,onModel_8204,onSys_8205){
return (function (state_8132){
var state_val_8133 = (state_8132[(1)]);
if((state_val_8133 === (1))){
var state_8132__$1 = state_8132;
var statearr_8134_8209 = state_8132__$1;
(statearr_8134_8209[(2)] = null);

(statearr_8134_8209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8133 === (2))){
var state_8132__$1 = state_8132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8132__$1,(4),onModel_8204);
} else {
if((state_val_8133 === (3))){
var inst_8130 = (state_8132[(2)]);
var state_8132__$1 = state_8132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8132__$1,inst_8130);
} else {
if((state_val_8133 === (4))){
var inst_8126 = (state_8132[(2)]);
var inst_8127 = common.onModel.onNext(inst_8126);
var state_8132__$1 = (function (){var statearr_8135 = state_8132;
(statearr_8135[(7)] = inst_8127);

return statearr_8135;
})();
var statearr_8136_8210 = state_8132__$1;
(statearr_8136_8210[(2)] = null);

(statearr_8136_8210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__2882__auto___8208,onView_8203,onModel_8204,onSys_8205))
;
return ((function (switch__2792__auto__,c__2882__auto___8208,onView_8203,onModel_8204,onSys_8205){
return (function() {
var app$stock$main$main_$_state_machine__2793__auto__ = null;
var app$stock$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8137 = [null,null,null,null,null,null,null,null];
(statearr_8137[(0)] = app$stock$main$main_$_state_machine__2793__auto__);

(statearr_8137[(1)] = (1));

return statearr_8137;
});
var app$stock$main$main_$_state_machine__2793__auto____1 = (function (state_8132){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8138){if((e8138 instanceof Object)){
var ex__2796__auto__ = e8138;
var statearr_8139_8211 = state_8132;
(statearr_8139_8211[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8212 = state_8132;
state_8132 = G__8212;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2793__auto__ = function(state_8132){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2793__auto____1.call(this,state_8132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2793__auto____0;
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2793__auto____1;
return app$stock$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___8208,onView_8203,onModel_8204,onSys_8205))
})();
var state__2884__auto__ = (function (){var statearr_8140 = f__2883__auto__.call(null);
(statearr_8140[(6)] = c__2882__auto___8208);

return statearr_8140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___8208,onView_8203,onModel_8204,onSys_8205))
);


var c__2882__auto___8213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___8213,onView_8203,onModel_8204,onSys_8205){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___8213,onView_8203,onModel_8204,onSys_8205){
return (function (state_8184){
var state_val_8185 = (state_8184[(1)]);
if((state_val_8185 === (7))){
var inst_8179 = (state_8184[(2)]);
var inst_8146 = inst_8179;
var state_8184__$1 = (function (){var statearr_8186 = state_8184;
(statearr_8186[(7)] = inst_8146);

return statearr_8186;
})();
var statearr_8187_8214 = state_8184__$1;
(statearr_8187_8214[(2)] = null);

(statearr_8187_8214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8185 === (1))){
var inst_8141 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];
var inst_8142 = cljs.core.PersistentHashMap.EMPTY;
var inst_8143 = cljs.core.PersistentHashMap.EMPTY;
var inst_8144 = [onView_8203,onModel_8204,onSys_8205,inst_8142,inst_8143];
var inst_8145 = cljs.core.PersistentHashMap.fromArrays(inst_8141,inst_8144);
var inst_8146 = inst_8145;
var state_8184__$1 = (function (){var statearr_8188 = state_8184;
(statearr_8188[(7)] = inst_8146);

return statearr_8188;
})();
var statearr_8189_8215 = state_8184__$1;
(statearr_8189_8215[(2)] = null);

(statearr_8189_8215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8185 === (4))){
var inst_8157 = (state_8184[(8)]);
var inst_8155 = (state_8184[(2)]);
var inst_8156 = cljs.core.nth.call(null,inst_8155,(0),null);
var inst_8157__$1 = cljs.core.nth.call(null,inst_8155,(1),null);
var inst_8161 = cljs.core._EQ_.call(null,onSys_8205,inst_8157__$1);
var state_8184__$1 = (function (){var statearr_8190 = state_8184;
(statearr_8190[(8)] = inst_8157__$1);

(statearr_8190[(9)] = inst_8156);

return statearr_8190;
})();
if(inst_8161){
var statearr_8191_8216 = state_8184__$1;
(statearr_8191_8216[(1)] = (5));

} else {
var statearr_8192_8217 = state_8184__$1;
(statearr_8192_8217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8185 === (6))){
var inst_8157 = (state_8184[(8)]);
var inst_8170 = cljs.core._EQ_.call(null,onView_8203,inst_8157);
var state_8184__$1 = state_8184;
if(inst_8170){
var statearr_8193_8218 = state_8184__$1;
(statearr_8193_8218[(1)] = (8));

} else {
var statearr_8194_8219 = state_8184__$1;
(statearr_8194_8219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8185 === (3))){
var inst_8182 = (state_8184[(2)]);
var state_8184__$1 = state_8184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8184__$1,inst_8182);
} else {
if((state_val_8185 === (2))){
var inst_8151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8152 = [onView_8203,onSys_8205];
var inst_8153 = (new cljs.core.PersistentVector(null,2,(5),inst_8151,inst_8152,null));
var state_8184__$1 = state_8184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8184__$1,(4),inst_8153);
} else {
if((state_val_8185 === (9))){
var inst_8146 = (state_8184[(7)]);
var state_8184__$1 = state_8184;
var statearr_8195_8220 = state_8184__$1;
(statearr_8195_8220[(2)] = inst_8146);

(statearr_8195_8220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8185 === (5))){
var inst_8146 = (state_8184[(7)]);
var inst_8156 = (state_8184[(9)]);
var inst_8166 = cljs.core.nth.call(null,inst_8156,(0),null);
var inst_8167 = cljs.core.nth.call(null,inst_8156,(1),null);
var inst_8168 = app.stock.abstract$.onSystem.call(null,inst_8166,inst_8167,inst_8146);
var state_8184__$1 = state_8184;
var statearr_8196_8221 = state_8184__$1;
(statearr_8196_8221[(2)] = inst_8168);

(statearr_8196_8221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8185 === (10))){
var inst_8177 = (state_8184[(2)]);
var state_8184__$1 = state_8184;
var statearr_8197_8222 = state_8184__$1;
(statearr_8197_8222[(2)] = inst_8177);

(statearr_8197_8222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8185 === (8))){
var inst_8146 = (state_8184[(7)]);
var inst_8156 = (state_8184[(9)]);
var inst_8172 = (inst_8156[(0)]);
var inst_8173 = (inst_8156[(1)]);
var inst_8174 = app.stock.abstract$.onViewCommand.call(null,inst_8172,inst_8173,inst_8146);
var state_8184__$1 = state_8184;
var statearr_8198_8223 = state_8184__$1;
(statearr_8198_8223[(2)] = inst_8174);

(statearr_8198_8223[(1)] = (10));


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
});})(c__2882__auto___8213,onView_8203,onModel_8204,onSys_8205))
;
return ((function (switch__2792__auto__,c__2882__auto___8213,onView_8203,onModel_8204,onSys_8205){
return (function() {
var app$stock$main$main_$_state_machine__2793__auto__ = null;
var app$stock$main$main_$_state_machine__2793__auto____0 = (function (){
var statearr_8199 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8199[(0)] = app$stock$main$main_$_state_machine__2793__auto__);

(statearr_8199[(1)] = (1));

return statearr_8199;
});
var app$stock$main$main_$_state_machine__2793__auto____1 = (function (state_8184){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_8184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e8200){if((e8200 instanceof Object)){
var ex__2796__auto__ = e8200;
var statearr_8201_8224 = state_8184;
(statearr_8201_8224[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8225 = state_8184;
state_8184 = G__8225;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$main$main_$_state_machine__2793__auto__ = function(state_8184){
switch(arguments.length){
case 0:
return app$stock$main$main_$_state_machine__2793__auto____0.call(this);
case 1:
return app$stock$main$main_$_state_machine__2793__auto____1.call(this,state_8184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$main$main_$_state_machine__2793__auto____0;
app$stock$main$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$main$main_$_state_machine__2793__auto____1;
return app$stock$main$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___8213,onView_8203,onModel_8204,onSys_8205))
})();
var state__2884__auto__ = (function (){var statearr_8202 = f__2883__auto__.call(null);
(statearr_8202[(6)] = c__2882__auto___8213);

return statearr_8202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___8213,onView_8203,onModel_8204,onSys_8205))
);



return null;
});
app.stock.main.main.call(null);

//# sourceMappingURL=main.js.map
