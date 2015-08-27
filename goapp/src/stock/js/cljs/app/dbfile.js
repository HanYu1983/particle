// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj83819 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_83826){var state_val_83827 = (state_83826[(1)]);if((state_val_83827 === (2)))
{var inst_83823 = (state_83826[(2)]);var inst_83824 = cljs.core.async.close_BANG_.call(null,ret);var state_83826__$1 = (function (){var statearr_83828 = state_83826;(statearr_83828[(7)] = inst_83823);
return statearr_83828;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83826__$1,inst_83824);
} else
{if((state_val_83827 === (1)))
{var inst_83820 = [null,data__$1];var inst_83821 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_83820,null));var state_83826__$1 = state_83826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83826__$1,(2),ret,inst_83821);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_83832 = [null,null,null,null,null,null,null,null];(statearr_83832[(0)] = state_machine__6188__auto__);
(statearr_83832[(1)] = (1));
return statearr_83832;
});
var state_machine__6188__auto____1 = (function (state_83826){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_83826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e83833){if((e83833 instanceof Object))
{var ex__6191__auto__ = e83833;var statearr_83834_83852 = state_83826;(statearr_83834_83852[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e83833;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83853 = state_83826;
state_83826 = G__83853;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_83826){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_83826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_83835 = f__6203__auto__.call(null);(statearr_83835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_83835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_83842){var state_val_83843 = (state_83842[(1)]);if((state_val_83843 === (2)))
{var inst_83839 = (state_83842[(2)]);var inst_83840 = cljs.core.async.close_BANG_.call(null,ret);var state_83842__$1 = (function (){var statearr_83844 = state_83842;(statearr_83844[(7)] = inst_83839);
return statearr_83844;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83842__$1,inst_83840);
} else
{if((state_val_83843 === (1)))
{var inst_83836 = [err];var inst_83837 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_83836,null));var state_83842__$1 = state_83842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_83842__$1,(2),ret,inst_83837);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_83848 = [null,null,null,null,null,null,null,null];(statearr_83848[(0)] = state_machine__6188__auto__);
(statearr_83848[(1)] = (1));
return statearr_83848;
});
var state_machine__6188__auto____1 = (function (state_83842){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_83842);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e83849){if((e83849 instanceof Object))
{var ex__6191__auto__ = e83849;var statearr_83850_83854 = state_83842;(statearr_83850_83854[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e83849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83855 = state_83842;
state_83842 = G__83855;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_83842){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_83842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_83851 = f__6203__auto__.call(null);(statearr_83851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_83851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj83819;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj83859 = {"Parent":parent,"Name":dirname};return obj83859;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj83863 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj83863;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj83867 = {"Key":id,"Delete":true};return obj83867;
})());
});
app.dbfile.save = (function save(target,fbid,data){return app.dbfile.ajax.call(null,"../simple/save","POST",null,(function (){var obj83871 = {"Target":target,"FBID":fbid,"Data":data};return obj83871;
})());
});
app.dbfile.load = (function load(target,fbid){return app.dbfile.ajax.call(null,"../simple/save","POST","json",(function (){var obj83875 = {"Target":target,"FBID":fbid};return obj83875;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_83949){var state_val_83950 = (state_83949[(1)]);if((state_val_83950 === (8)))
{var inst_83945 = (state_83949[(2)]);var state_83949__$1 = state_83949;var statearr_83951_83968 = state_83949__$1;(statearr_83951_83968[(2)] = inst_83945);
(statearr_83951_83968[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83950 === (7)))
{var inst_83942 = [null,null];var inst_83943 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_83942,null));var state_83949__$1 = state_83949;var statearr_83952_83969 = state_83949__$1;(statearr_83952_83969[(2)] = inst_83943);
(statearr_83952_83969[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83950 === (6)))
{var inst_83933 = (state_83949[(7)]);var inst_83937 = cljs.core.first.call(null,inst_83933);var inst_83938 = inst_83937.Key;var inst_83939 = [null,inst_83938];var inst_83940 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_83939,null));var state_83949__$1 = state_83949;var statearr_83953_83970 = state_83949__$1;(statearr_83953_83970[(2)] = inst_83940);
(statearr_83953_83970[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83950 === (5)))
{var inst_83947 = (state_83949[(2)]);var state_83949__$1 = state_83949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83949__$1,inst_83947);
} else
{if((state_val_83950 === (4)))
{var inst_83925 = (state_83949[(8)]);var inst_83933 = (state_83949[(7)]);var inst_83926 = (state_83949[(9)]);var inst_83927 = (state_83949[(10)]);var inst_83932 = (function (){var content = inst_83927;var err = inst_83926;var vec__83922 = inst_83925;return ((function (content,err,vec__83922,inst_83925,inst_83933,inst_83926,inst_83927,state_val_83950,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__83922,inst_83925,inst_83933,inst_83926,inst_83927,state_val_83950,c__6202__auto__))
})();var inst_83933__$1 = cljs.core.filter.call(null,inst_83932,inst_83927);var inst_83934 = cljs.core.empty_QMARK_.call(null,inst_83933__$1);var inst_83935 = !(inst_83934);var state_83949__$1 = (function (){var statearr_83954 = state_83949;(statearr_83954[(7)] = inst_83933__$1);
return statearr_83954;
})();if(inst_83935)
{var statearr_83955_83971 = state_83949__$1;(statearr_83955_83971[(1)] = (6));
} else
{var statearr_83956_83972 = state_83949__$1;(statearr_83956_83972[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83950 === (3)))
{var inst_83926 = (state_83949[(9)]);var inst_83929 = [inst_83926];var inst_83930 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_83929,null));var state_83949__$1 = state_83949;var statearr_83957_83973 = state_83949__$1;(statearr_83957_83973[(2)] = inst_83930);
(statearr_83957_83973[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83950 === (2)))
{var inst_83925 = (state_83949[(8)]);var inst_83926 = (state_83949[(9)]);var inst_83925__$1 = (state_83949[(2)]);var inst_83926__$1 = cljs.core.nth.call(null,inst_83925__$1,(0),null);var inst_83927 = cljs.core.nth.call(null,inst_83925__$1,(1),null);var state_83949__$1 = (function (){var statearr_83958 = state_83949;(statearr_83958[(8)] = inst_83925__$1);
(statearr_83958[(9)] = inst_83926__$1);
(statearr_83958[(10)] = inst_83927);
return statearr_83958;
})();if(cljs.core.truth_(inst_83926__$1))
{var statearr_83959_83974 = state_83949__$1;(statearr_83959_83974[(1)] = (3));
} else
{var statearr_83960_83975 = state_83949__$1;(statearr_83960_83975[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_83950 === (1)))
{var inst_83923 = app.dbfile.fileList.call(null,dir);var state_83949__$1 = state_83949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83949__$1,(2),inst_83923);
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
var state_machine__6188__auto____0 = (function (){var statearr_83964 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_83964[(0)] = state_machine__6188__auto__);
(statearr_83964[(1)] = (1));
return statearr_83964;
});
var state_machine__6188__auto____1 = (function (state_83949){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_83949);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e83965){if((e83965 instanceof Object))
{var ex__6191__auto__ = e83965;var statearr_83966_83976 = state_83949;(statearr_83966_83976[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83949);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e83965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__83977 = state_83949;
state_83949 = G__83977;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_83949){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_83949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_83967 = f__6203__auto__.call(null);(statearr_83967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_83967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
