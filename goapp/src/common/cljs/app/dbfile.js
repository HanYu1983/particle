// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile._STAR_domain_STAR_ = cljs.core.atom.call(null,"../");
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj16499 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_16506){var state_val_16507 = (state_16506[(1)]);if((state_val_16507 === (2)))
{var inst_16503 = (state_16506[(2)]);var inst_16504 = cljs.core.async.close_BANG_.call(null,ret);var state_16506__$1 = (function (){var statearr_16508 = state_16506;(statearr_16508[(7)] = inst_16503);
return statearr_16508;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16506__$1,inst_16504);
} else
{if((state_val_16507 === (1)))
{var inst_16500 = [null,data__$1];var inst_16501 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16500,null));var state_16506__$1 = state_16506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16506__$1,(2),ret,inst_16501);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16512 = [null,null,null,null,null,null,null,null];(statearr_16512[(0)] = state_machine__6188__auto__);
(statearr_16512[(1)] = (1));
return statearr_16512;
});
var state_machine__6188__auto____1 = (function (state_16506){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16506);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16513){if((e16513 instanceof Object))
{var ex__6191__auto__ = e16513;var statearr_16514_16532 = state_16506;(statearr_16514_16532[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16506);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16533 = state_16506;
state_16506 = G__16533;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16506){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_16515 = f__6203__auto__.call(null);(statearr_16515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_16515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_16522){var state_val_16523 = (state_16522[(1)]);if((state_val_16523 === (2)))
{var inst_16519 = (state_16522[(2)]);var inst_16520 = cljs.core.async.close_BANG_.call(null,ret);var state_16522__$1 = (function (){var statearr_16524 = state_16522;(statearr_16524[(7)] = inst_16519);
return statearr_16524;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16522__$1,inst_16520);
} else
{if((state_val_16523 === (1)))
{var inst_16516 = [err];var inst_16517 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16516,null));var state_16522__$1 = state_16522;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16522__$1,(2),ret,inst_16517);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_16528 = [null,null,null,null,null,null,null,null];(statearr_16528[(0)] = state_machine__6188__auto__);
(statearr_16528[(1)] = (1));
return statearr_16528;
});
var state_machine__6188__auto____1 = (function (state_16522){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16522);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16529){if((e16529 instanceof Object))
{var ex__6191__auto__ = e16529;var statearr_16530_16534 = state_16522;(statearr_16530_16534[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16522);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16535 = state_16522;
state_16522 = G__16535;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16522){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_16531 = f__6203__auto__.call(null);(statearr_16531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_16531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj16499;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj16539 = {"Parent":parent,"Name":dirname};return obj16539;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj16543 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj16543;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj16547 = {"Key":id,"Delete":true};return obj16547;
})());
});
app.dbfile.save = (function save(target,fbid,accessToken,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/save"),"POST",null,(function (){var obj16551 = {"Target":target,"FBID":fbid,"AccessToken":accessToken,"Data":data};return obj16551;
})());
});
app.dbfile.load = (function load(target,fbid,accessToken){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/load"),"POST","json",(function (){var obj16555 = {"Target":target,"FBID":fbid,"AccessToken":accessToken};return obj16555;
})());
});
app.dbfile.saveToUser = (function saveToUser(fbid,accessToken,filename,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"fn/saveUser"),"POST","json",(function (){var obj16559 = {"Data":data,"FileName":filename,"FBID":fbid,"AccessToken":accessToken};return obj16559;
})());
});
app.dbfile.loadFromUser = (function loadFromUser(fbid,accessToken,filename){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"fn/loadUser"),"POST","text",(function (){var obj16563 = {"FileName":filename,"FBID":fbid,"AccessToken":accessToken};return obj16563;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_16637){var state_val_16638 = (state_16637[(1)]);if((state_val_16638 === (8)))
{var inst_16633 = (state_16637[(2)]);var state_16637__$1 = state_16637;var statearr_16639_16656 = state_16637__$1;(statearr_16639_16656[(2)] = inst_16633);
(statearr_16639_16656[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16638 === (7)))
{var inst_16630 = [null,null];var inst_16631 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16630,null));var state_16637__$1 = state_16637;var statearr_16640_16657 = state_16637__$1;(statearr_16640_16657[(2)] = inst_16631);
(statearr_16640_16657[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16638 === (6)))
{var inst_16621 = (state_16637[(7)]);var inst_16625 = cljs.core.first.call(null,inst_16621);var inst_16626 = inst_16625.Key;var inst_16627 = [null,inst_16626];var inst_16628 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16627,null));var state_16637__$1 = state_16637;var statearr_16641_16658 = state_16637__$1;(statearr_16641_16658[(2)] = inst_16628);
(statearr_16641_16658[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16638 === (5)))
{var inst_16635 = (state_16637[(2)]);var state_16637__$1 = state_16637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16637__$1,inst_16635);
} else
{if((state_val_16638 === (4)))
{var inst_16613 = (state_16637[(8)]);var inst_16614 = (state_16637[(9)]);var inst_16621 = (state_16637[(7)]);var inst_16615 = (state_16637[(10)]);var inst_16620 = (function (){var content = inst_16615;var err = inst_16614;var vec__16610 = inst_16613;return ((function (content,err,vec__16610,inst_16613,inst_16614,inst_16621,inst_16615,state_val_16638,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__16610,inst_16613,inst_16614,inst_16621,inst_16615,state_val_16638,c__6202__auto__))
})();var inst_16621__$1 = cljs.core.filter.call(null,inst_16620,inst_16615);var inst_16622 = cljs.core.empty_QMARK_.call(null,inst_16621__$1);var inst_16623 = !(inst_16622);var state_16637__$1 = (function (){var statearr_16642 = state_16637;(statearr_16642[(7)] = inst_16621__$1);
return statearr_16642;
})();if(inst_16623)
{var statearr_16643_16659 = state_16637__$1;(statearr_16643_16659[(1)] = (6));
} else
{var statearr_16644_16660 = state_16637__$1;(statearr_16644_16660[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16638 === (3)))
{var inst_16614 = (state_16637[(9)]);var inst_16617 = [inst_16614];var inst_16618 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_16617,null));var state_16637__$1 = state_16637;var statearr_16645_16661 = state_16637__$1;(statearr_16645_16661[(2)] = inst_16618);
(statearr_16645_16661[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16638 === (2)))
{var inst_16613 = (state_16637[(8)]);var inst_16614 = (state_16637[(9)]);var inst_16613__$1 = (state_16637[(2)]);var inst_16614__$1 = cljs.core.nth.call(null,inst_16613__$1,(0),null);var inst_16615 = cljs.core.nth.call(null,inst_16613__$1,(1),null);var state_16637__$1 = (function (){var statearr_16646 = state_16637;(statearr_16646[(8)] = inst_16613__$1);
(statearr_16646[(9)] = inst_16614__$1);
(statearr_16646[(10)] = inst_16615);
return statearr_16646;
})();if(cljs.core.truth_(inst_16614__$1))
{var statearr_16647_16662 = state_16637__$1;(statearr_16647_16662[(1)] = (3));
} else
{var statearr_16648_16663 = state_16637__$1;(statearr_16648_16663[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16638 === (1)))
{var inst_16611 = app.dbfile.fileList.call(null,dir);var state_16637__$1 = state_16637;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16637__$1,(2),inst_16611);
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
var state_machine__6188__auto____0 = (function (){var statearr_16652 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16652[(0)] = state_machine__6188__auto__);
(statearr_16652[(1)] = (1));
return statearr_16652;
});
var state_machine__6188__auto____1 = (function (state_16637){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_16637);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e16653){if((e16653 instanceof Object))
{var ex__6191__auto__ = e16653;var statearr_16654_16664 = state_16637;(statearr_16654_16664[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16637);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16665 = state_16637;
state_16637 = G__16665;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_16637){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_16637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_16655 = f__6203__auto__.call(null);(statearr_16655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_16655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
