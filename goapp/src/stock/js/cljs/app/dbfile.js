// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj84587 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_84594){var state_val_84595 = (state_84594[(1)]);if((state_val_84595 === (2)))
{var inst_84591 = (state_84594[(2)]);var inst_84592 = cljs.core.async.close_BANG_.call(null,ret);var state_84594__$1 = (function (){var statearr_84596 = state_84594;(statearr_84596[(7)] = inst_84591);
return statearr_84596;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84594__$1,inst_84592);
} else
{if((state_val_84595 === (1)))
{var inst_84588 = [null,data__$1];var inst_84589 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84588,null));var state_84594__$1 = state_84594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84594__$1,(2),ret,inst_84589);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84600 = [null,null,null,null,null,null,null,null];(statearr_84600[(0)] = state_machine__6188__auto__);
(statearr_84600[(1)] = (1));
return statearr_84600;
});
var state_machine__6188__auto____1 = (function (state_84594){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84594);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84601){if((e84601 instanceof Object))
{var ex__6191__auto__ = e84601;var statearr_84602_84620 = state_84594;(statearr_84602_84620[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84621 = state_84594;
state_84594 = G__84621;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84594){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_84603 = f__6203__auto__.call(null);(statearr_84603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_84610){var state_val_84611 = (state_84610[(1)]);if((state_val_84611 === (2)))
{var inst_84607 = (state_84610[(2)]);var inst_84608 = cljs.core.async.close_BANG_.call(null,ret);var state_84610__$1 = (function (){var statearr_84612 = state_84610;(statearr_84612[(7)] = inst_84607);
return statearr_84612;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84610__$1,inst_84608);
} else
{if((state_val_84611 === (1)))
{var inst_84604 = [err];var inst_84605 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84604,null));var state_84610__$1 = state_84610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_84610__$1,(2),ret,inst_84605);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_84616 = [null,null,null,null,null,null,null,null];(statearr_84616[(0)] = state_machine__6188__auto__);
(statearr_84616[(1)] = (1));
return statearr_84616;
});
var state_machine__6188__auto____1 = (function (state_84610){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84617){if((e84617 instanceof Object))
{var ex__6191__auto__ = e84617;var statearr_84618_84622 = state_84610;(statearr_84618_84622[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84623 = state_84610;
state_84610 = G__84623;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84610){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_84619 = f__6203__auto__.call(null);(statearr_84619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj84587;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.file = (function file(id,type){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),"GET",type,null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84627 = {"Parent":parent,"Name":dirname};return obj84627;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content,override){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84631 = {"Override":(cljs.core.truth_(override)?"on":"off"),"Parent":parent,"Name":filename,"Content":content};return obj84631;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj84635 = {"Key":id,"Delete":true};return obj84635;
})());
});
app.dbfile.save = (function save(target,fbid,data){return app.dbfile.ajax.call(null,"../simple/save","POST",null,(function (){var obj84639 = {"Target":target,"FBID":fbid,"Data":data};return obj84639;
})());
});
app.dbfile.load = (function load(target,fbid){return app.dbfile.ajax.call(null,"../simple/load","POST","json",(function (){var obj84643 = {"Target":target,"FBID":fbid};return obj84643;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_84717){var state_val_84718 = (state_84717[(1)]);if((state_val_84718 === (8)))
{var inst_84713 = (state_84717[(2)]);var state_84717__$1 = state_84717;var statearr_84719_84736 = state_84717__$1;(statearr_84719_84736[(2)] = inst_84713);
(statearr_84719_84736[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84718 === (7)))
{var inst_84710 = [null,null];var inst_84711 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84710,null));var state_84717__$1 = state_84717;var statearr_84720_84737 = state_84717__$1;(statearr_84720_84737[(2)] = inst_84711);
(statearr_84720_84737[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84718 === (6)))
{var inst_84701 = (state_84717[(7)]);var inst_84705 = cljs.core.first.call(null,inst_84701);var inst_84706 = inst_84705.Key;var inst_84707 = [null,inst_84706];var inst_84708 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84707,null));var state_84717__$1 = state_84717;var statearr_84721_84738 = state_84717__$1;(statearr_84721_84738[(2)] = inst_84708);
(statearr_84721_84738[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84718 === (5)))
{var inst_84715 = (state_84717[(2)]);var state_84717__$1 = state_84717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84717__$1,inst_84715);
} else
{if((state_val_84718 === (4)))
{var inst_84694 = (state_84717[(8)]);var inst_84693 = (state_84717[(9)]);var inst_84695 = (state_84717[(10)]);var inst_84701 = (state_84717[(7)]);var inst_84700 = (function (){var content = inst_84695;var err = inst_84694;var vec__84690 = inst_84693;return ((function (content,err,vec__84690,inst_84694,inst_84693,inst_84695,inst_84701,state_val_84718,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__84690,inst_84694,inst_84693,inst_84695,inst_84701,state_val_84718,c__6202__auto__))
})();var inst_84701__$1 = cljs.core.filter.call(null,inst_84700,inst_84695);var inst_84702 = cljs.core.empty_QMARK_.call(null,inst_84701__$1);var inst_84703 = !(inst_84702);var state_84717__$1 = (function (){var statearr_84722 = state_84717;(statearr_84722[(7)] = inst_84701__$1);
return statearr_84722;
})();if(inst_84703)
{var statearr_84723_84739 = state_84717__$1;(statearr_84723_84739[(1)] = (6));
} else
{var statearr_84724_84740 = state_84717__$1;(statearr_84724_84740[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84718 === (3)))
{var inst_84694 = (state_84717[(8)]);var inst_84697 = [inst_84694];var inst_84698 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_84697,null));var state_84717__$1 = state_84717;var statearr_84725_84741 = state_84717__$1;(statearr_84725_84741[(2)] = inst_84698);
(statearr_84725_84741[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84718 === (2)))
{var inst_84694 = (state_84717[(8)]);var inst_84693 = (state_84717[(9)]);var inst_84693__$1 = (state_84717[(2)]);var inst_84694__$1 = cljs.core.nth.call(null,inst_84693__$1,(0),null);var inst_84695 = cljs.core.nth.call(null,inst_84693__$1,(1),null);var state_84717__$1 = (function (){var statearr_84726 = state_84717;(statearr_84726[(8)] = inst_84694__$1);
(statearr_84726[(9)] = inst_84693__$1);
(statearr_84726[(10)] = inst_84695);
return statearr_84726;
})();if(cljs.core.truth_(inst_84694__$1))
{var statearr_84727_84742 = state_84717__$1;(statearr_84727_84742[(1)] = (3));
} else
{var statearr_84728_84743 = state_84717__$1;(statearr_84728_84743[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_84718 === (1)))
{var inst_84691 = app.dbfile.fileList.call(null,dir);var state_84717__$1 = state_84717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84717__$1,(2),inst_84691);
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
var state_machine__6188__auto____0 = (function (){var statearr_84732 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_84732[(0)] = state_machine__6188__auto__);
(statearr_84732[(1)] = (1));
return statearr_84732;
});
var state_machine__6188__auto____1 = (function (state_84717){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_84717);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e84733){if((e84733 instanceof Object))
{var ex__6191__auto__ = e84733;var statearr_84734_84744 = state_84717;(statearr_84734_84744[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e84733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__84745 = state_84717;
state_84717 = G__84745;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_84717){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_84717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_84735 = f__6203__auto__.call(null);(statearr_84735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_84735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
