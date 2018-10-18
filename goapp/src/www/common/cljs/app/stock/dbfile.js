// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.dbfile.saveToUser = (function saveToUser(fbid,accessToken,data){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);db2.writefile(filename,(function (){var obj31505 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};return obj31505;
})(),((function (ret,filename){
return (function (err,data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_31512){var state_val_31513 = (state_31512[(1)]);if((state_val_31513 === (2)))
{var inst_31509 = (state_31512[(2)]);var inst_31510 = cljs.core.async.close_BANG_.call(null,ret);var state_31512__$1 = (function (){var statearr_31514 = state_31512;(statearr_31514[(7)] = inst_31509);
return statearr_31514;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31512__$1,inst_31510);
} else
{if((state_val_31513 === (1)))
{var inst_31506 = [err,data__$1];var inst_31507 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31506,null));var state_31512__$1 = state_31512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31512__$1,(2),ret,inst_31507);
} else
{return null;
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31518 = [null,null,null,null,null,null,null,null];(statearr_31518[(0)] = state_machine__6188__auto__);
(statearr_31518[(1)] = (1));
return statearr_31518;
});
var state_machine__6188__auto____1 = (function (state_31512){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31512);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31519){if((e31519 instanceof Object))
{var ex__6191__auto__ = e31519;var statearr_31520_31522 = state_31512;(statearr_31520_31522[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31523 = state_31512;
state_31512 = G__31523;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31512){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_31521 = f__6203__auto__.call(null);(statearr_31521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
);
return ret;
});
app.stock.dbfile.loadFromUser = (function loadFromUser(fbid,accessToken){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);db2.file(filename,(function (){var obj31556 = {"FBID":fbid,"AccessToken":accessToken};return obj31556;
})(),"json",((function (ret,filename){
return (function (err,data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_31572){var state_val_31573 = (state_31572[(1)]);if((state_val_31573 === (6)))
{var inst_31567 = (state_31572[(2)]);var state_31572__$1 = state_31572;var statearr_31574_31586 = state_31572__$1;(statearr_31574_31586[(2)] = inst_31567);
(statearr_31574_31586[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31573 === (5)))
{var inst_31562 = (state_31572[(2)]);var state_31572__$1 = state_31572;var statearr_31575_31587 = state_31572__$1;(statearr_31575_31587[(2)] = inst_31562);
(statearr_31575_31587[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31573 === (4)))
{var inst_31569 = (state_31572[(2)]);var inst_31570 = cljs.core.async.close_BANG_.call(null,ret);var state_31572__$1 = (function (){var statearr_31576 = state_31572;(statearr_31576[(7)] = inst_31569);
return statearr_31576;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31572__$1,inst_31570);
} else
{if((state_val_31573 === (3)))
{var inst_31564 = [err,data];var inst_31565 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31564,null));var state_31572__$1 = state_31572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31572__$1,(6),ret,inst_31565);
} else
{if((state_val_31573 === (2)))
{var inst_31559 = [null,null];var inst_31560 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_31559,null));var state_31572__$1 = state_31572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31572__$1,(5),ret,inst_31560);
} else
{if((state_val_31573 === (1)))
{var inst_31557 = cljs.core._EQ_.call(null,err,"file not found");var state_31572__$1 = state_31572;if(inst_31557)
{var statearr_31577_31588 = state_31572__$1;(statearr_31577_31588[(1)] = (2));
} else
{var statearr_31578_31589 = state_31572__$1;(statearr_31578_31589[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31582 = [null,null,null,null,null,null,null,null];(statearr_31582[(0)] = state_machine__6188__auto__);
(statearr_31582[(1)] = (1));
return statearr_31582;
});
var state_machine__6188__auto____1 = (function (state_31572){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31583){if((e31583 instanceof Object))
{var ex__6191__auto__ = e31583;var statearr_31584_31590 = state_31572;(statearr_31584_31590[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31572);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31591 = state_31572;
state_31572 = G__31591;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31572){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_31585 = f__6203__auto__.call(null);(statearr_31585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_31585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
);
return ret;
});
