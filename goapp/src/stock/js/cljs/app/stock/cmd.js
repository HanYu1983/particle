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
return (function (state_82103){var state_val_82104 = (state_82103[(1)]);if((state_val_82104 === (3)))
{var inst_82101 = (state_82103[(2)]);var state_82103__$1 = state_82103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82103__$1,inst_82101);
} else
{if((state_val_82104 === (2)))
{var inst_82090 = (state_82103[(2)]);var inst_82091 = cljs.core.nth.call(null,inst_82090,(0),null);var inst_82092 = cljs.core.nth.call(null,inst_82090,(1),null);var inst_82093 = stock.tool.parse_getprices.call(null,inst_82092);var inst_82094 = stock.tool.format_getprices.call(null,(86400),inst_82093);var inst_82095 = cljs.core.reverse.call(null,inst_82094);var inst_82096 = [inst_82091,inst_82095,id,date,request];var inst_82097 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82096,null));var inst_82098 = ["loadStock",inst_82097];var inst_82099 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82098,null));var state_82103__$1 = state_82103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82103__$1,(3),ch,inst_82099);
} else
{if((state_val_82104 === (1)))
{var inst_82087 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_82088 = stock.tool.content.call(null,inst_82087);var state_82103__$1 = state_82103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82103__$1,(2),inst_82088);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_82108 = [null,null,null,null,null,null,null];(statearr_82108[(0)] = state_machine__6188__auto__);
(statearr_82108[(1)] = (1));
return statearr_82108;
});
var state_machine__6188__auto____1 = (function (state_82103){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82103);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82109){if((e82109 instanceof Object))
{var ex__6191__auto__ = e82109;var statearr_82110_82112 = state_82103;(statearr_82110_82112[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82113 = state_82103;
state_82103 = G__82113;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82103){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82111 = f__6203__auto__.call(null);(statearr_82111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_82077){var state_val_82078 = (state_82077[(1)]);if((state_val_82078 === (2)))
{var inst_82075 = (state_82077[(2)]);var state_82077__$1 = state_82077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82077__$1,inst_82075);
} else
{if((state_val_82078 === (1)))
{var inst_82066 = cljs.core.first.call(null,result);var inst_82067 = cljs.core.second.call(null,result);var inst_82068 = cljs.core.nth.call(null,result,(2));var inst_82069 = cljs.core.nth.call(null,result,(3));var inst_82070 = [inst_82066,inst_82067,inst_82068,inst_82069,request];var inst_82071 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82070,null));var inst_82072 = ["loadStock",inst_82071];var inst_82073 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82072,null));var state_82077__$1 = state_82077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82077__$1,(2),ch,inst_82073);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_82082 = [null,null,null,null,null,null,null];(statearr_82082[(0)] = state_machine__6188__auto__);
(statearr_82082[(1)] = (1));
return statearr_82082;
});
var state_machine__6188__auto____1 = (function (state_82077){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82077);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82083){if((e82083 instanceof Object))
{var ex__6191__auto__ = e82083;var statearr_82084_82114 = state_82077;(statearr_82084_82114[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82077);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82115 = state_82077;
state_82077 = G__82115;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82077){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82085 = f__6203__auto__.call(null);(statearr_82085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82085;
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
return (function (state_82203){var state_val_82204 = (state_82203[(1)]);if((state_val_82204 === (7)))
{var inst_82201 = (state_82203[(2)]);var state_82203__$1 = state_82203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82203__$1,inst_82201);
} else
{if((state_val_82204 === (6)))
{var inst_82193 = (state_82203[(2)]);var inst_82194 = cljs.core.nth.call(null,inst_82193,(0),null);var inst_82195 = cljs.core.nth.call(null,inst_82193,(1),null);var inst_82196 = [inst_82194,inst_82195,request];var inst_82197 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82196,null));var inst_82198 = ["view",inst_82197];var inst_82199 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82198,null));var state_82203__$1 = state_82203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82203__$1,(7),ch,inst_82199);
} else
{if((state_val_82204 === (5)))
{var inst_82188 = (state_82203[(2)]);var inst_82189 = cljs.core.nth.call(null,inst_82188,(0),null);var inst_82190 = cljs.core.nth.call(null,inst_82188,(1),null);var inst_82191 = app.dbfile.file.call(null,inst_82190,"json");var state_82203__$1 = (function (){var statearr_82205 = state_82203;(statearr_82205[(7)] = inst_82189);
return statearr_82205;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82203__$1,(6),inst_82191);
} else
{if((state_val_82204 === (4)))
{var inst_82183 = (state_82203[(2)]);var inst_82184 = cljs.core.nth.call(null,inst_82183,(0),null);var inst_82185 = cljs.core.nth.call(null,inst_82183,(1),null);var inst_82186 = app.dbfile.name__GT_id.call(null,inst_82185,"userinfo.json");var state_82203__$1 = (function (){var statearr_82206 = state_82203;(statearr_82206[(8)] = inst_82184);
return statearr_82206;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82203__$1,(5),inst_82186);
} else
{if((state_val_82204 === (3)))
{var inst_82178 = (state_82203[(2)]);var inst_82179 = cljs.core.nth.call(null,inst_82178,(0),null);var inst_82180 = cljs.core.nth.call(null,inst_82178,(1),null);var inst_82181 = app.dbfile.name__GT_id.call(null,inst_82180,fbid);var state_82203__$1 = (function (){var statearr_82207 = state_82203;(statearr_82207[(9)] = inst_82179);
return statearr_82207;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82203__$1,(4),inst_82181);
} else
{if((state_val_82204 === (2)))
{var inst_82173 = (state_82203[(2)]);var inst_82174 = cljs.core.nth.call(null,inst_82173,(0),null);var inst_82175 = cljs.core.nth.call(null,inst_82173,(1),null);var inst_82176 = app.dbfile.name__GT_id.call(null,inst_82175,"stock");var state_82203__$1 = (function (){var statearr_82208 = state_82203;(statearr_82208[(10)] = inst_82174);
return statearr_82208;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82203__$1,(3),inst_82176);
} else
{if((state_val_82204 === (1)))
{var inst_82171 = app.dbfile.name__GT_id.call(null,(0),"root");var state_82203__$1 = state_82203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82203__$1,(2),inst_82171);
} else
{return null;
}
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
var state_machine__6188__auto____0 = (function (){var statearr_82212 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_82212[(0)] = state_machine__6188__auto__);
(statearr_82212[(1)] = (1));
return statearr_82212;
});
var state_machine__6188__auto____1 = (function (state_82203){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82203);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82213){if((e82213 instanceof Object))
{var ex__6191__auto__ = e82213;var statearr_82214_82216 = state_82203;(statearr_82214_82216[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82217 = state_82203;
state_82203 = G__82217;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82203){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82215 = f__6203__auto__.call(null);(statearr_82215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_82314){var state_val_82315 = (state_82314[(1)]);if((state_val_82315 === (8)))
{var inst_82312 = (state_82314[(2)]);var state_82314__$1 = state_82314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82314__$1,inst_82312);
} else
{if((state_val_82315 === (7)))
{var inst_82304 = (state_82314[(2)]);var inst_82305 = cljs.core.nth.call(null,inst_82304,(0),null);var inst_82306 = cljs.core.nth.call(null,inst_82304,(1),null);var inst_82307 = [inst_82305,inst_82306,request];var inst_82308 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82307,null));var inst_82309 = ["view",inst_82308];var inst_82310 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_82309,null));var state_82314__$1 = state_82314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_82314__$1,(8),ch,inst_82310);
} else
{if((state_val_82315 === (6)))
{var inst_82298 = (state_82314[(2)]);var inst_82299 = cljs.core.nth.call(null,inst_82298,(0),null);var inst_82300 = cljs.core.nth.call(null,inst_82298,(1),null);var inst_82301 = JSON.stringify(data);var inst_82302 = app.dbfile.makeFile.call(null,inst_82300,"userinfo.json",inst_82301,true);var state_82314__$1 = (function (){var statearr_82316 = state_82314;(statearr_82316[(7)] = inst_82299);
return statearr_82316;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82314__$1,(7),inst_82302);
} else
{if((state_val_82315 === (5)))
{var inst_82287 = (state_82314[(8)]);var inst_82295 = (state_82314[(2)]);var inst_82296 = app.dbfile.name__GT_id.call(null,inst_82287,fbid);var state_82314__$1 = (function (){var statearr_82317 = state_82314;(statearr_82317[(9)] = inst_82295);
return statearr_82317;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82314__$1,(6),inst_82296);
} else
{if((state_val_82315 === (4)))
{var inst_82290 = (state_82314[(2)]);var inst_82291 = cljs.core.nth.call(null,inst_82290,(0),null);var inst_82292 = cljs.core.nth.call(null,inst_82290,(1),null);var inst_82293 = cljs.core.async.timeout.call(null,(1000));var state_82314__$1 = (function (){var statearr_82318 = state_82314;(statearr_82318[(10)] = inst_82291);
(statearr_82318[(11)] = inst_82292);
return statearr_82318;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82314__$1,(5),inst_82293);
} else
{if((state_val_82315 === (3)))
{var inst_82287 = (state_82314[(8)]);var inst_82285 = (state_82314[(2)]);var inst_82286 = cljs.core.nth.call(null,inst_82285,(0),null);var inst_82287__$1 = cljs.core.nth.call(null,inst_82285,(1),null);var inst_82288 = app.dbfile.makeDir.call(null,inst_82287__$1,fbid);var state_82314__$1 = (function (){var statearr_82319 = state_82314;(statearr_82319[(12)] = inst_82286);
(statearr_82319[(8)] = inst_82287__$1);
return statearr_82319;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82314__$1,(4),inst_82288);
} else
{if((state_val_82315 === (2)))
{var inst_82280 = (state_82314[(2)]);var inst_82281 = cljs.core.nth.call(null,inst_82280,(0),null);var inst_82282 = cljs.core.nth.call(null,inst_82280,(1),null);var inst_82283 = app.dbfile.name__GT_id.call(null,inst_82282,"stock");var state_82314__$1 = (function (){var statearr_82320 = state_82314;(statearr_82320[(13)] = inst_82281);
return statearr_82320;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82314__$1,(3),inst_82283);
} else
{if((state_val_82315 === (1)))
{var inst_82278 = app.dbfile.name__GT_id.call(null,(0),"root");var state_82314__$1 = state_82314;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82314__$1,(2),inst_82278);
} else
{return null;
}
}
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
var state_machine__6188__auto____0 = (function (){var statearr_82324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_82324[(0)] = state_machine__6188__auto__);
(statearr_82324[(1)] = (1));
return statearr_82324;
});
var state_machine__6188__auto____1 = (function (state_82314){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_82314);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e82325){if((e82325 instanceof Object))
{var ex__6191__auto__ = e82325;var statearr_82326_82328 = state_82314;(statearr_82326_82328[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e82325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__82329 = state_82314;
state_82314 = G__82329;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_82314){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_82314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_82327 = f__6203__auto__.call(null);(statearr_82327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_82327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
