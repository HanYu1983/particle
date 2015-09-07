// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile._STAR_domain_STAR_ = cljs.core.atom.call(null,"../");
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj9049 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_9056){var state_val_9057 = (state_9056[(1)]);if((state_val_9057 === (2)))
{var inst_9053 = (state_9056[(2)]);var inst_9054 = cljs.core.async.close_BANG_.call(null,ret);var state_9056__$1 = (function (){var statearr_9058 = state_9056;(statearr_9058[(7)] = inst_9053);
return statearr_9058;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9056__$1,inst_9054);
} else
{if((state_val_9057 === (1)))
{var inst_9050 = [null,data__$1];var inst_9051 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9050,null));var state_9056__$1 = state_9056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9056__$1,(2),ret,inst_9051);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9062 = [null,null,null,null,null,null,null,null];(statearr_9062[(0)] = state_machine__6189__auto__);
(statearr_9062[(1)] = (1));
return statearr_9062;
});
var state_machine__6189__auto____1 = (function (state_9056){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9056);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9063){if((e9063 instanceof Object))
{var ex__6192__auto__ = e9063;var statearr_9064_9082 = state_9056;(statearr_9064_9082[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9083 = state_9056;
state_9056 = G__9083;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9056){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_9065 = f__6204__auto__.call(null);(statearr_9065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,ret){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,ret){
return (function (state_9072){var state_val_9073 = (state_9072[(1)]);if((state_val_9073 === (2)))
{var inst_9069 = (state_9072[(2)]);var inst_9070 = cljs.core.async.close_BANG_.call(null,ret);var state_9072__$1 = (function (){var statearr_9074 = state_9072;(statearr_9074[(7)] = inst_9069);
return statearr_9074;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9072__$1,inst_9070);
} else
{if((state_val_9073 === (1)))
{var inst_9066 = [err];var inst_9067 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9066,null));var state_9072__$1 = state_9072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9072__$1,(2),ret,inst_9067);
} else
{return null;
}
}
});})(c__6203__auto__,ret))
;return ((function (switch__6188__auto__,c__6203__auto__,ret){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9078 = [null,null,null,null,null,null,null,null];(statearr_9078[(0)] = state_machine__6189__auto__);
(statearr_9078[(1)] = (1));
return statearr_9078;
});
var state_machine__6189__auto____1 = (function (state_9072){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9072);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9079){if((e9079 instanceof Object))
{var ex__6192__auto__ = e9079;var statearr_9080_9084 = state_9072;(statearr_9080_9084[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9072);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9085 = state_9072;
state_9072 = G__9085;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9072){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,ret))
})();var state__6205__auto__ = (function (){var statearr_9081 = f__6204__auto__.call(null);(statearr_9081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,ret))
);
return c__6203__auto__;
});})(ret))
};return obj9049;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj9089 = {"Parent":parent,"Name":dirname};return obj9089;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj9093 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj9093;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"dbfile/"),"POST",null,(function (){var obj9097 = {"Key":id,"Delete":true};return obj9097;
})());
});
app.dbfile.save = (function save(target,fbid,accessToken,data){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/save"),"POST",null,(function (){var obj9101 = {"Target":target,"FBID":fbid,"AccessToken":accessToken,"Data":data};return obj9101;
})());
});
app.dbfile.load = (function load(target,fbid,accessToken){return app.dbfile.ajax.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.dbfile._STAR_domain_STAR_))+"simple/load"),"POST","json",(function (){var obj9105 = {"Target":target,"FBID":fbid,"AccessToken":accessToken};return obj9105;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_9179){var state_val_9180 = (state_9179[(1)]);if((state_val_9180 === (8)))
{var inst_9175 = (state_9179[(2)]);var state_9179__$1 = state_9179;var statearr_9181_9198 = state_9179__$1;(statearr_9181_9198[(2)] = inst_9175);
(statearr_9181_9198[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9180 === (7)))
{var inst_9172 = [null,null];var inst_9173 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9172,null));var state_9179__$1 = state_9179;var statearr_9182_9199 = state_9179__$1;(statearr_9182_9199[(2)] = inst_9173);
(statearr_9182_9199[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9180 === (6)))
{var inst_9163 = (state_9179[(7)]);var inst_9167 = cljs.core.first.call(null,inst_9163);var inst_9168 = inst_9167.Key;var inst_9169 = [null,inst_9168];var inst_9170 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9169,null));var state_9179__$1 = state_9179;var statearr_9183_9200 = state_9179__$1;(statearr_9183_9200[(2)] = inst_9170);
(statearr_9183_9200[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9180 === (5)))
{var inst_9177 = (state_9179[(2)]);var state_9179__$1 = state_9179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9179__$1,inst_9177);
} else
{if((state_val_9180 === (4)))
{var inst_9163 = (state_9179[(7)]);var inst_9156 = (state_9179[(8)]);var inst_9155 = (state_9179[(9)]);var inst_9157 = (state_9179[(10)]);var inst_9162 = (function (){var content = inst_9157;var err = inst_9156;var vec__9152 = inst_9155;return ((function (content,err,vec__9152,inst_9163,inst_9156,inst_9155,inst_9157,state_val_9180,c__6203__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__9152,inst_9163,inst_9156,inst_9155,inst_9157,state_val_9180,c__6203__auto__))
})();var inst_9163__$1 = cljs.core.filter.call(null,inst_9162,inst_9157);var inst_9164 = cljs.core.empty_QMARK_.call(null,inst_9163__$1);var inst_9165 = !(inst_9164);var state_9179__$1 = (function (){var statearr_9184 = state_9179;(statearr_9184[(7)] = inst_9163__$1);
return statearr_9184;
})();if(inst_9165)
{var statearr_9185_9201 = state_9179__$1;(statearr_9185_9201[(1)] = (6));
} else
{var statearr_9186_9202 = state_9179__$1;(statearr_9186_9202[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9180 === (3)))
{var inst_9156 = (state_9179[(8)]);var inst_9159 = [inst_9156];var inst_9160 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9159,null));var state_9179__$1 = state_9179;var statearr_9187_9203 = state_9179__$1;(statearr_9187_9203[(2)] = inst_9160);
(statearr_9187_9203[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9180 === (2)))
{var inst_9156 = (state_9179[(8)]);var inst_9155 = (state_9179[(9)]);var inst_9155__$1 = (state_9179[(2)]);var inst_9156__$1 = cljs.core.nth.call(null,inst_9155__$1,(0),null);var inst_9157 = cljs.core.nth.call(null,inst_9155__$1,(1),null);var state_9179__$1 = (function (){var statearr_9188 = state_9179;(statearr_9188[(8)] = inst_9156__$1);
(statearr_9188[(9)] = inst_9155__$1);
(statearr_9188[(10)] = inst_9157);
return statearr_9188;
})();if(cljs.core.truth_(inst_9156__$1))
{var statearr_9189_9204 = state_9179__$1;(statearr_9189_9204[(1)] = (3));
} else
{var statearr_9190_9205 = state_9179__$1;(statearr_9190_9205[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9180 === (1)))
{var inst_9153 = app.dbfile.fileList.call(null,dir);var state_9179__$1 = state_9179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9179__$1,(2),inst_9153);
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_9194 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9194[(0)] = state_machine__6189__auto__);
(statearr_9194[(1)] = (1));
return statearr_9194;
});
var state_machine__6189__auto____1 = (function (state_9179){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_9179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e9195){if((e9195 instanceof Object))
{var ex__6192__auto__ = e9195;var statearr_9196_9206 = state_9179;(statearr_9196_9206[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9207 = state_9179;
state_9179 = G__9207;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_9179){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_9179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_9197 = f__6204__auto__.call(null);(statearr_9197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_9197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
