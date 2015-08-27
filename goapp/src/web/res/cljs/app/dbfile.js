// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj77165 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_77172){var state_val_77173 = (state_77172[(1)]);if((state_val_77173 === (2)))
{var inst_77169 = (state_77172[(2)]);var inst_77170 = cljs.core.async.close_BANG_.call(null,ret);var state_77172__$1 = (function (){var statearr_77174 = state_77172;(statearr_77174[(7)] = inst_77169);
return statearr_77174;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77172__$1,inst_77170);
} else
{if((state_val_77173 === (1)))
{var inst_77166 = [null,data__$1];var inst_77167 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77166,null));var state_77172__$1 = state_77172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77172__$1,(2),ret,inst_77167);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77178 = [null,null,null,null,null,null,null,null];(statearr_77178[(0)] = state_machine__6188__auto__);
(statearr_77178[(1)] = (1));
return statearr_77178;
});
var state_machine__6188__auto____1 = (function (state_77172){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77172);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77179){if((e77179 instanceof Object))
{var ex__6191__auto__ = e77179;var statearr_77180_77198 = state_77172;(statearr_77180_77198[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77199 = state_77172;
state_77172 = G__77199;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77172){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_77181 = f__6203__auto__.call(null);(statearr_77181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_77188){var state_val_77189 = (state_77188[(1)]);if((state_val_77189 === (2)))
{var inst_77185 = (state_77188[(2)]);var inst_77186 = cljs.core.async.close_BANG_.call(null,ret);var state_77188__$1 = (function (){var statearr_77190 = state_77188;(statearr_77190[(7)] = inst_77185);
return statearr_77190;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77188__$1,inst_77186);
} else
{if((state_val_77189 === (1)))
{var inst_77182 = [err];var inst_77183 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77182,null));var state_77188__$1 = state_77188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77188__$1,(2),ret,inst_77183);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77194 = [null,null,null,null,null,null,null,null];(statearr_77194[(0)] = state_machine__6188__auto__);
(statearr_77194[(1)] = (1));
return statearr_77194;
});
var state_machine__6188__auto____1 = (function (state_77188){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77188);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77195){if((e77195 instanceof Object))
{var ex__6191__auto__ = e77195;var statearr_77196_77200 = state_77188;(statearr_77196_77200[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77201 = state_77188;
state_77188 = G__77201;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77188){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_77197 = f__6203__auto__.call(null);(statearr_77197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj77165;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj77205 = {"Parent":parent,"Name":dirname};return obj77205;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj77209 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj77209;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj77213 = {"Key":id,"Delete":true};return obj77213;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_77287){var state_val_77288 = (state_77287[(1)]);if((state_val_77288 === (8)))
{var inst_77283 = (state_77287[(2)]);var state_77287__$1 = state_77287;var statearr_77289_77306 = state_77287__$1;(statearr_77289_77306[(2)] = inst_77283);
(statearr_77289_77306[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77288 === (7)))
{var inst_77280 = [null,null];var inst_77281 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77280,null));var state_77287__$1 = state_77287;var statearr_77290_77307 = state_77287__$1;(statearr_77290_77307[(2)] = inst_77281);
(statearr_77290_77307[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77288 === (6)))
{var inst_77271 = (state_77287[(7)]);var inst_77275 = cljs.core.first.call(null,inst_77271);var inst_77276 = inst_77275.Key;var inst_77277 = [null,inst_77276];var inst_77278 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77277,null));var state_77287__$1 = state_77287;var statearr_77291_77308 = state_77287__$1;(statearr_77291_77308[(2)] = inst_77278);
(statearr_77291_77308[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77288 === (5)))
{var inst_77285 = (state_77287[(2)]);var state_77287__$1 = state_77287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77287__$1,inst_77285);
} else
{if((state_val_77288 === (4)))
{var inst_77265 = (state_77287[(8)]);var inst_77263 = (state_77287[(9)]);var inst_77271 = (state_77287[(7)]);var inst_77264 = (state_77287[(10)]);var inst_77270 = (function (){var content = inst_77265;var err = inst_77264;var vec__77260 = inst_77263;return ((function (content,err,vec__77260,inst_77265,inst_77263,inst_77271,inst_77264,state_val_77288,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__77260,inst_77265,inst_77263,inst_77271,inst_77264,state_val_77288,c__6202__auto__))
})();var inst_77271__$1 = cljs.core.filter.call(null,inst_77270,inst_77265);var inst_77272 = cljs.core.empty_QMARK_.call(null,inst_77271__$1);var inst_77273 = !(inst_77272);var state_77287__$1 = (function (){var statearr_77292 = state_77287;(statearr_77292[(7)] = inst_77271__$1);
return statearr_77292;
})();if(inst_77273)
{var statearr_77293_77309 = state_77287__$1;(statearr_77293_77309[(1)] = (6));
} else
{var statearr_77294_77310 = state_77287__$1;(statearr_77294_77310[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77288 === (3)))
{var inst_77264 = (state_77287[(10)]);var inst_77267 = [inst_77264];var inst_77268 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77267,null));var state_77287__$1 = state_77287;var statearr_77295_77311 = state_77287__$1;(statearr_77295_77311[(2)] = inst_77268);
(statearr_77295_77311[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77288 === (2)))
{var inst_77263 = (state_77287[(9)]);var inst_77264 = (state_77287[(10)]);var inst_77263__$1 = (state_77287[(2)]);var inst_77264__$1 = cljs.core.nth.call(null,inst_77263__$1,(0),null);var inst_77265 = cljs.core.nth.call(null,inst_77263__$1,(1),null);var state_77287__$1 = (function (){var statearr_77296 = state_77287;(statearr_77296[(8)] = inst_77265);
(statearr_77296[(9)] = inst_77263__$1);
(statearr_77296[(10)] = inst_77264__$1);
return statearr_77296;
})();if(cljs.core.truth_(inst_77264__$1))
{var statearr_77297_77312 = state_77287__$1;(statearr_77297_77312[(1)] = (3));
} else
{var statearr_77298_77313 = state_77287__$1;(statearr_77298_77313[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77288 === (1)))
{var inst_77261 = app.dbfile.fileList.call(null,dir);var state_77287__$1 = state_77287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77287__$1,(2),inst_77261);
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
var state_machine__6188__auto____0 = (function (){var statearr_77302 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_77302[(0)] = state_machine__6188__auto__);
(statearr_77302[(1)] = (1));
return statearr_77302;
});
var state_machine__6188__auto____1 = (function (state_77287){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77287);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77303){if((e77303 instanceof Object))
{var ex__6191__auto__ = e77303;var statearr_77304_77314 = state_77287;(statearr_77304_77314[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77315 = state_77287;
state_77287 = G__77315;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77287){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_77305 = f__6203__auto__.call(null);(statearr_77305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
