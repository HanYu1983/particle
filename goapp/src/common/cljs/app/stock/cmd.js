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
return (function (state_18195){var state_val_18196 = (state_18195[(1)]);if((state_val_18196 === (3)))
{var inst_18193 = (state_18195[(2)]);var state_18195__$1 = state_18195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18195__$1,inst_18193);
} else
{if((state_val_18196 === (2)))
{var inst_18185 = (state_18195[(2)]);var inst_18186 = cljs.core.nth.call(null,inst_18185,(0),null);var inst_18187 = cljs.core.nth.call(null,inst_18185,(1),null);var inst_18188 = [inst_18186,inst_18187,id,date,request];var inst_18189 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18188,null));var inst_18190 = ["loadStock",inst_18189];var inst_18191 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18190,null));var state_18195__$1 = state_18195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18195__$1,(3),ch,inst_18191);
} else
{if((state_val_18196 === (1)))
{var inst_18183 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_18195__$1 = state_18195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18195__$1,(2),inst_18183);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18200 = [null,null,null,null,null,null,null];(statearr_18200[(0)] = state_machine__6188__auto__);
(statearr_18200[(1)] = (1));
return statearr_18200;
});
var state_machine__6188__auto____1 = (function (state_18195){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18195);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18201){if((e18201 instanceof Object))
{var ex__6191__auto__ = e18201;var statearr_18202_18204 = state_18195;(statearr_18202_18204[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18205 = state_18195;
state_18195 = G__18205;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18195){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_18203 = f__6203__auto__.call(null);(statearr_18203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_18203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_18173){var state_val_18174 = (state_18173[(1)]);if((state_val_18174 === (2)))
{var inst_18171 = (state_18173[(2)]);var state_18173__$1 = state_18173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18173__$1,inst_18171);
} else
{if((state_val_18174 === (1)))
{var inst_18162 = cljs.core.first.call(null,result);var inst_18163 = cljs.core.second.call(null,result);var inst_18164 = cljs.core.nth.call(null,result,(2));var inst_18165 = cljs.core.nth.call(null,result,(3));var inst_18166 = [inst_18162,inst_18163,inst_18164,inst_18165,request];var inst_18167 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18166,null));var inst_18168 = ["loadStock",inst_18167];var inst_18169 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18168,null));var state_18173__$1 = state_18173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18173__$1,(2),ch,inst_18169);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18178 = [null,null,null,null,null,null,null];(statearr_18178[(0)] = state_machine__6188__auto__);
(statearr_18178[(1)] = (1));
return statearr_18178;
});
var state_machine__6188__auto____1 = (function (state_18173){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18179){if((e18179 instanceof Object))
{var ex__6191__auto__ = e18179;var statearr_18180_18206 = state_18173;(statearr_18180_18206[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18207 = state_18173;
state_18173 = G__18207;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18173){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_18181 = f__6203__auto__.call(null);(statearr_18181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_18181;
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
app.stock.cmd.loadUser = (function loadUser(ch,fbid,accessToken,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_18268){var state_val_18269 = (state_18268[(1)]);if((state_val_18269 === (6)))
{var inst_18266 = (state_18268[(2)]);var state_18268__$1 = state_18268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18268__$1,inst_18266);
} else
{if((state_val_18269 === (5)))
{var inst_18249 = (state_18268[(7)]);var inst_18260 = (state_18268[(2)]);var inst_18261 = [inst_18249,inst_18260,request];var inst_18262 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18261,null));var inst_18263 = ["view",inst_18262];var inst_18264 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18263,null));var state_18268__$1 = state_18268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18268__$1,(6),ch,inst_18264);
} else
{if((state_val_18269 === (4)))
{var inst_18250 = (state_18268[(8)]);var inst_18258 = JSON.parse(inst_18250);var state_18268__$1 = state_18268;var statearr_18270_18282 = state_18268__$1;(statearr_18270_18282[(2)] = inst_18258);
(statearr_18270_18282[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18269 === (3)))
{var inst_18255 = [];var inst_18256 = {"stocks":inst_18255};var state_18268__$1 = state_18268;var statearr_18271_18283 = state_18268__$1;(statearr_18271_18283[(2)] = inst_18256);
(statearr_18271_18283[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18269 === (2)))
{var inst_18250 = (state_18268[(8)]);var inst_18248 = (state_18268[(2)]);var inst_18249 = cljs.core.nth.call(null,inst_18248,(0),null);var inst_18250__$1 = cljs.core.nth.call(null,inst_18248,(1),null);var inst_18251 = cljs.core._EQ_.call(null,inst_18250__$1,"");var state_18268__$1 = (function (){var statearr_18272 = state_18268;(statearr_18272[(8)] = inst_18250__$1);
(statearr_18272[(7)] = inst_18249);
return statearr_18272;
})();if(inst_18251)
{var statearr_18273_18284 = state_18268__$1;(statearr_18273_18284[(1)] = (3));
} else
{var statearr_18274_18285 = state_18268__$1;(statearr_18274_18285[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18269 === (1)))
{var inst_18246 = app.dbfile.loadFromUser.call(null,fbid,accessToken,"stock.json");var state_18268__$1 = state_18268;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18268__$1,(2),inst_18246);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18278 = [null,null,null,null,null,null,null,null,null];(statearr_18278[(0)] = state_machine__6188__auto__);
(statearr_18278[(1)] = (1));
return statearr_18278;
});
var state_machine__6188__auto____1 = (function (state_18268){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18268);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18279){if((e18279 instanceof Object))
{var ex__6191__auto__ = e18279;var statearr_18280_18286 = state_18268;(statearr_18280_18286[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18268);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18287 = state_18268;
state_18268 = G__18287;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18268){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_18281 = f__6203__auto__.call(null);(statearr_18281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_18281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_18325){var state_val_18326 = (state_18325[(1)]);if((state_val_18326 === (3)))
{var inst_18323 = (state_18325[(2)]);var state_18325__$1 = state_18325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18325__$1,inst_18323);
} else
{if((state_val_18326 === (2)))
{var inst_18315 = (state_18325[(2)]);var inst_18316 = cljs.core.nth.call(null,inst_18315,(0),null);var inst_18317 = cljs.core.nth.call(null,inst_18315,(1),null);var inst_18318 = [inst_18316,inst_18317,request];var inst_18319 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18318,null));var inst_18320 = ["view",inst_18319];var inst_18321 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_18320,null));var state_18325__$1 = state_18325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18325__$1,(3),ch,inst_18321);
} else
{if((state_val_18326 === (1)))
{var inst_18312 = JSON.stringify(data);var inst_18313 = app.dbfile.saveToUser.call(null,fbid,accessToken,"stock.json",inst_18312);var state_18325__$1 = state_18325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18325__$1,(2),inst_18313);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_18330 = [null,null,null,null,null,null,null];(statearr_18330[(0)] = state_machine__6188__auto__);
(statearr_18330[(1)] = (1));
return statearr_18330;
});
var state_machine__6188__auto____1 = (function (state_18325){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_18325);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e18331){if((e18331 instanceof Object))
{var ex__6191__auto__ = e18331;var statearr_18332_18334 = state_18325;(statearr_18332_18334[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18325);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18335 = state_18325;
state_18325 = G__18335;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_18325){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_18325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_18333 = f__6203__auto__.call(null);(statearr_18333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_18333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
