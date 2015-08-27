// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj84781 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_84788){var state_val_84789 = (state_84788[(1)]);if((state_val_84789 === (2)))
{var inst_84785 = (state_84788[(2)]);var inst_84786 = cljs.core.async.close_BANG_.call(null,ret);var state_84788__$1 = (function (){var statearr_84790 = state_84788;(statearr_84790[(7)] = inst_84785);
return statearr_84790;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84788__$1,inst_84786);
} else
{if((state_val_84789 === (1)))
{var inst_84782 = [null,data__$1];var inst_84783 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84782,null));var state_84788__$1 = state_84788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84788__$1,(2),ret,inst_84783);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84794 = [null,null,null,null,null,null,null,null];(statearr_84794[(0)] = state_machine__6188__auto__);
(statearr_84794[(1)] = (1));
return statearr_84794;
});
var state_machine__6188__auto____1 = (function (state_84788){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84788);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84795){if((e84795 instanceof Object))
{var ex__6191__auto__ = e84795;var statearr_84796_84814 = state_84788;(statearr_84796_84814[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84815 = state_84788;
state_84788 = G__84815;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84788){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_84797 = f__6203__auto__.call(null);(statearr_84797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_84804){var state_val_84805 = (state_84804[(1)]);if((state_val_84805 === (2)))
{var inst_84801 = (state_84804[(2)]);var inst_84802 = cljs.core.async.close_BANG_.call(null,ret);var state_84804__$1 = (function (){var statearr_84806 = state_84804;(statearr_84806[(7)] = inst_84801);
return statearr_84806;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84804__$1,inst_84802);
} else
{if((state_val_84805 === (1)))
{var inst_84798 = [err];var inst_84799 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84798,null));var state_84804__$1 = state_84804;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84804__$1,(2),ret,inst_84799);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84810 = [null,null,null,null,null,null,null,null];(statearr_84810[(0)] = state_machine__6188__auto__);
(statearr_84810[(1)] = (1));
return statearr_84810;
});
var state_machine__6188__auto____1 = (function (state_84804){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84804);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84811){if((e84811 instanceof Object))
{var ex__6191__auto__ = e84811;var statearr_84812_84816 = state_84804;(statearr_84812_84816[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84804);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84817 = state_84804;
state_84804 = G__84817;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84804){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_84813 = f__6203__auto__.call(null);(statearr_84813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj84781;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84821 = {"Parent":parent,"Name":dirname};return obj84821;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84825 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj84825;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84829 = {"Key":id,"Delete":true};return obj84829;
})());
});
app.dbfile.save = (function save(target,fbid,data){return app.dbfile.ajax.call(null,"../simple/save","POST",null,(function (){var obj84833 = {"Target":target,"FBID":fbid,"Data":data};return obj84833;
})());
});
app.dbfile.load = (function load(target,fbid){return app.dbfile.ajax.call(null,"../simple/load","POST","json",(function (){var obj84837 = {"Target":target,"FBID":fbid};return obj84837;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84911){var state_val_84912 = (state_84911[(1)]);if((state_val_84912 === (8)))
{var inst_84907 = (state_84911[(2)]);var state_84911__$1 = state_84911;var statearr_84913_84930 = state_84911__$1;(statearr_84913_84930[(2)] = inst_84907);
(statearr_84913_84930[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84912 === (7)))
{var inst_84904 = [null,null];var inst_84905 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84904,null));var state_84911__$1 = state_84911;var statearr_84914_84931 = state_84911__$1;(statearr_84914_84931[(2)] = inst_84905);
(statearr_84914_84931[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84912 === (6)))
{var inst_84895 = (state_84911[(7)]);var inst_84899 = cljs.core.first.call(null,inst_84895);var inst_84900 = inst_84899.Key;var inst_84901 = [null,inst_84900];var inst_84902 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84901,null));var state_84911__$1 = state_84911;var statearr_84915_84932 = state_84911__$1;(statearr_84915_84932[(2)] = inst_84902);
(statearr_84915_84932[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84912 === (5)))
{var inst_84909 = (state_84911[(2)]);var state_84911__$1 = state_84911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84911__$1,inst_84909);
} else
{if((state_val_84912 === (4)))
{var inst_84889 = (state_84911[(8)]);var inst_84888 = (state_84911[(9)]);var inst_84887 = (state_84911[(10)]);var inst_84895 = (state_84911[(7)]);var inst_84894 = (function (){var content = inst_84889;var err = inst_84888;var vec__84884 = inst_84887;return ((function (content,err,vec__84884,inst_84889,inst_84888,inst_84887,inst_84895,state_val_84912,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__84884,inst_84889,inst_84888,inst_84887,inst_84895,state_val_84912,c__6202__auto__))
})();var inst_84895__$1 = cljs.core.filter.call(null,inst_84894,inst_84889);var inst_84896 = cljs.core.empty_QMARK_.call(null,inst_84895__$1);var inst_84897 = !(inst_84896);var state_84911__$1 = (function (){var statearr_84916 = state_84911;(statearr_84916[(7)] = inst_84895__$1);
return statearr_84916;
})();if(inst_84897)
{var statearr_84917_84933 = state_84911__$1;(statearr_84917_84933[(1)] = (6));
} else
{var statearr_84918_84934 = state_84911__$1;(statearr_84918_84934[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84912 === (3)))
{var inst_84888 = (state_84911[(9)]);var inst_84891 = [inst_84888];var inst_84892 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84891,null));var state_84911__$1 = state_84911;var statearr_84919_84935 = state_84911__$1;(statearr_84919_84935[(2)] = inst_84892);
(statearr_84919_84935[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84912 === (2)))
{var inst_84888 = (state_84911[(9)]);var inst_84887 = (state_84911[(10)]);var inst_84887__$1 = (state_84911[(2)]);var inst_84888__$1 = cljs.core.nth.call(null,inst_84887__$1,(0),null);var inst_84889 = cljs.core.nth.call(null,inst_84887__$1,(1),null);var state_84911__$1 = (function (){var statearr_84920 = state_84911;(statearr_84920[(8)] = inst_84889);
(statearr_84920[(9)] = inst_84888__$1);
(statearr_84920[(10)] = inst_84887__$1);
return statearr_84920;
})();if(cljs.core.truth_(inst_84888__$1))
{var statearr_84921_84936 = state_84911__$1;(statearr_84921_84936[(1)] = (3));
} else
{var statearr_84922_84937 = state_84911__$1;(statearr_84922_84937[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84912 === (1)))
{var inst_84885 = app.dbfile.fileList.call(null,dir);var state_84911__$1 = state_84911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84911__$1,(2),inst_84885);
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
var state_machine__6188__auto____0 = (function (){var statearr_84926 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_84926[(0)] = state_machine__6188__auto__);
(statearr_84926[(1)] = (1));
return statearr_84926;
});
var state_machine__6188__auto____1 = (function (state_84911){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84911);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84927){if((e84927 instanceof Object))
{var ex__6191__auto__ = e84927;var statearr_84928_84938 = state_84911;(statearr_84928_84938[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84911);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84939 = state_84911;
state_84911 = G__84939;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84911){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84929 = f__6203__auto__.call(null);(statearr_84929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
