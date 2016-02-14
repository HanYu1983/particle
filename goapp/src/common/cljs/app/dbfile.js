// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.saveToUser = (function saveToUser(fbid,accessToken,data){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);filename.writefile((function (){var obj35294 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};return obj35294;
})(),((function (ret,filename){
return (function (err,data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_35301){var state_val_35302 = (state_35301[(1)]);if((state_val_35302 === (2)))
{var inst_35298 = (state_35301[(2)]);var inst_35299 = cljs.core.async.close_BANG_.call(null,ret);var state_35301__$1 = (function (){var statearr_35303 = state_35301;(statearr_35303[(7)] = inst_35298);
return statearr_35303;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35301__$1,inst_35299);
} else
{if((state_val_35302 === (1)))
{var inst_35295 = [err,data__$1];var inst_35296 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35295,null));var state_35301__$1 = state_35301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35301__$1,(2),ret,inst_35296);
} else
{return null;
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35307 = [null,null,null,null,null,null,null,null];(statearr_35307[(0)] = state_machine__6188__auto__);
(statearr_35307[(1)] = (1));
return statearr_35307;
});
var state_machine__6188__auto____1 = (function (state_35301){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35301);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35308){if((e35308 instanceof Object))
{var ex__6191__auto__ = e35308;var statearr_35309_35311 = state_35301;(statearr_35309_35311[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35312 = state_35301;
state_35301 = G__35312;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35301){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_35310 = f__6203__auto__.call(null);(statearr_35310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
);
return ret;
});
app.dbfile.loadFromUser = (function loadFromUser(fbid,accessToken){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);filename.file((function (){var obj35332 = {"FBID":fbid,"AccessToken":accessToken};return obj35332;
})(),"json",((function (ret,filename){
return (function (err,data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_35339){var state_val_35340 = (state_35339[(1)]);if((state_val_35340 === (2)))
{var inst_35336 = (state_35339[(2)]);var inst_35337 = cljs.core.async.close_BANG_.call(null,ret);var state_35339__$1 = (function (){var statearr_35341 = state_35339;(statearr_35341[(7)] = inst_35336);
return statearr_35341;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35339__$1,inst_35337);
} else
{if((state_val_35340 === (1)))
{var inst_35333 = [err,data];var inst_35334 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35333,null));var state_35339__$1 = state_35339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35339__$1,(2),ret,inst_35334);
} else
{return null;
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35345 = [null,null,null,null,null,null,null,null];(statearr_35345[(0)] = state_machine__6188__auto__);
(statearr_35345[(1)] = (1));
return statearr_35345;
});
var state_machine__6188__auto____1 = (function (state_35339){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35339);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35346){if((e35346 instanceof Object))
{var ex__6191__auto__ = e35346;var statearr_35347_35349 = state_35339;(statearr_35347_35349[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35339);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35350 = state_35339;
state_35339 = G__35350;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35339){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_35348 = f__6203__auto__.call(null);(statearr_35348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
);
return ret;
});
