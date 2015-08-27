// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj76979 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_76986){var state_val_76987 = (state_76986[(1)]);if((state_val_76987 === (2)))
{var inst_76983 = (state_76986[(2)]);var inst_76984 = cljs.core.async.close_BANG_.call(null,ret);var state_76986__$1 = (function (){var statearr_76988 = state_76986;(statearr_76988[(7)] = inst_76983);
return statearr_76988;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76986__$1,inst_76984);
} else
{if((state_val_76987 === (1)))
{var inst_76980 = [null,data__$1];var inst_76981 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76980,null));var state_76986__$1 = state_76986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_76986__$1,(2),ret,inst_76981);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_76992 = [null,null,null,null,null,null,null,null];(statearr_76992[(0)] = state_machine__6188__auto__);
(statearr_76992[(1)] = (1));
return statearr_76992;
});
var state_machine__6188__auto____1 = (function (state_76986){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_76986);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e76993){if((e76993 instanceof Object))
{var ex__6191__auto__ = e76993;var statearr_76994_77012 = state_76986;(statearr_76994_77012[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e76993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77013 = state_76986;
state_76986 = G__77013;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_76986){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_76986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_76995 = f__6203__auto__.call(null);(statearr_76995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_76995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_77002){var state_val_77003 = (state_77002[(1)]);if((state_val_77003 === (2)))
{var inst_76999 = (state_77002[(2)]);var inst_77000 = cljs.core.async.close_BANG_.call(null,ret);var state_77002__$1 = (function (){var statearr_77004 = state_77002;(statearr_77004[(7)] = inst_76999);
return statearr_77004;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77002__$1,inst_77000);
} else
{if((state_val_77003 === (1)))
{var inst_76996 = [err];var inst_76997 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_76996,null));var state_77002__$1 = state_77002;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77002__$1,(2),ret,inst_76997);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_77008 = [null,null,null,null,null,null,null,null];(statearr_77008[(0)] = state_machine__6188__auto__);
(statearr_77008[(1)] = (1));
return statearr_77008;
});
var state_machine__6188__auto____1 = (function (state_77002){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77002);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77009){if((e77009 instanceof Object))
{var ex__6191__auto__ = e77009;var statearr_77010_77014 = state_77002;(statearr_77010_77014[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77002);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77015 = state_77002;
state_77002 = G__77015;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77002){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_77011 = f__6203__auto__.call(null);(statearr_77011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj76979;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj77019 = {"Parent":parent,"Name":dirname};return obj77019;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj77023 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj77023;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj77027 = {"Key":id,"Delete":true};return obj77027;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_77101){var state_val_77102 = (state_77101[(1)]);if((state_val_77102 === (8)))
{var inst_77097 = (state_77101[(2)]);var state_77101__$1 = state_77101;var statearr_77103_77120 = state_77101__$1;(statearr_77103_77120[(2)] = inst_77097);
(statearr_77103_77120[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77102 === (7)))
{var inst_77094 = [null,null];var inst_77095 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77094,null));var state_77101__$1 = state_77101;var statearr_77104_77121 = state_77101__$1;(statearr_77104_77121[(2)] = inst_77095);
(statearr_77104_77121[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77102 === (6)))
{var inst_77085 = (state_77101[(7)]);var inst_77089 = cljs.core.first.call(null,inst_77085);var inst_77090 = inst_77089.Key;var inst_77091 = [null,inst_77090];var inst_77092 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77091,null));var state_77101__$1 = state_77101;var statearr_77105_77122 = state_77101__$1;(statearr_77105_77122[(2)] = inst_77092);
(statearr_77105_77122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77102 === (5)))
{var inst_77099 = (state_77101[(2)]);var state_77101__$1 = state_77101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77101__$1,inst_77099);
} else
{if((state_val_77102 === (4)))
{var inst_77078 = (state_77101[(8)]);var inst_77079 = (state_77101[(9)]);var inst_77085 = (state_77101[(7)]);var inst_77077 = (state_77101[(10)]);var inst_77084 = (function (){var content = inst_77079;var err = inst_77078;var vec__77074 = inst_77077;return ((function (content,err,vec__77074,inst_77078,inst_77079,inst_77085,inst_77077,state_val_77102,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__77074,inst_77078,inst_77079,inst_77085,inst_77077,state_val_77102,c__6202__auto__))
})();var inst_77085__$1 = cljs.core.filter.call(null,inst_77084,inst_77079);var inst_77086 = cljs.core.empty_QMARK_.call(null,inst_77085__$1);var inst_77087 = !(inst_77086);var state_77101__$1 = (function (){var statearr_77106 = state_77101;(statearr_77106[(7)] = inst_77085__$1);
return statearr_77106;
})();if(inst_77087)
{var statearr_77107_77123 = state_77101__$1;(statearr_77107_77123[(1)] = (6));
} else
{var statearr_77108_77124 = state_77101__$1;(statearr_77108_77124[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77102 === (3)))
{var inst_77078 = (state_77101[(8)]);var inst_77081 = [inst_77078];var inst_77082 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_77081,null));var state_77101__$1 = state_77101;var statearr_77109_77125 = state_77101__$1;(statearr_77109_77125[(2)] = inst_77082);
(statearr_77109_77125[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77102 === (2)))
{var inst_77078 = (state_77101[(8)]);var inst_77077 = (state_77101[(10)]);var inst_77077__$1 = (state_77101[(2)]);var inst_77078__$1 = cljs.core.nth.call(null,inst_77077__$1,(0),null);var inst_77079 = cljs.core.nth.call(null,inst_77077__$1,(1),null);var state_77101__$1 = (function (){var statearr_77110 = state_77101;(statearr_77110[(8)] = inst_77078__$1);
(statearr_77110[(9)] = inst_77079);
(statearr_77110[(10)] = inst_77077__$1);
return statearr_77110;
})();if(cljs.core.truth_(inst_77078__$1))
{var statearr_77111_77126 = state_77101__$1;(statearr_77111_77126[(1)] = (3));
} else
{var statearr_77112_77127 = state_77101__$1;(statearr_77112_77127[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_77102 === (1)))
{var inst_77075 = app.dbfile.fileList.call(null,dir);var state_77101__$1 = state_77101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77101__$1,(2),inst_77075);
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
var state_machine__6188__auto____0 = (function (){var statearr_77116 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_77116[(0)] = state_machine__6188__auto__);
(statearr_77116[(1)] = (1));
return statearr_77116;
});
var state_machine__6188__auto____1 = (function (state_77101){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_77101);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e77117){if((e77117 instanceof Object))
{var ex__6191__auto__ = e77117;var statearr_77118_77128 = state_77101;(statearr_77118_77128[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e77117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__77129 = state_77101;
state_77101 = G__77129;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_77101){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_77101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_77119 = f__6203__auto__.call(null);(statearr_77119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_77119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
