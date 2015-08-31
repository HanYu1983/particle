// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile._STAR_domain_STAR_ = cljs.core.atom.call(null,"../");
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj25215 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_25222){var state_val_25223 = (state_25222[(1)]);if((state_val_25223 === (2)))
{var inst_25219 = (state_25222[(2)]);var inst_25220 = cljs.core.async.close_BANG_.call(null,ret);var state_25222__$1 = (function (){var statearr_25224 = state_25222;(statearr_25224[(7)] = inst_25219);
return statearr_25224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25222__$1,inst_25220);
} else
{if((state_val_25223 === (1)))
{var inst_25216 = [null,data__$1];var inst_25217 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25216,null));var state_25222__$1 = state_25222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25222__$1,(2),ret,inst_25217);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25228 = [null,null,null,null,null,null,null,null];(statearr_25228[(0)] = state_machine__6188__auto__);
(statearr_25228[(1)] = (1));
return statearr_25228;
});
var state_machine__6188__auto____1 = (function (state_25222){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25222);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25229){if((e25229 instanceof Object))
{var ex__6191__auto__ = e25229;var statearr_25230_25248 = state_25222;(statearr_25230_25248[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25249 = state_25222;
state_25222 = G__25249;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25222){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_25231 = f__6203__auto__.call(null);(statearr_25231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_25238){var state_val_25239 = (state_25238[(1)]);if((state_val_25239 === (2)))
{var inst_25235 = (state_25238[(2)]);var inst_25236 = cljs.core.async.close_BANG_.call(null,ret);var state_25238__$1 = (function (){var statearr_25240 = state_25238;(statearr_25240[(7)] = inst_25235);
return statearr_25240;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25238__$1,inst_25236);
} else
{if((state_val_25239 === (1)))
{var inst_25232 = [err];var inst_25233 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25232,null));var state_25238__$1 = state_25238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25238__$1,(2),ret,inst_25233);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25244 = [null,null,null,null,null,null,null,null];(statearr_25244[(0)] = state_machine__6188__auto__);
(statearr_25244[(1)] = (1));
return statearr_25244;
});
var state_machine__6188__auto____1 = (function (state_25238){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25245){if((e25245 instanceof Object))
{var ex__6191__auto__ = e25245;var statearr_25246_25250 = state_25238;(statearr_25246_25250[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25245;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25251 = state_25238;
state_25238 = G__25251;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25238){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_25247 = f__6203__auto__.call(null);(statearr_25247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25247;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj25215;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj25255 = {"Parent":parent,"Name":dirname};return obj25255;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj25259 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj25259;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj25263 = {"Key":id,"Delete":true};return obj25263;
})());
});
app.dbfile.save = (function save(target,fbid,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/save"),"POST",null,(function (){var obj25267 = {"Target":target,"FBID":fbid,"Data":data};return obj25267;
})());
});
app.dbfile.load = (function load(target,fbid){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/load"),"POST","json",(function (){var obj25271 = {"Target":target,"FBID":fbid};return obj25271;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_25345){var state_val_25346 = (state_25345[(1)]);if((state_val_25346 === (8)))
{var inst_25341 = (state_25345[(2)]);var state_25345__$1 = state_25345;var statearr_25347_25364 = state_25345__$1;(statearr_25347_25364[(2)] = inst_25341);
(statearr_25347_25364[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25346 === (7)))
{var inst_25338 = [null,null];var inst_25339 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25338,null));var state_25345__$1 = state_25345;var statearr_25348_25365 = state_25345__$1;(statearr_25348_25365[(2)] = inst_25339);
(statearr_25348_25365[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25346 === (6)))
{var inst_25329 = (state_25345[(7)]);var inst_25333 = cljs.core.first.call(null,inst_25329);var inst_25334 = inst_25333.Key;var inst_25335 = [null,inst_25334];var inst_25336 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25335,null));var state_25345__$1 = state_25345;var statearr_25349_25366 = state_25345__$1;(statearr_25349_25366[(2)] = inst_25336);
(statearr_25349_25366[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25346 === (5)))
{var inst_25343 = (state_25345[(2)]);var state_25345__$1 = state_25345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25345__$1,inst_25343);
} else
{if((state_val_25346 === (4)))
{var inst_25322 = (state_25345[(8)]);var inst_25329 = (state_25345[(7)]);var inst_25321 = (state_25345[(9)]);var inst_25323 = (state_25345[(10)]);var inst_25328 = (function (){var content = inst_25323;var err = inst_25322;var vec__25318 = inst_25321;return ((function (content,err,vec__25318,inst_25322,inst_25329,inst_25321,inst_25323,state_val_25346,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__25318,inst_25322,inst_25329,inst_25321,inst_25323,state_val_25346,c__6202__auto__))
})();var inst_25329__$1 = cljs.core.filter.call(null,inst_25328,inst_25323);var inst_25330 = cljs.core.empty_QMARK_.call(null,inst_25329__$1);var inst_25331 = !(inst_25330);var state_25345__$1 = (function (){var statearr_25350 = state_25345;(statearr_25350[(7)] = inst_25329__$1);
return statearr_25350;
})();if(inst_25331)
{var statearr_25351_25367 = state_25345__$1;(statearr_25351_25367[(1)] = (6));
} else
{var statearr_25352_25368 = state_25345__$1;(statearr_25352_25368[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25346 === (3)))
{var inst_25322 = (state_25345[(8)]);var inst_25325 = [inst_25322];var inst_25326 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25325,null));var state_25345__$1 = state_25345;var statearr_25353_25369 = state_25345__$1;(statearr_25353_25369[(2)] = inst_25326);
(statearr_25353_25369[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25346 === (2)))
{var inst_25322 = (state_25345[(8)]);var inst_25321 = (state_25345[(9)]);var inst_25321__$1 = (state_25345[(2)]);var inst_25322__$1 = cljs.core.nth.call(null,inst_25321__$1,(0),null);var inst_25323 = cljs.core.nth.call(null,inst_25321__$1,(1),null);var state_25345__$1 = (function (){var statearr_25354 = state_25345;(statearr_25354[(8)] = inst_25322__$1);
(statearr_25354[(9)] = inst_25321__$1);
(statearr_25354[(10)] = inst_25323);
return statearr_25354;
})();if(cljs.core.truth_(inst_25322__$1))
{var statearr_25355_25370 = state_25345__$1;(statearr_25355_25370[(1)] = (3));
} else
{var statearr_25356_25371 = state_25345__$1;(statearr_25356_25371[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25346 === (1)))
{var inst_25319 = app.dbfile.fileList.call(null,dir);var state_25345__$1 = state_25345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25345__$1,(2),inst_25319);
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
var state_machine__6188__auto____0 = (function (){var statearr_25360 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25360[(0)] = state_machine__6188__auto__);
(statearr_25360[(1)] = (1));
return statearr_25360;
});
var state_machine__6188__auto____1 = (function (state_25345){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25345);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25361){if((e25361 instanceof Object))
{var ex__6191__auto__ = e25361;var statearr_25362_25372 = state_25345;(statearr_25362_25372[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25345);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25373 = state_25345;
state_25345 = G__25373;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25345){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_25363 = f__6203__auto__.call(null);(statearr_25363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
