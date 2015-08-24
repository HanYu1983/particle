// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.cmd.save_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_49243){var state_val_49244 = (state_49243[(1)]);if((state_val_49244 === (3)))
{var inst_49241 = (state_49243[(2)]);var state_49243__$1 = state_49243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49243__$1,inst_49241);
} else
{if((state_val_49244 === (2)))
{var inst_49230 = (state_49243[(2)]);var inst_49231 = cljs.core.nth.call(null,inst_49230,(0),null);var inst_49232 = cljs.core.nth.call(null,inst_49230,(1),null);var inst_49233 = stock.tool.parse_getprices.call(null,inst_49232);var inst_49234 = stock.tool.format_getprices.call(null,(86400),inst_49233);var inst_49235 = cljs.core.reverse.call(null,inst_49234);var inst_49236 = [inst_49231,inst_49235,id,date,request];var inst_49237 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49236,null));var inst_49238 = ["loadStock",inst_49237];var inst_49239 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49238,null));var state_49243__$1 = state_49243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49243__$1,(3),ch,inst_49239);
} else
{if((state_val_49244 === (1)))
{var inst_49227 = stock.tool.goog_finance_getprices_url.call(null,id,"1Y");var inst_49228 = stock.tool.content.call(null,inst_49227);var state_49243__$1 = state_49243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49243__$1,(2),inst_49228);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49248 = [null,null,null,null,null,null,null];(statearr_49248[(0)] = state_machine__6188__auto__);
(statearr_49248[(1)] = (1));
return statearr_49248;
});
var state_machine__6188__auto____1 = (function (state_49243){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49243);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49249){if((e49249 instanceof Object))
{var ex__6191__auto__ = e49249;var statearr_49250_49252 = state_49243;(statearr_49250_49252[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49253 = state_49243;
state_49243 = G__49253;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49243){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49251 = f__6203__auto__.call(null);(statearr_49251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_49217){var state_val_49218 = (state_49217[(1)]);if((state_val_49218 === (2)))
{var inst_49215 = (state_49217[(2)]);var state_49217__$1 = state_49217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49217__$1,inst_49215);
} else
{if((state_val_49218 === (1)))
{var inst_49206 = cljs.core.first.call(null,result);var inst_49207 = cljs.core.second.call(null,result);var inst_49208 = cljs.core.nth.call(null,result,(2));var inst_49209 = cljs.core.nth.call(null,result,(3));var inst_49210 = [inst_49206,inst_49207,inst_49208,inst_49209,request];var inst_49211 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49210,null));var inst_49212 = ["loadStock",inst_49211];var inst_49213 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49212,null));var state_49217__$1 = state_49217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49217__$1,(2),ch,inst_49213);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49222 = [null,null,null,null,null,null,null];(statearr_49222[(0)] = state_machine__6188__auto__);
(statearr_49222[(1)] = (1));
return statearr_49222;
});
var state_machine__6188__auto____1 = (function (state_49217){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49217);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49223){if((e49223 instanceof Object))
{var ex__6191__auto__ = e49223;var statearr_49224_49254 = state_49217;(statearr_49224_49254[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49255 = state_49217;
state_49217 = G__49255;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49217){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49225 = f__6203__auto__.call(null);(statearr_49225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
loadStock = function(ch,id,date,request,result){
switch(arguments.length){
case 4:
return loadStock__4.call(this,ch,id,date,request);
case 5:
return loadStock__5.call(this,ch,id,date,request,result);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
loadStock.cljs$core$IFn$_invoke$arity$4 = loadStock__4;
loadStock.cljs$core$IFn$_invoke$arity$5 = loadStock__5;
return loadStock;
})()
;
app.stock.cmd.loadUser = (function loadUser(ch,fbid,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_49285){var state_val_49286 = (state_49285[(1)]);if((state_val_49286 === (2)))
{var inst_49283 = (state_49285[(2)]);var state_49285__$1 = state_49285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49285__$1,inst_49283);
} else
{if((state_val_49286 === (1)))
{var inst_49275 = cljs.core.deref.call(null,app.stock.cmd.save_data);var inst_49276 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid));var inst_49277 = cljs.core.get.call(null,inst_49275,inst_49276);var inst_49278 = [null,inst_49277,request];var inst_49279 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49278,null));var inst_49280 = ["view",inst_49279];var inst_49281 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49280,null));var state_49285__$1 = state_49285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49285__$1,(2),ch,inst_49281);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49290 = [null,null,null,null,null,null,null];(statearr_49290[(0)] = state_machine__6188__auto__);
(statearr_49290[(1)] = (1));
return statearr_49290;
});
var state_machine__6188__auto____1 = (function (state_49285){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49285);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49291){if((e49291 instanceof Object))
{var ex__6191__auto__ = e49291;var statearr_49292_49294 = state_49285;(statearr_49292_49294[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49295 = state_49285;
state_49285 = G__49295;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49285){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49293 = f__6203__auto__.call(null);(statearr_49293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){cljs.core.swap_BANG_.call(null,app.stock.cmd.save_data,cljs.core.assoc,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fbid)),data);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_49319){var state_val_49320 = (state_49319[(1)]);if((state_val_49320 === (2)))
{var inst_49317 = (state_49319[(2)]);var state_49319__$1 = state_49319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49319__$1,inst_49317);
} else
{if((state_val_49320 === (1)))
{var inst_49312 = [null,null,request];var inst_49313 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49312,null));var inst_49314 = ["view",inst_49313];var inst_49315 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_49314,null));var state_49319__$1 = state_49319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49319__$1,(2),ch,inst_49315);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_49324 = [null,null,null,null,null,null,null];(statearr_49324[(0)] = state_machine__6188__auto__);
(statearr_49324[(1)] = (1));
return statearr_49324;
});
var state_machine__6188__auto____1 = (function (state_49319){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_49319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e49325){if((e49325 instanceof Object))
{var ex__6191__auto__ = e49325;var statearr_49326_49328 = state_49319;(statearr_49326_49328[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49329 = state_49319;
state_49319 = G__49329;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_49319){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_49319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_49327 = f__6203__auto__.call(null);(statearr_49327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_49327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
