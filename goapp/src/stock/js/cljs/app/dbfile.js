// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj63275 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_63282){var state_val_63283 = (state_63282[(1)]);if((state_val_63283 === (2)))
{var inst_63279 = (state_63282[(2)]);var inst_63280 = cljs.core.async.close_BANG_.call(null,ret);var state_63282__$1 = (function (){var statearr_63284 = state_63282;(statearr_63284[(7)] = inst_63279);
return statearr_63284;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63282__$1,inst_63280);
} else
{if((state_val_63283 === (1)))
{var inst_63276 = [null,data__$1];var inst_63277 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63276,null));var state_63282__$1 = state_63282;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63282__$1,(2),ret,inst_63277);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_63288 = [null,null,null,null,null,null,null,null];(statearr_63288[(0)] = state_machine__6188__auto__);
(statearr_63288[(1)] = (1));
return statearr_63288;
});
var state_machine__6188__auto____1 = (function (state_63282){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_63282);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e63289){if((e63289 instanceof Object))
{var ex__6191__auto__ = e63289;var statearr_63290_63308 = state_63282;(statearr_63290_63308[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63282);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e63289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63309 = state_63282;
state_63282 = G__63309;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_63282){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_63282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_63291 = f__6203__auto__.call(null);(statearr_63291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_63291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_63298){var state_val_63299 = (state_63298[(1)]);if((state_val_63299 === (2)))
{var inst_63295 = (state_63298[(2)]);var inst_63296 = cljs.core.async.close_BANG_.call(null,ret);var state_63298__$1 = (function (){var statearr_63300 = state_63298;(statearr_63300[(7)] = inst_63295);
return statearr_63300;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63298__$1,inst_63296);
} else
{if((state_val_63299 === (1)))
{var inst_63292 = [err];var inst_63293 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63292,null));var state_63298__$1 = state_63298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63298__$1,(2),ret,inst_63293);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_63304 = [null,null,null,null,null,null,null,null];(statearr_63304[(0)] = state_machine__6188__auto__);
(statearr_63304[(1)] = (1));
return statearr_63304;
});
var state_machine__6188__auto____1 = (function (state_63298){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_63298);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e63305){if((e63305 instanceof Object))
{var ex__6191__auto__ = e63305;var statearr_63306_63310 = state_63298;(statearr_63306_63310[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63298);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e63305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63311 = state_63298;
state_63298 = G__63311;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_63298){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_63298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_63307 = f__6203__auto__.call(null);(statearr_63307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_63307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj63275;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj63315 = {"Parent":parent,"Name":dirname};return obj63315;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj63319 = {"Parent":parent,"Name":filename,"Content":content};return obj63319;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj63323 = {"Key":id,"Delete":true};return obj63323;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_63409){var state_val_63410 = (state_63409[(1)]);if((state_val_63410 === (8)))
{var inst_63405 = (state_63409[(2)]);var state_63409__$1 = state_63409;var statearr_63411_63428 = state_63409__$1;(statearr_63411_63428[(2)] = inst_63405);
(statearr_63411_63428[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63410 === (7)))
{var inst_63402 = [null,null];var inst_63403 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63402,null));var state_63409__$1 = state_63409;var statearr_63412_63429 = state_63409__$1;(statearr_63412_63429[(2)] = inst_63403);
(statearr_63412_63429[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63410 === (6)))
{var inst_63387 = (state_63409[(7)]);var inst_63397 = cljs.core.first.call(null,inst_63387);var inst_63398 = inst_63397.Key;var inst_63399 = [null,inst_63398];var inst_63400 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63399,null));var state_63409__$1 = state_63409;var statearr_63413_63430 = state_63409__$1;(statearr_63413_63430[(2)] = inst_63400);
(statearr_63413_63430[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63410 === (5)))
{var inst_63407 = (state_63409[(2)]);var state_63409__$1 = state_63409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63409__$1,inst_63407);
} else
{if((state_val_63410 === (4)))
{var inst_63380 = (state_63409[(8)]);var inst_63381 = (state_63409[(9)]);var inst_63379 = (state_63409[(10)]);var inst_63387 = (state_63409[(7)]);var inst_63386 = (function (){var content = inst_63381;var err = inst_63380;var vec__63376 = inst_63379;return ((function (content,err,vec__63376,inst_63380,inst_63381,inst_63379,inst_63387,state_val_63410,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__63376,inst_63380,inst_63381,inst_63379,inst_63387,state_val_63410,c__6202__auto__))
})();var inst_63387__$1 = cljs.core.filter.call(null,inst_63386,inst_63381);var inst_63388 = cljs.core.empty_QMARK_.call(null,inst_63387__$1);var inst_63389 = !(inst_63388);var inst_63390 = cljs.core.pr_str.call(null,inst_63387__$1);var inst_63391 = console.log(inst_63390);var inst_63392 = console.log(inst_63389);var inst_63393 = cljs.core.first.call(null,inst_63387__$1);var inst_63394 = inst_63393.Key;var inst_63395 = console.log(inst_63394);var state_63409__$1 = (function (){var statearr_63414 = state_63409;(statearr_63414[(11)] = inst_63391);
(statearr_63414[(12)] = inst_63392);
(statearr_63414[(13)] = inst_63395);
(statearr_63414[(7)] = inst_63387__$1);
return statearr_63414;
})();if(inst_63389)
{var statearr_63415_63431 = state_63409__$1;(statearr_63415_63431[(1)] = (6));
} else
{var statearr_63416_63432 = state_63409__$1;(statearr_63416_63432[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63410 === (3)))
{var inst_63380 = (state_63409[(8)]);var inst_63383 = [inst_63380];var inst_63384 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63383,null));var state_63409__$1 = state_63409;var statearr_63417_63433 = state_63409__$1;(statearr_63417_63433[(2)] = inst_63384);
(statearr_63417_63433[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63410 === (2)))
{var inst_63380 = (state_63409[(8)]);var inst_63379 = (state_63409[(10)]);var inst_63379__$1 = (state_63409[(2)]);var inst_63380__$1 = cljs.core.nth.call(null,inst_63379__$1,(0),null);var inst_63381 = cljs.core.nth.call(null,inst_63379__$1,(1),null);var state_63409__$1 = (function (){var statearr_63418 = state_63409;(statearr_63418[(8)] = inst_63380__$1);
(statearr_63418[(9)] = inst_63381);
(statearr_63418[(10)] = inst_63379__$1);
return statearr_63418;
})();if(cljs.core.truth_(inst_63380__$1))
{var statearr_63419_63434 = state_63409__$1;(statearr_63419_63434[(1)] = (3));
} else
{var statearr_63420_63435 = state_63409__$1;(statearr_63420_63435[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63410 === (1)))
{var inst_63377 = app.dbfile.fileList.call(null,dir);var state_63409__$1 = state_63409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63409__$1,(2),inst_63377);
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
var state_machine__6188__auto____0 = (function (){var statearr_63424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63424[(0)] = state_machine__6188__auto__);
(statearr_63424[(1)] = (1));
return statearr_63424;
});
var state_machine__6188__auto____1 = (function (state_63409){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_63409);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e63425){if((e63425 instanceof Object))
{var ex__6191__auto__ = e63425;var statearr_63426_63436 = state_63409;(statearr_63426_63436[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63409);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e63425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63437 = state_63409;
state_63409 = G__63437;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_63409){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_63409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_63427 = f__6203__auto__.call(null);(statearr_63427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_63427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
