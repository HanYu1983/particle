// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj84013 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_84020){var state_val_84021 = (state_84020[(1)]);if((state_val_84021 === (2)))
{var inst_84017 = (state_84020[(2)]);var inst_84018 = cljs.core.async.close_BANG_.call(null,ret);var state_84020__$1 = (function (){var statearr_84022 = state_84020;(statearr_84022[(7)] = inst_84017);
return statearr_84022;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84020__$1,inst_84018);
} else
{if((state_val_84021 === (1)))
{var inst_84014 = [null,data__$1];var inst_84015 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84014,null));var state_84020__$1 = state_84020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84020__$1,(2),ret,inst_84015);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84026 = [null,null,null,null,null,null,null,null];(statearr_84026[(0)] = state_machine__6188__auto__);
(statearr_84026[(1)] = (1));
return statearr_84026;
});
var state_machine__6188__auto____1 = (function (state_84020){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84020);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84027){if((e84027 instanceof Object))
{var ex__6191__auto__ = e84027;var statearr_84028_84046 = state_84020;(statearr_84028_84046[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84020);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84047 = state_84020;
state_84020 = G__84047;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84020){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_84029 = f__6203__auto__.call(null);(statearr_84029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_84036){var state_val_84037 = (state_84036[(1)]);if((state_val_84037 === (2)))
{var inst_84033 = (state_84036[(2)]);var inst_84034 = cljs.core.async.close_BANG_.call(null,ret);var state_84036__$1 = (function (){var statearr_84038 = state_84036;(statearr_84038[(7)] = inst_84033);
return statearr_84038;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84036__$1,inst_84034);
} else
{if((state_val_84037 === (1)))
{var inst_84030 = [err];var inst_84031 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84030,null));var state_84036__$1 = state_84036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84036__$1,(2),ret,inst_84031);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84042 = [null,null,null,null,null,null,null,null];(statearr_84042[(0)] = state_machine__6188__auto__);
(statearr_84042[(1)] = (1));
return statearr_84042;
});
var state_machine__6188__auto____1 = (function (state_84036){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84043){if((e84043 instanceof Object))
{var ex__6191__auto__ = e84043;var statearr_84044_84048 = state_84036;(statearr_84044_84048[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84049 = state_84036;
state_84036 = G__84049;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84036){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_84045 = f__6203__auto__.call(null);(statearr_84045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj84013;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84053 = {"Parent":parent,"Name":dirname};return obj84053;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84057 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj84057;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84061 = {"Key":id,"Delete":true};return obj84061;
})());
});
app.dbfile.save = (function save(target,fbid,data){return app.dbfile.ajax.call(null,"../simple/save","POST",null,(function (){var obj84065 = {"Target":target,"FBID":fbid,"Data":data};return obj84065;
})());
});
app.dbfile.load = (function load(target,fbid){return app.dbfile.ajax.call(null,"../simple/save","POST","json",(function (){var obj84069 = {"Target":target,"FBID":fbid};return obj84069;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84143){var state_val_84144 = (state_84143[(1)]);if((state_val_84144 === (8)))
{var inst_84139 = (state_84143[(2)]);var state_84143__$1 = state_84143;var statearr_84145_84162 = state_84143__$1;(statearr_84145_84162[(2)] = inst_84139);
(statearr_84145_84162[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84144 === (7)))
{var inst_84136 = [null,null];var inst_84137 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84136,null));var state_84143__$1 = state_84143;var statearr_84146_84163 = state_84143__$1;(statearr_84146_84163[(2)] = inst_84137);
(statearr_84146_84163[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84144 === (6)))
{var inst_84127 = (state_84143[(7)]);var inst_84131 = cljs.core.first.call(null,inst_84127);var inst_84132 = inst_84131.Key;var inst_84133 = [null,inst_84132];var inst_84134 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84133,null));var state_84143__$1 = state_84143;var statearr_84147_84164 = state_84143__$1;(statearr_84147_84164[(2)] = inst_84134);
(statearr_84147_84164[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84144 === (5)))
{var inst_84141 = (state_84143[(2)]);var state_84143__$1 = state_84143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84143__$1,inst_84141);
} else
{if((state_val_84144 === (4)))
{var inst_84119 = (state_84143[(8)]);var inst_84120 = (state_84143[(9)]);var inst_84127 = (state_84143[(7)]);var inst_84121 = (state_84143[(10)]);var inst_84126 = (function (){var content = inst_84121;var err = inst_84120;var vec__84116 = inst_84119;return ((function (content,err,vec__84116,inst_84119,inst_84120,inst_84127,inst_84121,state_val_84144,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__84116,inst_84119,inst_84120,inst_84127,inst_84121,state_val_84144,c__6202__auto__))
})();var inst_84127__$1 = cljs.core.filter.call(null,inst_84126,inst_84121);var inst_84128 = cljs.core.empty_QMARK_.call(null,inst_84127__$1);var inst_84129 = !(inst_84128);var state_84143__$1 = (function (){var statearr_84148 = state_84143;(statearr_84148[(7)] = inst_84127__$1);
return statearr_84148;
})();if(inst_84129)
{var statearr_84149_84165 = state_84143__$1;(statearr_84149_84165[(1)] = (6));
} else
{var statearr_84150_84166 = state_84143__$1;(statearr_84150_84166[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84144 === (3)))
{var inst_84120 = (state_84143[(9)]);var inst_84123 = [inst_84120];var inst_84124 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84123,null));var state_84143__$1 = state_84143;var statearr_84151_84167 = state_84143__$1;(statearr_84151_84167[(2)] = inst_84124);
(statearr_84151_84167[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84144 === (2)))
{var inst_84119 = (state_84143[(8)]);var inst_84120 = (state_84143[(9)]);var inst_84119__$1 = (state_84143[(2)]);var inst_84120__$1 = cljs.core.nth.call(null,inst_84119__$1,(0),null);var inst_84121 = cljs.core.nth.call(null,inst_84119__$1,(1),null);var state_84143__$1 = (function (){var statearr_84152 = state_84143;(statearr_84152[(8)] = inst_84119__$1);
(statearr_84152[(9)] = inst_84120__$1);
(statearr_84152[(10)] = inst_84121);
return statearr_84152;
})();if(cljs.core.truth_(inst_84120__$1))
{var statearr_84153_84168 = state_84143__$1;(statearr_84153_84168[(1)] = (3));
} else
{var statearr_84154_84169 = state_84143__$1;(statearr_84154_84169[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84144 === (1)))
{var inst_84117 = app.dbfile.fileList.call(null,dir);var state_84143__$1 = state_84143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84143__$1,(2),inst_84117);
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
var state_machine__6188__auto____0 = (function (){var statearr_84158 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_84158[(0)] = state_machine__6188__auto__);
(statearr_84158[(1)] = (1));
return statearr_84158;
});
var state_machine__6188__auto____1 = (function (state_84143){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84143);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84159){if((e84159 instanceof Object))
{var ex__6191__auto__ = e84159;var statearr_84160_84170 = state_84143;(statearr_84160_84170[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84171 = state_84143;
state_84143 = G__84171;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84143){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84161 = f__6203__auto__.call(null);(statearr_84161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
