// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('app.dbfile');
goog.require('app.dbfile');
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84255){var state_val_84256 = (state_84255[(1)]);if((state_val_84256 === (3)))
{var inst_84253 = (state_84255[(2)]);var state_84255__$1 = state_84255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84255__$1,inst_84253);
} else
{if((state_val_84256 === (2)))
{var inst_84242 = (state_84255[(2)]);var inst_84243 = cljs.core.nth.call(null,inst_84242,(0),null);var inst_84244 = cljs.core.nth.call(null,inst_84242,(1),null);var inst_84245 = stock.tool.parse_getprices.call(null,inst_84244);var inst_84246 = stock.tool.format_getprices.call(null,(86400),inst_84245);var inst_84247 = cljs.core.reverse.call(null,inst_84246);var inst_84248 = [inst_84243,inst_84247,id,date,request];var inst_84249 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84248,null));var inst_84250 = ["loadStock",inst_84249];var inst_84251 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84250,null));var state_84255__$1 = state_84255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84255__$1,(3),ch,inst_84251);
} else
{if((state_val_84256 === (1)))
{var inst_84239 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_84240 = stock.tool.content.call(null,inst_84239);var state_84255__$1 = state_84255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84255__$1,(2),inst_84240);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84260 = [null,null,null,null,null,null,null];(statearr_84260[(0)] = state_machine__6188__auto__);
(statearr_84260[(1)] = (1));
return statearr_84260;
});
var state_machine__6188__auto____1 = (function (state_84255){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84261){if((e84261 instanceof Object))
{var ex__6191__auto__ = e84261;var statearr_84262_84264 = state_84255;(statearr_84262_84264[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84261;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84265 = state_84255;
state_84255 = G__84265;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84255){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84263 = f__6203__auto__.call(null);(statearr_84263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84229){var state_val_84230 = (state_84229[(1)]);if((state_val_84230 === (2)))
{var inst_84227 = (state_84229[(2)]);var state_84229__$1 = state_84229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84229__$1,inst_84227);
} else
{if((state_val_84230 === (1)))
{var inst_84218 = cljs.core.first.call(null,result);var inst_84219 = cljs.core.second.call(null,result);var inst_84220 = cljs.core.nth.call(null,result,(2));var inst_84221 = cljs.core.nth.call(null,result,(3));var inst_84222 = [inst_84218,inst_84219,inst_84220,inst_84221,request];var inst_84223 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84222,null));var inst_84224 = ["loadStock",inst_84223];var inst_84225 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84224,null));var state_84229__$1 = state_84229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84229__$1,(2),ch,inst_84225);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84234 = [null,null,null,null,null,null,null];(statearr_84234[(0)] = state_machine__6188__auto__);
(statearr_84234[(1)] = (1));
return statearr_84234;
});
var state_machine__6188__auto____1 = (function (state_84229){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84229);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84235){if((e84235 instanceof Object))
{var ex__6191__auto__ = e84235;var statearr_84236_84266 = state_84229;(statearr_84236_84266[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84229);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84267 = state_84229;
state_84229 = G__84267;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84229){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84237 = f__6203__auto__.call(null);(statearr_84237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84237;
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
return (function (state_84303){var state_val_84304 = (state_84303[(1)]);if((state_val_84304 === (3)))
{var inst_84301 = (state_84303[(2)]);var state_84303__$1 = state_84303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84303__$1,inst_84301);
} else
{if((state_val_84304 === (2)))
{var inst_84293 = (state_84303[(2)]);var inst_84294 = cljs.core.nth.call(null,inst_84293,(0),null);var inst_84295 = cljs.core.nth.call(null,inst_84293,(1),null);var inst_84296 = [inst_84294,inst_84295,request];var inst_84297 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84296,null));var inst_84298 = ["view",inst_84297];var inst_84299 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84298,null));var state_84303__$1 = state_84303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84303__$1,(3),ch,inst_84299);
} else
{if((state_val_84304 === (1)))
{var inst_84291 = app.dbfile.load.call(null,"stock",fbid);var state_84303__$1 = state_84303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84303__$1,(2),inst_84291);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84308 = [null,null,null,null,null,null,null];(statearr_84308[(0)] = state_machine__6188__auto__);
(statearr_84308[(1)] = (1));
return statearr_84308;
});
var state_machine__6188__auto____1 = (function (state_84303){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84303);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84309){if((e84309 instanceof Object))
{var ex__6191__auto__ = e84309;var statearr_84310_84312 = state_84303;(statearr_84310_84312[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84313 = state_84303;
state_84303 = G__84313;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84303){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84311 = f__6203__auto__.call(null);(statearr_84311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84351){var state_val_84352 = (state_84351[(1)]);if((state_val_84352 === (3)))
{var inst_84349 = (state_84351[(2)]);var state_84351__$1 = state_84351;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84351__$1,inst_84349);
} else
{if((state_val_84352 === (2)))
{var inst_84341 = (state_84351[(2)]);var inst_84342 = cljs.core.nth.call(null,inst_84341,(0),null);var inst_84343 = cljs.core.nth.call(null,inst_84341,(1),null);var inst_84344 = [inst_84342,inst_84343,request];var inst_84345 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84344,null));var inst_84346 = ["view",inst_84345];var inst_84347 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84346,null));var state_84351__$1 = state_84351;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84351__$1,(3),ch,inst_84347);
} else
{if((state_val_84352 === (1)))
{var inst_84338 = JSON.stringify(data);var inst_84339 = app.dbfile.save.call(null,"stock",fbid,inst_84338);var state_84351__$1 = state_84351;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84351__$1,(2),inst_84339);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84356 = [null,null,null,null,null,null,null];(statearr_84356[(0)] = state_machine__6188__auto__);
(statearr_84356[(1)] = (1));
return statearr_84356;
});
var state_machine__6188__auto____1 = (function (state_84351){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84351);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84357){if((e84357 instanceof Object))
{var ex__6191__auto__ = e84357;var statearr_84358_84360 = state_84351;(statearr_84358_84360[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84351);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84361 = state_84351;
state_84351 = G__84361;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84351){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84359 = f__6203__auto__.call(null);(statearr_84359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
