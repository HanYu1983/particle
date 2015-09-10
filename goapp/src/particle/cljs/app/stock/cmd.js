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
return (function (state_53132){var state_val_53133 = (state_53132[(1)]);if((state_val_53133 === (3)))
{var inst_53130 = (state_53132[(2)]);var state_53132__$1 = state_53132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53132__$1,inst_53130);
} else
{if((state_val_53133 === (2)))
{var inst_53122 = (state_53132[(2)]);var inst_53123 = cljs.core.nth.call(null,inst_53122,(0),null);var inst_53124 = cljs.core.nth.call(null,inst_53122,(1),null);var inst_53125 = [inst_53123,inst_53124,id,date,request];var inst_53126 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53125,null));var inst_53127 = ["loadStock",inst_53126];var inst_53128 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53127,null));var state_53132__$1 = state_53132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53132__$1,(3),ch,inst_53128);
} else
{if((state_val_53133 === (1)))
{var inst_53120 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_53132__$1 = state_53132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53132__$1,(2),inst_53120);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53137 = [null,null,null,null,null,null,null];(statearr_53137[(0)] = state_machine__6188__auto__);
(statearr_53137[(1)] = (1));
return statearr_53137;
});
var state_machine__6188__auto____1 = (function (state_53132){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53138){if((e53138 instanceof Object))
{var ex__6191__auto__ = e53138;var statearr_53139_53141 = state_53132;(statearr_53139_53141[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53142 = state_53132;
state_53132 = G__53142;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53132){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53140 = f__6203__auto__.call(null);(statearr_53140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_53110){var state_val_53111 = (state_53110[(1)]);if((state_val_53111 === (2)))
{var inst_53108 = (state_53110[(2)]);var state_53110__$1 = state_53110;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53110__$1,inst_53108);
} else
{if((state_val_53111 === (1)))
{var inst_53099 = cljs.core.first.call(null,result);var inst_53100 = cljs.core.second.call(null,result);var inst_53101 = cljs.core.nth.call(null,result,(2));var inst_53102 = cljs.core.nth.call(null,result,(3));var inst_53103 = [inst_53099,inst_53100,inst_53101,inst_53102,request];var inst_53104 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53103,null));var inst_53105 = ["loadStock",inst_53104];var inst_53106 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53105,null));var state_53110__$1 = state_53110;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53110__$1,(2),ch,inst_53106);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53115 = [null,null,null,null,null,null,null];(statearr_53115[(0)] = state_machine__6188__auto__);
(statearr_53115[(1)] = (1));
return statearr_53115;
});
var state_machine__6188__auto____1 = (function (state_53110){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53110);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53116){if((e53116 instanceof Object))
{var ex__6191__auto__ = e53116;var statearr_53117_53143 = state_53110;(statearr_53117_53143[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53110);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53144 = state_53110;
state_53110 = G__53144;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53110){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53118 = f__6203__auto__.call(null);(statearr_53118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53118;
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
return (function (state_53195){var state_val_53196 = (state_53195[(1)]);if((state_val_53196 === (6)))
{var inst_53182 = (state_53195[(7)]);var inst_53187 = (state_53195[(2)]);var inst_53188 = [inst_53187,inst_53182,request];var inst_53189 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53188,null));var inst_53190 = ["view",inst_53189];var inst_53191 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53190,null));var state_53195__$1 = state_53195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53195__$1,(3),ch,inst_53191);
} else
{if((state_val_53196 === (5)))
{var inst_53182 = (state_53195[(7)]);var inst_53185 = inst_53182.error;var state_53195__$1 = state_53195;var statearr_53197_53209 = state_53195__$1;(statearr_53197_53209[(2)] = inst_53185);
(statearr_53197_53209[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53196 === (4)))
{var inst_53181 = (state_53195[(8)]);var state_53195__$1 = state_53195;var statearr_53198_53210 = state_53195__$1;(statearr_53198_53210[(2)] = inst_53181);
(statearr_53198_53210[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53196 === (3)))
{var inst_53193 = (state_53195[(2)]);var state_53195__$1 = state_53195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53195__$1,inst_53193);
} else
{if((state_val_53196 === (2)))
{var inst_53181 = (state_53195[(8)]);var inst_53180 = (state_53195[(2)]);var inst_53181__$1 = cljs.core.nth.call(null,inst_53180,(0),null);var inst_53182 = cljs.core.nth.call(null,inst_53180,(1),null);var state_53195__$1 = (function (){var statearr_53199 = state_53195;(statearr_53199[(7)] = inst_53182);
(statearr_53199[(8)] = inst_53181__$1);
return statearr_53199;
})();if(cljs.core.truth_(inst_53181__$1))
{var statearr_53200_53211 = state_53195__$1;(statearr_53200_53211[(1)] = (4));
} else
{var statearr_53201_53212 = state_53195__$1;(statearr_53201_53212[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53196 === (1)))
{var inst_53178 = app.dbfile.load.call(null,"stock",fbid,accessToken);var state_53195__$1 = state_53195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53195__$1,(2),inst_53178);
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
var state_machine__6188__auto____0 = (function (){var statearr_53205 = [null,null,null,null,null,null,null,null,null];(statearr_53205[(0)] = state_machine__6188__auto__);
(statearr_53205[(1)] = (1));
return statearr_53205;
});
var state_machine__6188__auto____1 = (function (state_53195){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53195);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53206){if((e53206 instanceof Object))
{var ex__6191__auto__ = e53206;var statearr_53207_53213 = state_53195;(statearr_53207_53213[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53214 = state_53195;
state_53195 = G__53214;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53195){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53208 = f__6203__auto__.call(null);(statearr_53208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_53267){var state_val_53268 = (state_53267[(1)]);if((state_val_53268 === (6)))
{var inst_53254 = (state_53267[(7)]);var inst_53259 = (state_53267[(2)]);var inst_53260 = [inst_53259,inst_53254,request];var inst_53261 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53260,null));var inst_53262 = ["view",inst_53261];var inst_53263 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53262,null));var state_53267__$1 = state_53267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53267__$1,(3),ch,inst_53263);
} else
{if((state_val_53268 === (5)))
{var inst_53254 = (state_53267[(7)]);var inst_53257 = inst_53254.error;var state_53267__$1 = state_53267;var statearr_53269_53281 = state_53267__$1;(statearr_53269_53281[(2)] = inst_53257);
(statearr_53269_53281[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53268 === (4)))
{var inst_53253 = (state_53267[(8)]);var state_53267__$1 = state_53267;var statearr_53270_53282 = state_53267__$1;(statearr_53270_53282[(2)] = inst_53253);
(statearr_53270_53282[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53268 === (3)))
{var inst_53265 = (state_53267[(2)]);var state_53267__$1 = state_53267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53267__$1,inst_53265);
} else
{if((state_val_53268 === (2)))
{var inst_53253 = (state_53267[(8)]);var inst_53252 = (state_53267[(2)]);var inst_53253__$1 = cljs.core.nth.call(null,inst_53252,(0),null);var inst_53254 = cljs.core.nth.call(null,inst_53252,(1),null);var state_53267__$1 = (function (){var statearr_53271 = state_53267;(statearr_53271[(7)] = inst_53254);
(statearr_53271[(8)] = inst_53253__$1);
return statearr_53271;
})();if(cljs.core.truth_(inst_53253__$1))
{var statearr_53272_53283 = state_53267__$1;(statearr_53272_53283[(1)] = (4));
} else
{var statearr_53273_53284 = state_53267__$1;(statearr_53273_53284[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53268 === (1)))
{var inst_53249 = JSON.stringify(data);var inst_53250 = app.dbfile.save.call(null,"stock",fbid,accessToken,inst_53249);var state_53267__$1 = state_53267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53267__$1,(2),inst_53250);
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
var state_machine__6188__auto____0 = (function (){var statearr_53277 = [null,null,null,null,null,null,null,null,null];(statearr_53277[(0)] = state_machine__6188__auto__);
(statearr_53277[(1)] = (1));
return statearr_53277;
});
var state_machine__6188__auto____1 = (function (state_53267){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53267);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53278){if((e53278 instanceof Object))
{var ex__6191__auto__ = e53278;var statearr_53279_53285 = state_53267;(statearr_53279_53285[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53286 = state_53267;
state_53267 = G__53286;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53267){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53280 = f__6203__auto__.call(null);(statearr_53280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
