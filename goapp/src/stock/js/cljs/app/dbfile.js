// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile._STAR_domain_STAR_ = cljs.core.atom.call(null,"../");
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj24443 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_24450){var state_val_24451 = (state_24450[(1)]);if((state_val_24451 === (2)))
{var inst_24447 = (state_24450[(2)]);var inst_24448 = cljs.core.async.close_BANG_.call(null,ret);var state_24450__$1 = (function (){var statearr_24452 = state_24450;(statearr_24452[(7)] = inst_24447);
return statearr_24452;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24450__$1,inst_24448);
} else
{if((state_val_24451 === (1)))
{var inst_24444 = [null,data__$1];var inst_24445 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24444,null));var state_24450__$1 = state_24450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24450__$1,(2),ret,inst_24445);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24456 = [null,null,null,null,null,null,null,null];(statearr_24456[(0)] = state_machine__6188__auto__);
(statearr_24456[(1)] = (1));
return statearr_24456;
});
var state_machine__6188__auto____1 = (function (state_24450){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24450);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24457){if((e24457 instanceof Object))
{var ex__6191__auto__ = e24457;var statearr_24458_24476 = state_24450;(statearr_24458_24476[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24477 = state_24450;
state_24450 = G__24477;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24450){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_24459 = f__6203__auto__.call(null);(statearr_24459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_24466){var state_val_24467 = (state_24466[(1)]);if((state_val_24467 === (2)))
{var inst_24463 = (state_24466[(2)]);var inst_24464 = cljs.core.async.close_BANG_.call(null,ret);var state_24466__$1 = (function (){var statearr_24468 = state_24466;(statearr_24468[(7)] = inst_24463);
return statearr_24468;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24466__$1,inst_24464);
} else
{if((state_val_24467 === (1)))
{var inst_24460 = [err];var inst_24461 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24460,null));var state_24466__$1 = state_24466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24466__$1,(2),ret,inst_24461);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24472 = [null,null,null,null,null,null,null,null];(statearr_24472[(0)] = state_machine__6188__auto__);
(statearr_24472[(1)] = (1));
return statearr_24472;
});
var state_machine__6188__auto____1 = (function (state_24466){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24473){if((e24473 instanceof Object))
{var ex__6191__auto__ = e24473;var statearr_24474_24478 = state_24466;(statearr_24474_24478[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24479 = state_24466;
state_24466 = G__24479;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24466){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_24475 = f__6203__auto__.call(null);(statearr_24475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj24443;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj24483 = {"Parent":parent,"Name":dirname};return obj24483;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj24487 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj24487;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj24491 = {"Key":id,"Delete":true};return obj24491;
})());
});
app.dbfile.save = (function save(target,fbid,accessToken,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/save"),"POST",null,(function (){var obj24495 = {"Target":target,"FBID":fbid,"AccessToken":accessToken,"Data":data};return obj24495;
})());
});
app.dbfile.load = (function load(target,fbid,accessToken){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/load"),"POST","json",(function (){var obj24499 = {"Target":target,"FBID":fbid,"AccessToken":accessToken};return obj24499;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_24573){var state_val_24574 = (state_24573[(1)]);if((state_val_24574 === (8)))
{var inst_24569 = (state_24573[(2)]);var state_24573__$1 = state_24573;var statearr_24575_24592 = state_24573__$1;(statearr_24575_24592[(2)] = inst_24569);
(statearr_24575_24592[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24574 === (7)))
{var inst_24566 = [null,null];var inst_24567 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24566,null));var state_24573__$1 = state_24573;var statearr_24576_24593 = state_24573__$1;(statearr_24576_24593[(2)] = inst_24567);
(statearr_24576_24593[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24574 === (6)))
{var inst_24557 = (state_24573[(7)]);var inst_24561 = cljs.core.first.call(null,inst_24557);var inst_24562 = inst_24561.Key;var inst_24563 = [null,inst_24562];var inst_24564 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24563,null));var state_24573__$1 = state_24573;var statearr_24577_24594 = state_24573__$1;(statearr_24577_24594[(2)] = inst_24564);
(statearr_24577_24594[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24574 === (5)))
{var inst_24571 = (state_24573[(2)]);var state_24573__$1 = state_24573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24573__$1,inst_24571);
} else
{if((state_val_24574 === (4)))
{var inst_24551 = (state_24573[(8)]);var inst_24549 = (state_24573[(9)]);var inst_24557 = (state_24573[(7)]);var inst_24550 = (state_24573[(10)]);var inst_24556 = (function (){var content = inst_24551;var err = inst_24550;var vec__24546 = inst_24549;return ((function (content,err,vec__24546,inst_24551,inst_24549,inst_24557,inst_24550,state_val_24574,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__24546,inst_24551,inst_24549,inst_24557,inst_24550,state_val_24574,c__6202__auto__))
})();var inst_24557__$1 = cljs.core.filter.call(null,inst_24556,inst_24551);var inst_24558 = cljs.core.empty_QMARK_.call(null,inst_24557__$1);var inst_24559 = !(inst_24558);var state_24573__$1 = (function (){var statearr_24578 = state_24573;(statearr_24578[(7)] = inst_24557__$1);
return statearr_24578;
})();if(inst_24559)
{var statearr_24579_24595 = state_24573__$1;(statearr_24579_24595[(1)] = (6));
} else
{var statearr_24580_24596 = state_24573__$1;(statearr_24580_24596[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24574 === (3)))
{var inst_24550 = (state_24573[(10)]);var inst_24553 = [inst_24550];var inst_24554 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24553,null));var state_24573__$1 = state_24573;var statearr_24581_24597 = state_24573__$1;(statearr_24581_24597[(2)] = inst_24554);
(statearr_24581_24597[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24574 === (2)))
{var inst_24549 = (state_24573[(9)]);var inst_24550 = (state_24573[(10)]);var inst_24549__$1 = (state_24573[(2)]);var inst_24550__$1 = cljs.core.nth.call(null,inst_24549__$1,(0),null);var inst_24551 = cljs.core.nth.call(null,inst_24549__$1,(1),null);var state_24573__$1 = (function (){var statearr_24582 = state_24573;(statearr_24582[(8)] = inst_24551);
(statearr_24582[(9)] = inst_24549__$1);
(statearr_24582[(10)] = inst_24550__$1);
return statearr_24582;
})();if(cljs.core.truth_(inst_24550__$1))
{var statearr_24583_24598 = state_24573__$1;(statearr_24583_24598[(1)] = (3));
} else
{var statearr_24584_24599 = state_24573__$1;(statearr_24584_24599[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24574 === (1)))
{var inst_24547 = app.dbfile.fileList.call(null,dir);var state_24573__$1 = state_24573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24573__$1,(2),inst_24547);
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
var state_machine__6188__auto____0 = (function (){var statearr_24588 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24588[(0)] = state_machine__6188__auto__);
(statearr_24588[(1)] = (1));
return statearr_24588;
});
var state_machine__6188__auto____1 = (function (state_24573){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24573);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24589){if((e24589 instanceof Object))
{var ex__6191__auto__ = e24589;var statearr_24590_24600 = state_24573;(statearr_24590_24600[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24573);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24589;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24601 = state_24573;
state_24573 = G__24601;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24573){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_24591 = f__6203__auto__.call(null);(statearr_24591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
