// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile._STAR_domain_STAR_ = cljs.core.atom.call(null,"../");
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj17687 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_17696){var state_val_17697 = (state_17696[(1)]);if((state_val_17697 === (2)))
{var inst_17693 = (state_17696[(2)]);var inst_17694 = cljs.core.async.close_BANG_.call(null,ret);var state_17696__$1 = (function (){var statearr_17698 = state_17696;(statearr_17698[(7)] = inst_17693);
return statearr_17698;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17696__$1,inst_17694);
} else
{if((state_val_17697 === (1)))
{var inst_17688 = data__$1.Error;var inst_17689 = data__$1.Info;var inst_17690 = [inst_17688,inst_17689];var inst_17691 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17690,null));var state_17696__$1 = state_17696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17696__$1,(2),ret,inst_17691);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17702 = [null,null,null,null,null,null,null,null];(statearr_17702[(0)] = state_machine__6188__auto__);
(statearr_17702[(1)] = (1));
return statearr_17702;
});
var state_machine__6188__auto____1 = (function (state_17696){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17696);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17703){if((e17703 instanceof Object))
{var ex__6191__auto__ = e17703;var statearr_17704_17722 = state_17696;(statearr_17704_17722[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17723 = state_17696;
state_17696 = G__17723;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17696){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_17705 = f__6203__auto__.call(null);(statearr_17705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_17712){var state_val_17713 = (state_17712[(1)]);if((state_val_17713 === (2)))
{var inst_17709 = (state_17712[(2)]);var inst_17710 = cljs.core.async.close_BANG_.call(null,ret);var state_17712__$1 = (function (){var statearr_17714 = state_17712;(statearr_17714[(7)] = inst_17709);
return statearr_17714;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17712__$1,inst_17710);
} else
{if((state_val_17713 === (1)))
{var inst_17706 = [err];var inst_17707 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17706,null));var state_17712__$1 = state_17712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17712__$1,(2),ret,inst_17707);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_17718 = [null,null,null,null,null,null,null,null];(statearr_17718[(0)] = state_machine__6188__auto__);
(statearr_17718[(1)] = (1));
return statearr_17718;
});
var state_machine__6188__auto____1 = (function (state_17712){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17712);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17719){if((e17719 instanceof Object))
{var ex__6191__auto__ = e17719;var statearr_17720_17724 = state_17712;(statearr_17720_17724[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17712);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17725 = state_17712;
state_17712 = G__17725;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17712){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_17721 = f__6203__auto__.call(null);(statearr_17721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj17687;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj17729 = {"Parent":parent,"Name":dirname};return obj17729;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj17733 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj17733;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj17737 = {"Key":id,"Delete":true};return obj17737;
})());
});
app.dbfile.save = (function save(target,fbid,accessToken,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/save"),"POST",null,(function (){var obj17741 = {"Target":target,"FBID":fbid,"AccessToken":accessToken,"Data":data};return obj17741;
})());
});
app.dbfile.load = (function load(target,fbid,accessToken){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/load"),"POST","json",(function (){var obj17745 = {"Target":target,"FBID":fbid,"AccessToken":accessToken};return obj17745;
})());
});
app.dbfile.saveToUser = (function saveToUser(fbid,accessToken,filename,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"fn/saveUser"),"POST","json",(function (){var obj17749 = {"Data":data,"FileName":filename,"FBID":fbid,"AccessToken":accessToken};return obj17749;
})());
});
app.dbfile.loadFromUser = (function loadFromUser(fbid,accessToken,filename){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"fn/loadUser"),"POST","json",(function (){var obj17753 = {"FileName":filename,"FBID":fbid,"AccessToken":accessToken};return obj17753;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_17827){var state_val_17828 = (state_17827[(1)]);if((state_val_17828 === (8)))
{var inst_17823 = (state_17827[(2)]);var state_17827__$1 = state_17827;var statearr_17829_17846 = state_17827__$1;(statearr_17829_17846[(2)] = inst_17823);
(statearr_17829_17846[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17828 === (7)))
{var inst_17820 = [null,null];var inst_17821 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17820,null));var state_17827__$1 = state_17827;var statearr_17830_17847 = state_17827__$1;(statearr_17830_17847[(2)] = inst_17821);
(statearr_17830_17847[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17828 === (6)))
{var inst_17811 = (state_17827[(7)]);var inst_17815 = cljs.core.first.call(null,inst_17811);var inst_17816 = inst_17815.Key;var inst_17817 = [null,inst_17816];var inst_17818 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17817,null));var state_17827__$1 = state_17827;var statearr_17831_17848 = state_17827__$1;(statearr_17831_17848[(2)] = inst_17818);
(statearr_17831_17848[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17828 === (5)))
{var inst_17825 = (state_17827[(2)]);var state_17827__$1 = state_17827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17827__$1,inst_17825);
} else
{if((state_val_17828 === (4)))
{var inst_17803 = (state_17827[(8)]);var inst_17811 = (state_17827[(7)]);var inst_17804 = (state_17827[(9)]);var inst_17805 = (state_17827[(10)]);var inst_17810 = (function (){var content = inst_17805;var err = inst_17804;var vec__17800 = inst_17803;return ((function (content,err,vec__17800,inst_17803,inst_17811,inst_17804,inst_17805,state_val_17828,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__17800,inst_17803,inst_17811,inst_17804,inst_17805,state_val_17828,c__6202__auto__))
})();var inst_17811__$1 = cljs.core.filter.call(null,inst_17810,inst_17805);var inst_17812 = cljs.core.empty_QMARK_.call(null,inst_17811__$1);var inst_17813 = !(inst_17812);var state_17827__$1 = (function (){var statearr_17832 = state_17827;(statearr_17832[(7)] = inst_17811__$1);
return statearr_17832;
})();if(inst_17813)
{var statearr_17833_17849 = state_17827__$1;(statearr_17833_17849[(1)] = (6));
} else
{var statearr_17834_17850 = state_17827__$1;(statearr_17834_17850[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17828 === (3)))
{var inst_17804 = (state_17827[(9)]);var inst_17807 = [inst_17804];var inst_17808 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17807,null));var state_17827__$1 = state_17827;var statearr_17835_17851 = state_17827__$1;(statearr_17835_17851[(2)] = inst_17808);
(statearr_17835_17851[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17828 === (2)))
{var inst_17803 = (state_17827[(8)]);var inst_17804 = (state_17827[(9)]);var inst_17803__$1 = (state_17827[(2)]);var inst_17804__$1 = cljs.core.nth.call(null,inst_17803__$1,(0),null);var inst_17805 = cljs.core.nth.call(null,inst_17803__$1,(1),null);var state_17827__$1 = (function (){var statearr_17836 = state_17827;(statearr_17836[(8)] = inst_17803__$1);
(statearr_17836[(9)] = inst_17804__$1);
(statearr_17836[(10)] = inst_17805);
return statearr_17836;
})();if(cljs.core.truth_(inst_17804__$1))
{var statearr_17837_17852 = state_17827__$1;(statearr_17837_17852[(1)] = (3));
} else
{var statearr_17838_17853 = state_17827__$1;(statearr_17838_17853[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17828 === (1)))
{var inst_17801 = app.dbfile.fileList.call(null,dir);var state_17827__$1 = state_17827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17827__$1,(2),inst_17801);
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
var state_machine__6188__auto____0 = (function (){var statearr_17842 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17842[(0)] = state_machine__6188__auto__);
(statearr_17842[(1)] = (1));
return statearr_17842;
});
var state_machine__6188__auto____1 = (function (state_17827){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_17827);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e17843){if((e17843 instanceof Object))
{var ex__6191__auto__ = e17843;var statearr_17844_17854 = state_17827;(statearr_17844_17854[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17827);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17855 = state_17827;
state_17827 = G__17855;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_17827){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_17827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_17845 = f__6203__auto__.call(null);(statearr_17845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_17845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
