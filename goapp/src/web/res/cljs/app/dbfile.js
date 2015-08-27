// Compiled by ClojureScript 0.0-2268
goog.provide('app.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.dbfile.ajax = (function ajax(url,type,dataType,data){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj63473 = {"url":url,"type":type,"dataType":dataType,"data":data,"success":((function (ret){
return (function (data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_63480){var state_val_63481 = (state_63480[(1)]);if((state_val_63481 === (2)))
{var inst_63477 = (state_63480[(2)]);var inst_63478 = cljs.core.async.close_BANG_.call(null,ret);var state_63480__$1 = (function (){var statearr_63482 = state_63480;(statearr_63482[(7)] = inst_63477);
return statearr_63482;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63480__$1,inst_63478);
} else
{if((state_val_63481 === (1)))
{var inst_63474 = [null,data__$1];var inst_63475 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63474,null));var state_63480__$1 = state_63480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63480__$1,(2),ret,inst_63475);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_63486 = [null,null,null,null,null,null,null,null];(statearr_63486[(0)] = state_machine__6188__auto__);
(statearr_63486[(1)] = (1));
return statearr_63486;
});
var state_machine__6188__auto____1 = (function (state_63480){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_63480);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e63487){if((e63487 instanceof Object))
{var ex__6191__auto__ = e63487;var statearr_63488_63506 = state_63480;(statearr_63488_63506[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63480);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e63487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63507 = state_63480;
state_63480 = G__63507;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_63480){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_63480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_63489 = f__6203__auto__.call(null);(statearr_63489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_63489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_63496){var state_val_63497 = (state_63496[(1)]);if((state_val_63497 === (2)))
{var inst_63493 = (state_63496[(2)]);var inst_63494 = cljs.core.async.close_BANG_.call(null,ret);var state_63496__$1 = (function (){var statearr_63498 = state_63496;(statearr_63498[(7)] = inst_63493);
return statearr_63498;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63496__$1,inst_63494);
} else
{if((state_val_63497 === (1)))
{var inst_63490 = [err];var inst_63491 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63490,null));var state_63496__$1 = state_63496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63496__$1,(2),ret,inst_63491);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_63502 = [null,null,null,null,null,null,null,null];(statearr_63502[(0)] = state_machine__6188__auto__);
(statearr_63502[(1)] = (1));
return statearr_63502;
});
var state_machine__6188__auto____1 = (function (state_63496){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_63496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e63503){if((e63503 instanceof Object))
{var ex__6191__auto__ = e63503;var statearr_63504_63508 = state_63496;(statearr_63504_63508[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e63503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63509 = state_63496;
state_63496 = G__63509;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_63496){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_63496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_63505 = f__6203__auto__.call(null);(statearr_63505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_63505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj63473;
})());
return ret;
});
app.dbfile.fileList = (function fileList(dirId){return app.dbfile.ajax.call(null,("../dbfile/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirId)),"GET","json",null);
});
app.dbfile.makeDir = (function makeDir(parent,dirname){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj63513 = {"Parent":parent,"Name":dirname};return obj63513;
})());
});
app.dbfile.makeFile = (function makeFile(parent,filename,content){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj63517 = {"Parent":parent,"Name":filename,"Content":content};return obj63517;
})());
});
app.dbfile.deleteFile = (function deleteFile(id){return app.dbfile.ajax.call(null,"../dbfile/","POST",null,(function (){var obj63521 = {"Key":id,"Delete":true};return obj63521;
})());
});
app.dbfile.name__GT_id = (function name__GT_id(dir,filename){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_63607){var state_val_63608 = (state_63607[(1)]);if((state_val_63608 === (8)))
{var inst_63603 = (state_63607[(2)]);var state_63607__$1 = state_63607;var statearr_63609_63626 = state_63607__$1;(statearr_63609_63626[(2)] = inst_63603);
(statearr_63609_63626[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63608 === (7)))
{var inst_63600 = [null,null];var inst_63601 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63600,null));var state_63607__$1 = state_63607;var statearr_63610_63627 = state_63607__$1;(statearr_63610_63627[(2)] = inst_63601);
(statearr_63610_63627[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63608 === (6)))
{var inst_63585 = (state_63607[(7)]);var inst_63595 = cljs.core.first.call(null,inst_63585);var inst_63596 = inst_63595.Key;var inst_63597 = [null,inst_63596];var inst_63598 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63597,null));var state_63607__$1 = state_63607;var statearr_63611_63628 = state_63607__$1;(statearr_63611_63628[(2)] = inst_63598);
(statearr_63611_63628[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63608 === (5)))
{var inst_63605 = (state_63607[(2)]);var state_63607__$1 = state_63607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63607__$1,inst_63605);
} else
{if((state_val_63608 === (4)))
{var inst_63579 = (state_63607[(8)]);var inst_63578 = (state_63607[(9)]);var inst_63577 = (state_63607[(10)]);var inst_63585 = (state_63607[(7)]);var inst_63584 = (function (){var content = inst_63579;var err = inst_63578;var vec__63574 = inst_63577;return ((function (content,err,vec__63574,inst_63579,inst_63578,inst_63577,inst_63585,state_val_63608,c__6202__auto__){
return (function (data){return cljs.core._EQ_.call(null,data.Name,filename);
});
;})(content,err,vec__63574,inst_63579,inst_63578,inst_63577,inst_63585,state_val_63608,c__6202__auto__))
})();var inst_63585__$1 = cljs.core.filter.call(null,inst_63584,inst_63579);var inst_63586 = cljs.core.empty_QMARK_.call(null,inst_63585__$1);var inst_63587 = !(inst_63586);var inst_63588 = cljs.core.pr_str.call(null,inst_63585__$1);var inst_63589 = console.log(inst_63588);var inst_63590 = console.log(inst_63587);var inst_63591 = cljs.core.first.call(null,inst_63585__$1);var inst_63592 = inst_63591.Key;var inst_63593 = console.log(inst_63592);var state_63607__$1 = (function (){var statearr_63612 = state_63607;(statearr_63612[(11)] = inst_63589);
(statearr_63612[(12)] = inst_63590);
(statearr_63612[(13)] = inst_63593);
(statearr_63612[(7)] = inst_63585__$1);
return statearr_63612;
})();if(inst_63587)
{var statearr_63613_63629 = state_63607__$1;(statearr_63613_63629[(1)] = (6));
} else
{var statearr_63614_63630 = state_63607__$1;(statearr_63614_63630[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63608 === (3)))
{var inst_63578 = (state_63607[(9)]);var inst_63581 = [inst_63578];var inst_63582 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_63581,null));var state_63607__$1 = state_63607;var statearr_63615_63631 = state_63607__$1;(statearr_63615_63631[(2)] = inst_63582);
(statearr_63615_63631[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63608 === (2)))
{var inst_63578 = (state_63607[(9)]);var inst_63577 = (state_63607[(10)]);var inst_63577__$1 = (state_63607[(2)]);var inst_63578__$1 = cljs.core.nth.call(null,inst_63577__$1,(0),null);var inst_63579 = cljs.core.nth.call(null,inst_63577__$1,(1),null);var state_63607__$1 = (function (){var statearr_63616 = state_63607;(statearr_63616[(8)] = inst_63579);
(statearr_63616[(9)] = inst_63578__$1);
(statearr_63616[(10)] = inst_63577__$1);
return statearr_63616;
})();if(cljs.core.truth_(inst_63578__$1))
{var statearr_63617_63632 = state_63607__$1;(statearr_63617_63632[(1)] = (3));
} else
{var statearr_63618_63633 = state_63607__$1;(statearr_63618_63633[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63608 === (1)))
{var inst_63575 = app.dbfile.fileList.call(null,dir);var state_63607__$1 = state_63607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63607__$1,(2),inst_63575);
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
var state_machine__6188__auto____0 = (function (){var statearr_63622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63622[(0)] = state_machine__6188__auto__);
(statearr_63622[(1)] = (1));
return statearr_63622;
});
var state_machine__6188__auto____1 = (function (state_63607){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_63607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e63623){if((e63623 instanceof Object))
{var ex__6191__auto__ = e63623;var statearr_63624_63634 = state_63607;(statearr_63624_63634[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e63623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63635 = state_63607;
state_63607 = G__63635;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_63607){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_63607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_63625 = f__6203__auto__.call(null);(statearr_63625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_63625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
