// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile._STAR_domain_STAR_ = cljs.core.atom.call(null,"../");
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj24637 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_24644){var state_val_24645 = (state_24644[(1)]);if((state_val_24645 === (2)))
{var inst_24641 = (state_24644[(2)]);var inst_24642 = cljs.core.async.close_BANG_.call(null,ret);var state_24644__$1 = (function (){var statearr_24646 = state_24644;(statearr_24646[(7)] = inst_24641);
return statearr_24646;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24644__$1,inst_24642);
} else
{if((state_val_24645 === (1)))
{var inst_24638 = [null,data__$1];var inst_24639 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24638,null));var state_24644__$1 = state_24644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24644__$1,(2),ret,inst_24639);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24650 = [null,null,null,null,null,null,null,null];(statearr_24650[(0)] = state_machine__6188__auto__);
(statearr_24650[(1)] = (1));
return statearr_24650;
});
var state_machine__6188__auto____1 = (function (state_24644){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24644);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24651){if((e24651 instanceof Object))
{var ex__6191__auto__ = e24651;var statearr_24652_24670 = state_24644;(statearr_24652_24670[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24671 = state_24644;
state_24644 = G__24671;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24644){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_24653 = f__6203__auto__.call(null);(statearr_24653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_24660){var state_val_24661 = (state_24660[(1)]);if((state_val_24661 === (2)))
{var inst_24657 = (state_24660[(2)]);var inst_24658 = cljs.core.async.close_BANG_.call(null,ret);var state_24660__$1 = (function (){var statearr_24662 = state_24660;(statearr_24662[(7)] = inst_24657);
return statearr_24662;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24660__$1,inst_24658);
} else
{if((state_val_24661 === (1)))
{var inst_24654 = [err];var inst_24655 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24654,null));var state_24660__$1 = state_24660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24660__$1,(2),ret,inst_24655);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24666 = [null,null,null,null,null,null,null,null];(statearr_24666[(0)] = state_machine__6188__auto__);
(statearr_24666[(1)] = (1));
return statearr_24666;
});
var state_machine__6188__auto____1 = (function (state_24660){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24667){if((e24667 instanceof Object))
{var ex__6191__auto__ = e24667;var statearr_24668_24672 = state_24660;(statearr_24668_24672[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24673 = state_24660;
state_24660 = G__24673;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24660){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_24669 = f__6203__auto__.call(null);(statearr_24669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj24637;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj24677 = {"Parent":parent,"Name":dirname};return obj24677;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj24681 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj24681;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj24685 = {"Key":id,"Delete":true};return obj24685;
})());
});
app.dbfile.save = (function save(target,fbid,accessToken,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/save"),"POST",null,(function (){var obj24689 = {"Target":target,"FBID":fbid,"AccessToken":accessToken,"Data":data};return obj24689;
})());
});
app.dbfile.load = (function load(target,fbid,accessToken){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/load"),"POST","json",(function (){var obj24693 = {"Target":target,"FBID":fbid,"AccessToken":accessToken};return obj24693;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_24767){var state_val_24768 = (state_24767[(1)]);if((state_val_24768 === (8)))
{var inst_24763 = (state_24767[(2)]);var state_24767__$1 = state_24767;var statearr_24769_24786 = state_24767__$1;(statearr_24769_24786[(2)] = inst_24763);
(statearr_24769_24786[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24768 === (7)))
{var inst_24760 = [null,null];var inst_24761 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24760,null));var state_24767__$1 = state_24767;var statearr_24770_24787 = state_24767__$1;(statearr_24770_24787[(2)] = inst_24761);
(statearr_24770_24787[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24768 === (6)))
{var inst_24751 = (state_24767[(7)]);var inst_24755 = cljs.core.first.call(null,inst_24751);var inst_24756 = inst_24755.Key;var inst_24757 = [null,inst_24756];var inst_24758 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24757,null));var state_24767__$1 = state_24767;var statearr_24771_24788 = state_24767__$1;(statearr_24771_24788[(2)] = inst_24758);
(statearr_24771_24788[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24768 === (5)))
{var inst_24765 = (state_24767[(2)]);var state_24767__$1 = state_24767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24767__$1,inst_24765);
} else
{if((state_val_24768 === (4)))
{var inst_24745 = (state_24767[(8)]);var inst_24743 = (state_24767[(9)]);var inst_24751 = (state_24767[(7)]);var inst_24744 = (state_24767[(10)]);var inst_24750 = (function (){var content = inst_24745;var err = inst_24744;var vec__24740 = inst_24743;return ((function (content,err,vec__24740,inst_24745,inst_24743,inst_24751,inst_24744,state_val_24768,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__24740,inst_24745,inst_24743,inst_24751,inst_24744,state_val_24768,c__6202__auto__))
})();var inst_24751__$1 = cljs.core.filter.call(null,inst_24750,inst_24745);var inst_24752 = cljs.core.empty_QMARK_.call(null,inst_24751__$1);var inst_24753 = !(inst_24752);var state_24767__$1 = (function (){var statearr_24772 = state_24767;(statearr_24772[(7)] = inst_24751__$1);
return statearr_24772;
})();if(inst_24753)
{var statearr_24773_24789 = state_24767__$1;(statearr_24773_24789[(1)] = (6));
} else
{var statearr_24774_24790 = state_24767__$1;(statearr_24774_24790[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24768 === (3)))
{var inst_24744 = (state_24767[(10)]);var inst_24747 = [inst_24744];var inst_24748 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24747,null));var state_24767__$1 = state_24767;var statearr_24775_24791 = state_24767__$1;(statearr_24775_24791[(2)] = inst_24748);
(statearr_24775_24791[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24768 === (2)))
{var inst_24743 = (state_24767[(9)]);var inst_24744 = (state_24767[(10)]);var inst_24743__$1 = (state_24767[(2)]);var inst_24744__$1 = cljs.core.nth.call(null,inst_24743__$1,(0),null);var inst_24745 = cljs.core.nth.call(null,inst_24743__$1,(1),null);var state_24767__$1 = (function (){var statearr_24776 = state_24767;(statearr_24776[(8)] = inst_24745);
(statearr_24776[(9)] = inst_24743__$1);
(statearr_24776[(10)] = inst_24744__$1);
return statearr_24776;
})();if(cljs.core.truth_(inst_24744__$1))
{var statearr_24777_24792 = state_24767__$1;(statearr_24777_24792[(1)] = (3));
} else
{var statearr_24778_24793 = state_24767__$1;(statearr_24778_24793[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24768 === (1)))
{var inst_24741 = app.dbfile.fileList.call(null,dir);var state_24767__$1 = state_24767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24767__$1,(2),inst_24741);
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
var state_machine__6188__auto____0 = (function (){var statearr_24782 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24782[(0)] = state_machine__6188__auto__);
(statearr_24782[(1)] = (1));
return statearr_24782;
});
var state_machine__6188__auto____1 = (function (state_24767){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24767);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24783){if((e24783 instanceof Object))
{var ex__6191__auto__ = e24783;var statearr_24784_24794 = state_24767;(statearr_24784_24794[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24795 = state_24767;
state_24767 = G__24795;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24767){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_24785 = f__6203__auto__.call(null);(statearr_24785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
