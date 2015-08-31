// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile._STAR_domain_STAR_ = cljs.core.atom.call(null,"../");
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj25409 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_25416){var state_val_25417 = (state_25416[(1)]);if((state_val_25417 === (2)))
{var inst_25413 = (state_25416[(2)]);var inst_25414 = cljs.core.async.close_BANG_.call(null,ret);var state_25416__$1 = (function (){var statearr_25418 = state_25416;(statearr_25418[(7)] = inst_25413);
return statearr_25418;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25416__$1,inst_25414);
} else
{if((state_val_25417 === (1)))
{var inst_25410 = [null,data__$1];var inst_25411 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25410,null));var state_25416__$1 = state_25416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25416__$1,(2),ret,inst_25411);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25422 = [null,null,null,null,null,null,null,null];(statearr_25422[(0)] = state_machine__6188__auto__);
(statearr_25422[(1)] = (1));
return statearr_25422;
});
var state_machine__6188__auto____1 = (function (state_25416){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25416);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25423){if((e25423 instanceof Object))
{var ex__6191__auto__ = e25423;var statearr_25424_25442 = state_25416;(statearr_25424_25442[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25443 = state_25416;
state_25416 = G__25443;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25416){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_25425 = f__6203__auto__.call(null);(statearr_25425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_25432){var state_val_25433 = (state_25432[(1)]);if((state_val_25433 === (2)))
{var inst_25429 = (state_25432[(2)]);var inst_25430 = cljs.core.async.close_BANG_.call(null,ret);var state_25432__$1 = (function (){var statearr_25434 = state_25432;(statearr_25434[(7)] = inst_25429);
return statearr_25434;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25432__$1,inst_25430);
} else
{if((state_val_25433 === (1)))
{var inst_25426 = [err];var inst_25427 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25426,null));var state_25432__$1 = state_25432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25432__$1,(2),ret,inst_25427);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_25438 = [null,null,null,null,null,null,null,null];(statearr_25438[(0)] = state_machine__6188__auto__);
(statearr_25438[(1)] = (1));
return statearr_25438;
});
var state_machine__6188__auto____1 = (function (state_25432){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25432);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25439){if((e25439 instanceof Object))
{var ex__6191__auto__ = e25439;var statearr_25440_25444 = state_25432;(statearr_25440_25444[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25445 = state_25432;
state_25432 = G__25445;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25432){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_25441 = f__6203__auto__.call(null);(statearr_25441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj25409;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj25449 = {"Parent":parent,"Name":dirname};return obj25449;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj25453 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj25453;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj25457 = {"Key":id,"Delete":true};return obj25457;
})());
});
app.dbfile.save = (function save(target,fbid,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/save"),"POST",null,(function (){var obj25461 = {"Target":target,"FBID":fbid,"Data":data};return obj25461;
})());
});
app.dbfile.load = (function load(target,fbid){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/load"),"POST","json",(function (){var obj25465 = {"Target":target,"FBID":fbid};return obj25465;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_25539){var state_val_25540 = (state_25539[(1)]);if((state_val_25540 === (8)))
{var inst_25535 = (state_25539[(2)]);var state_25539__$1 = state_25539;var statearr_25541_25558 = state_25539__$1;(statearr_25541_25558[(2)] = inst_25535);
(statearr_25541_25558[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25540 === (7)))
{var inst_25532 = [null,null];var inst_25533 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25532,null));var state_25539__$1 = state_25539;var statearr_25542_25559 = state_25539__$1;(statearr_25542_25559[(2)] = inst_25533);
(statearr_25542_25559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25540 === (6)))
{var inst_25523 = (state_25539[(7)]);var inst_25527 = cljs.core.first.call(null,inst_25523);var inst_25528 = inst_25527.Key;var inst_25529 = [null,inst_25528];var inst_25530 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25529,null));var state_25539__$1 = state_25539;var statearr_25543_25560 = state_25539__$1;(statearr_25543_25560[(2)] = inst_25530);
(statearr_25543_25560[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25540 === (5)))
{var inst_25537 = (state_25539[(2)]);var state_25539__$1 = state_25539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25539__$1,inst_25537);
} else
{if((state_val_25540 === (4)))
{var inst_25516 = (state_25539[(8)]);var inst_25523 = (state_25539[(7)]);var inst_25515 = (state_25539[(9)]);var inst_25517 = (state_25539[(10)]);var inst_25522 = (function (){var content = inst_25517;var err = inst_25516;var vec__25512 = inst_25515;return ((function (content,err,vec__25512,inst_25516,inst_25523,inst_25515,inst_25517,state_val_25540,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__25512,inst_25516,inst_25523,inst_25515,inst_25517,state_val_25540,c__6202__auto__))
})();var inst_25523__$1 = cljs.core.filter.call(null,inst_25522,inst_25517);var inst_25524 = cljs.core.empty_QMARK_.call(null,inst_25523__$1);var inst_25525 = !(inst_25524);var state_25539__$1 = (function (){var statearr_25544 = state_25539;(statearr_25544[(7)] = inst_25523__$1);
return statearr_25544;
})();if(inst_25525)
{var statearr_25545_25561 = state_25539__$1;(statearr_25545_25561[(1)] = (6));
} else
{var statearr_25546_25562 = state_25539__$1;(statearr_25546_25562[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25540 === (3)))
{var inst_25516 = (state_25539[(8)]);var inst_25519 = [inst_25516];var inst_25520 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25519,null));var state_25539__$1 = state_25539;var statearr_25547_25563 = state_25539__$1;(statearr_25547_25563[(2)] = inst_25520);
(statearr_25547_25563[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25540 === (2)))
{var inst_25516 = (state_25539[(8)]);var inst_25515 = (state_25539[(9)]);var inst_25515__$1 = (state_25539[(2)]);var inst_25516__$1 = cljs.core.nth.call(null,inst_25515__$1,(0),null);var inst_25517 = cljs.core.nth.call(null,inst_25515__$1,(1),null);var state_25539__$1 = (function (){var statearr_25548 = state_25539;(statearr_25548[(8)] = inst_25516__$1);
(statearr_25548[(9)] = inst_25515__$1);
(statearr_25548[(10)] = inst_25517);
return statearr_25548;
})();if(cljs.core.truth_(inst_25516__$1))
{var statearr_25549_25564 = state_25539__$1;(statearr_25549_25564[(1)] = (3));
} else
{var statearr_25550_25565 = state_25539__$1;(statearr_25550_25565[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25540 === (1)))
{var inst_25513 = app.dbfile.fileList.call(null,dir);var state_25539__$1 = state_25539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25539__$1,(2),inst_25513);
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
var state_machine__6188__auto____0 = (function (){var statearr_25554 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25554[(0)] = state_machine__6188__auto__);
(statearr_25554[(1)] = (1));
return statearr_25554;
});
var state_machine__6188__auto____1 = (function (state_25539){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25539);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object))
{var ex__6191__auto__ = e25555;var statearr_25556_25566 = state_25539;(statearr_25556_25566[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25567 = state_25539;
state_25539 = G__25567;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25539){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_25557 = f__6203__auto__.call(null);(statearr_25557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
